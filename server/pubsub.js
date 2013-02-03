Meteor.Router.add('/pubsub', function () {
    if (this.request.query['hub.challenge']) {
        console.log('got challenge ' + this.request.query['hub.challenge']);
        return this.request.query['hub.challenge'];
    }
    if (this.request.method === 'POST') {
        _.each(this.request.body.items, function (entry) {
            console.log(entry);
            ShoutBoxEntries.insert({
                userId : entry.actor.displayName,
                text : entry.body,
                date : entry.postedTime
            });
        });
        return;
    }
    console.log('no handler');
    return 'pubsub endpoint'
});

Meteor.methods((function () {
    var hubRequest = function (userId, mode) {
        var feed = 'http://dev.status.net:8080/index.php/api/statuses/user_timeline/' + userId + '.json';
        var hub = 'http://dev.status.net:8080/index.php/main/push/hub';
        console.log(mode + ' to hub');
        Meteor.http.post(hub, {
            params : {
                'hub.topic' : feed,
                'hub.callback' : 'http://dev.jsmashup.net:3000/pubsub',
                'hub.mode' : mode,
                'hub.verify' : 'async'
            }
        }, function (error, response) {
            if (error) {
                console.log(response);
            }
        });
    };
    return {
        subscribeToHub : function (userId) {
            hubRequest(userId, 'subscribe');
        },
        unsubscribeFromHub : function (userId) {
            hubRequest(userId, 'unsubscribe');
        }
    };
}()));
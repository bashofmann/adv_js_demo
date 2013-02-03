var statusNet = {
    loadUser : function () {
        var accessToken = Meteor.BrowserStore.get('access_token'),
            url;

        if (!accessToken) {
            return;
        }

        url = 'http://dev.status.net:8080/index.php/api/users/show.json';
        Meteor.http.get(url, {
            params : {
                oauth_token : accessToken
            }
        }, function (error, result) {
            if (error) {
                return;
            }
            var user = JSON.parse(result.content);
            var currentUser = Meteor.user();
            Meteor.users.update(
                {
                    _id : currentUser._id
                },
                {
                    '$set' : {
                        statusNetUserName : user.name,
                        statusNetUserId : user.id
                    }
                }
            );
        });
    },
    subscribe : function () {
        var currentUser = Meteor.user();
        if (!currentUser.hasStatusNetSubscription) {
            Meteor.call('subscribeToHub', Meteor.BrowserStore.get('user_id'));
            Meteor.users.update({_id : currentUser._id}, {'$set' : { hasStatusNetSubscription : true}});
        }
    },
    unsubscribe : function () {
        var currentUser = Meteor.user();
        if (currentUser.hasStatusNetSubscription) {
            Meteor.call('unsubscribeFromHub', Meteor.BrowserStore.get('user_id'));
            Meteor.users.update({_id : currentUser._id}, {'$set' : { hasStatusNetSubscription : false}});
        }
    }

};
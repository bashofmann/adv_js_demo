var peer;

Meteor.autorun(function() {
    var currentUserId = Meteor.userId();
    console.log('foo');
    console.log(currentUserId);
    if (currentUserId) {
        console.log('Connecting to peer');
        peer = new Peer(currentUserId, {host : 'localhost', port : 9006});
        peer.on('connection', function (conn) {
            console.log('open connection');
            conn.on('data', function (data) {
                console.log('Got data:', data);
                $('.incomingMsgs').append(
                    Meteor.render(function() {
                        return Template.incomingMsg(data);
                    })
                );
                $('.alert').alert();
                console.log('closing');
                conn.close();
            });
        });
    }
})

Accounts.ui.config({
    passwordSignupFields : 'USERNAME_ONLY'
});

Meteor.autosubscribe(function () {
    Meteor.subscribe("shoutboxEntries");
    Meteor.subscribe("userData");
});

Template.stream.entries = function () {
    var entries = [];
    ShoutBoxEntries.find({}, {}).forEach(function (entry) {
        var user = Meteor.users.findOne({ _id : entry.userId});
        entries.push({
            userId : entry.userId,
            username : user ? user.username : entry.userId,
            text : linkify(Handlebars._escape(entry.text), {
                callback : function (text, href) {
                    return href ? '<a href="' + href + '" title="' + href + '" class="oembed">' + text + '</a>' : text;
                }
            }),
            date : entry.date
        })
    });
    return entries;
};

Template.entry.rendered = function () {
    var node = this.firstNode;
    $('dd a.oembed', node).embedly({
        key : keys.embedly,
        maxWidth : 450,
        wmode : 'transparent',
        display : function (oembed) {
            if (oembed == null) {
                return;
            }
            $(this).removeClass('oembed');
            $(this).parent().after(Meteor.render(function () {
                return Template.emedPreview(oembed);
            }));
            $('a.embedly', node).live("click", function (e) {
                e.preventDefault();
                $(this).parents('blockquote').replaceWith(html_sanitize(oembed.html, function (url) {
                    if (/^https?:\/\//.test(url)) {
                        return url
                    }
                    return null;
                }));
            });
        }
    });
};

var sendChatMsgHandler = function (event) {
    var targetUserId = $(event.currentTarget).attr('data-userId');
    if (Meteor.userId() === targetUserId) {
        return;
    }
    var node = Meteor.render(function () {
        return Template.chat({
            targetUserId : targetUserId
        });
    });
    document.body.appendChild(node);

    $('#chatModal').modal();

    $('#chatModal').on('hidden', function () {
        $('#chatModal').remove();
    });
};

Template.incomingMsg.events = {
    'click .sendMsg' : sendChatMsgHandler
}
Template.entry.events = {
    'click .sendMsg' : sendChatMsgHandler
};

Template.chat.events = {
    'click .send' : function () {
        var user = Meteor.user();
        var message = $('#message').attr('value');
        var targetUserId = $('#targetUserId').attr('value');

        console.log('connecting to ' + targetUserId);
        var conn = peer.connect(targetUserId);
        conn.on('open', function () {
            console.log('sending ' + message);

            conn.send({
                message : message,
                senderName : user.username,
                senderId : user._id
            });
            $('#chatModal').modal('hide');
        });
    }
}

Template.input.events = {
    'submit form' : function (event) {
        var currentUserId;
        var text = this.$('#text').attr('value');
        event.preventDefault();
        if (!text) {
            return;
        }
        currentUserId = Meteor.userId();
        if (!currentUserId) {
            throw 'No user logged in';
        }
        ShoutBoxEntries.insert({
            userId : currentUserId,
            text : text,
            date : new Date()
        });
        this.$('#text').attr('value', '');
    }
};

Template.statusNetConnection.events = {
    'click a.connect' : function () {
        window.open('http://dev.status.net:8080/index.php/api/oauth2/authorize?response_toke=token&client_id=' + keys.statusnet, 'StatusNetLoginPopup', 'width=400&height=400');
    },
    'click a.disconnect' : function () {
        statusNet.unsubscribe();
        Meteor.BrowserStore.set("access_token");
        Meteor.BrowserStore.set("user_id");
    },
    'click a.unsubscribe' : function () {
        statusNet.unsubscribe();
    },
    'click a.subscribe' : function () {
        statusNet.subscribe();
    }
};

Template.statusNetConnection.userId = function () {
    return Meteor.BrowserStore.get("user_id");
};

Template.statusNetConnection.statusNetUserName = function () {
    return Meteor.user().statusNetUserName;
};

Template.statusNetConnection.statusNetUserName = function () {
    return Meteor.user().statusNetUserName;
};

Template.statusNetConnection.hasStatusNetSubscription = function () {
    return Meteor.user().hasStatusNetSubscription;
};
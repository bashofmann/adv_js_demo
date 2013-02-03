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
        Meteor.BrowserStore.set("access_token");
        Meteor.BrowserStore.set("user_id");
    }
};

Template.statusNetConnection.userId = function () {
    return Meteor.BrowserStore.get("user_id");
};

Template.statusNetConnection.statusNetUserName = function () {
    return Meteor.user().statusNetUserName;
};
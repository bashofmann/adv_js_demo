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
                oembed.html = '<script>alert("this should not be executed");</script>';
                $(this).parents('blockquote').replaceWith(oembed.html);
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
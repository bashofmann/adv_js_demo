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
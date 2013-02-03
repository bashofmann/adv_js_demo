ShoutBoxEntries = new Meteor.Collection("shoutboxEntries");

if (Meteor.isServer) {
    Meteor.publish("shoutboxEntries", function () {
        return ShoutBoxEntries.find({}, {});
    });

    Meteor.publish("userData", function () {
        return Meteor.users.find({}, {
                fields : {
                    '_id' : 1,
                    'username' : 1
                }
            }
        );
    });

    ShoutBoxEntries.allow({
        insert : function (userId, doc) {
            return userId && doc.userId === userId;
        }
    });
}
ShoutBoxEntries = new Meteor.Collection("shoutboxEntries");

if (Meteor.isServer) {
    Meteor.publish("shoutboxEntries", function () {
        return ShoutBoxEntries.find({}, {});
    });

    Meteor.publish("userData", function () {
        return Meteor.users.find({}, {
                fields : {
                    '_id' : 1,
                    'username' : 1,
                    'statusNetUserName' : 1,
                    'statusNetUserId' : 1
                }
            }
        );
    });

    ShoutBoxEntries.allow({
        insert : function (userId, doc) {
            return userId && doc.userId === userId;
        }
    });

    Meteor.users.allow({
        update : function (userId, docs, fields, modifier) {
            var result = true;
            _.each(docs, function (doc) {
                if (doc._id !== userId) {
                    result = false;
                }
            });
            _.each(fields, function (field) {
                if (field === 'services' || field === 'username') {
                    result = false;
                }
            });
            return result;
        }
    });
}
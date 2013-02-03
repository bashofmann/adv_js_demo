var oauth2 = {
    storeAuth : function (fragment) {
        var authParameters = {};
        fragment = fragment.split('+').join('%252b');
        fragment = fragment.split('&');
        for (var i = 0; i < fragment.length; i++) {
            var ix = fragment[i].indexOf('=');
            if (ix > 0) {
                authParameters[fragment[i].substr(0, ix)] = decodeURIComponent(fragment[i].substr(ix + 1));
            }
        }
        Meteor.BrowserStore.set("access_token", authParameters['access_token']);
        Meteor.BrowserStore.set("user_id", authParameters['user_id']);

        statusNet.loadUser();
    }
};

Meteor.startup(statusNet.loadUser);
if (Meteor.isClient) {
  // counter starts at 0

  Template.hello.helpers({
    test: function () {
      return Match.test(1, Number);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

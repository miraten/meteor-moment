Package.describe({
  name: "leesangwon:moment",
  summary: "Moment.js, a JavaScript date library for dates, packaged for Meteor. See http://momentjs.com.",
  version: "2.8.3",
  git: "https://github.com/miraten/meteor-moment.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles('lib/moment/moment.js', ['client', 'server']);
  api.addFiles('export-moment.js', ['client', 'server']);
  
  api.export('moment', ['client', 'server']);
});

Package.onTest(function (api) {
  api.use([
    'leesangwon:moment@2.8.3', 
    'tinytest', 
    'test-helpers'
  ], ['client', 'server']);

  api.addFiles('test/moment.js', ['client', 'server']);
});

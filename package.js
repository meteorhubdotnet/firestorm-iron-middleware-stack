Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-middleware-stack',
  summary: 'Fork of iron:middleware-stack for Firestorm',
  version: '1.0.15',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-middleware-stack'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.11.0');

  api.use('underscore');
  api.use('ejson');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.15');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.15');

  api.use('meteorhubdotnet:firestorm-iron-url@1.0.15');

  api.addFiles('lib/handler.js');
  api.addFiles('lib/middleware_stack.js');
  api.export('Handler', {testOnly: true});
});

Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-middleware-stack',
  summary: 'Fork of iron:middleware-stack for Firestorm',
  version: '1.0.5',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-middleware-stack'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.3.6');

  api.use('underscore');
  api.use('ejson');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.5');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.5');

  api.use('meteorhubdotnet:firestorm-iron-url@1.0.5');

  api.addFiles('lib/handler.js');
  api.addFiles('lib/middleware_stack.js');
  api.export('Handler', {testOnly: true});
});

Package.onTest(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-middleware-stack');
  api.use('tinytest');
  api.use('test-helpers');
  api.addFiles('test/handler_test.js');
  api.addFiles('test/middleware_stack_test.js');
});

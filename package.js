Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-middleware-stack',
  summary: 'Fork of iron:middleware-stack for Firestorm',
  version: '1.0.4',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-middleware-stack'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.2');

  api.use('underscore');
  api.use('ejson');

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.4');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.4');

  api.use('meteorhubdotnet:firestorm-iron-url@1.0.4');

  api.add_files('lib/handler.js');
  api.add_files('lib/middleware_stack.js');
  api.export('Handler', {testOnly: true});
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-middleware-stack');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/handler_test.js');
  api.add_files('test/middleware_stack_test.js');
});

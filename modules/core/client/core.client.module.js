(function (app) {
  'use strict';

  app.registerModule('core',['ngTable']);
  app.registerModule('core.filters',['core']);
  app.registerModule('core.routes', ['ui.router']);
  app.registerModule('core.admin', ['core']);
  app.registerModule('core.admin.routes', ['ui.router']);
}(ApplicationConfiguration));

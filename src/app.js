export class App {
  configureRouter(config, router) {
    config.title = 'Syncfusion';
    config.map([
      { route: ['', 'schedule'], name: 'schedule',      moduleId: './views/schedule/schedule',      nav: true, title: 'Schedule' },
      { route: 'demo',       name: 'demo',      moduleId: './views/demo/demo',      nav: true, title: 'Demo' },
      { route: 'grid',       name: 'grid',      moduleId: './views/grid/grid',      nav: true, title: 'Grid' },
      { route: 'splitter',       name: 'splitter',      moduleId: './views/splitter/splitter',      nav: true, title: 'Splitter' },
      { route: 'list-view',       name: 'list-view',      moduleId: './views/list-view/list-view',      nav: true, title: 'ListView' },
      // { route: 'schedule',       name: 'schedule',      moduleId: './views/schedule/schedule',      nav: true, title: 'Schedule' },
    ]);

    this.router = router;
  }

}

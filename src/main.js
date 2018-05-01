import 'jquery';
import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('src/resources')    
    .plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll());

  aurelia.start().then(a => a.setRoot());
}
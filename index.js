/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-modal-dialog',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/tether/js/utils.js');
    app.import(app.bowerDirectory + '/tether/js/tether.js');
    app.import(app.bowerDirectory + '/tether/css/tether.css');
    app.import(app.bowerDirectory + '/tether/css/tether-theme-basic.css');
  }
};

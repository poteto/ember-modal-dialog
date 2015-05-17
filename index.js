/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-modal-dialog',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/tether/js/utils.js');
    app.import(app.bowerDirectory + '/tether/js/tether.js');
    app.import(app.bowerDirectory + '/tether/js/abutment.js');
    app.import(app.bowerDirectory + '/tether/js/constraint.js');
    app.import(app.bowerDirectory + '/tether/js/markAttachment.js');
    app.import(app.bowerDirectory + '/tether/js/shift.js');
    app.import(app.bowerDirectory + '/tether/css/tether.css');
    app.import(app.bowerDirectory + '/tether/css/tether-theme-basic.css');
  }
};

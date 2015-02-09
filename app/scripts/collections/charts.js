define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var Chart = require('models/chart');

    var Charts = Backbone.Collection.extend({

        model: Chart

    });

    module.exports = Charts;
});

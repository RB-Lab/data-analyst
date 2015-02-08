/**
 * @module model/analysis -- the main model, containing suite and data source.
 */

define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Analysis = Backbone.Model.extend({
        dataSource: '',
        suite: null
    });

    module.exports = new Analysis();
});

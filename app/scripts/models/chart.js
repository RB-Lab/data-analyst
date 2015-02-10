define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Chart = Backbone.Model.extend({
        initialize: function(chart){
            if(!chart){
                this.set('xAxis', {});
                this.set('yAxis', {});
            }
        }
    });

    module.exports = Chart;
});

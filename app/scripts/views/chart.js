define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var data = require('collections/data');
    var suite = require('models/suite');
    var suite2highcharts = require('lib/suite2highcharts');

    var Help = Backbone.Layout.extend({
        el: '#container',
        template: 'chart',
        initialize: function(options){
            // TODO add data sync handler
            // TODO check on empty suite
            this.on('afterRender', function(){
                this.drawChart(suite.get('charts').at(options.id));
            });
            data.on('sync', function(){
                this.drawChart(suite.get('charts').at(options.id));
            }.bind(this));
        },
        drawChart: function(chart){
            if (!chart) {
                return;
            }
            this.$el.find('#chart').highcharts(suite2highcharts.convert(chart));
        }
    });

    module.exports = Help;
});


define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var data = require('collections/data');
    var suite = require('models/suite');
    var suite2highcharts = require('lib/suite2highcharts');

    var Help = Backbone.Layout.extend({
        template: 'chart',
        id: undefined,
        events: {
            dblclick: function(){
                this.trigger('requestPopup', 'views/popups/edit-chart', {chart: this.id});
            }
        },
        initialize: function(options){
            // TODO check on empty suite
            this.id = options.id;
            this.chart = suite.get('charts').at(options.id);
            this.listenTo(data, 'sync', this.drawChart);
            this.listenTo(this.chart, 'update', this.drawChart);
            this.on('afterRender', this.drawChart);
        },
        drawChart: function(){
            if (!this.chart) {
                return; // TODO add 404 page
            }
            this.$el.find('#chart').highcharts(suite2highcharts.convert(this.chart));
        }
    });

    module.exports = Help;
});


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
            this.id = options.id;
            this.chart = suite.get('charts').at(options.id);
            this.listenTo(data, 'sync', this.drawChart);
            this.listenTo(suite, 'sync', function(){
                this.chart = suite.get('charts').at(options.id);
                this.drawChart();
            });
            if(this.chart){
                this.listenTo(this.chart, 'update', this.drawChart);
            }
            this.on('afterRender', this.drawChart);
        },
        drawChart: function(){
            if (!this.chart) {
                this.$el.find('#chart').empty().hide();
                this.$el.find('#404-chart').show();
                return;
            }
            this.$el.find('#404-chart').hide();
            this.$el.find('#chart').highcharts(suite2highcharts.convert(this.chart)).show();
        }
    });

    module.exports = Help;
});


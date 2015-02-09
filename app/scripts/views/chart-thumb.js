define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var data = require('collections/data');

    var Help = Backbone.Layout.extend({
        tagName: 'div',
        className: 'chart-thumb',
        initialize: function(options){
            this.listenTo(data, 'sync', function(){
                // TODO add check on wrong data url (since it just 'sync', not 'ok')
                // or listen to 'ok' event
                this.drawChart(options.chart);
            });
            this.drawChart(options.chart);
        },

        drawChart: function(chart){
            // TODO make a convertor lib ('cause we'll need it when creatibg big charts)
            this.$el.highcharts({
                chart: {
                    type: chart.get('type')
                },
                title: {
                    text: chart.get('title')
                },
                xAxis: {
                    title: {
                        text: chart.get('xAxis').title
                    },
                    categories: data.map(function(item){
                        return item.get(chart.get('xAxis').attribute);
                    })
                },
                yAxis: {
                    title: {
                        text: chart.get('yAxis').title
                    }
                },
                series: [{
                    name: chart.get('yAxis').title,
                    data: data.map(function(item){
                        return item.get(chart.get('yAxis').attribute);
                    })
                }]
            });
        }
    });
    module.exports = Help;
});

define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var data = require('collections/data');
    var router = require('lib/router');

    var Help = Backbone.Layout.extend({
        tagName: 'div',
        className: 'chart-thumb',
        events: {
            click: function(){
                router.navigate('chart/' + this.id, {trigger: true});
            }
        },

        initialize: function(options){
            this.id = options.chatNumber;
            this.listenTo(data, 'sync', function(){
                // TODO add check on wrong data url (since it just 'sync', not 'ok')
                // or listen to 'ok' event
                this.drawChart(options.chart);
            });
            this.drawChart(options.chart);
        },
        drawChart: function(chart){
            // TODO make a convertor lib ('cause we'll need it when creatibg big charts)
            var chartConfig = {
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
            };
            this.$el.highcharts(chartConfig);
        }
    });
    module.exports = Help;
});

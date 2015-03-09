define(function(require, exports, module){
    'use strict';

    var data = require('collections/data');

    function convertConfig(chart){

        var config = {
            chart: {
                type: chart.get('type')
            },
            title: {
                text: chart.get('title')
            },
            xAxis: {
                title: {
                    text: chart.get('xAxis').title
                }
            },
            yAxis: {
                title: {
                    text: chart.get('yAxis').title
                }
            },
            series: [{
                name: chart.get('yAxis').title
            }]
        };

        if(chart.get('type') === 'scatter') {
            config.series[0].data = data.map(function(item){
                return [
                    item.get(chart.get('xAxis').attribute),
                    item.get(chart.get('yAxis').attribute)
                ];
            });
            config.legend = {enabled: false};
        } else {
            config.series[0].data = data.map(function(item){
                return item.get(chart.get('yAxis').attribute);
            });
            config.xAxis.categories = data.map(function(item){
                return item.get(chart.get('xAxis').attribute);
            });
        }

        return config;
    }

    module.exports.drawChart = function(el, chartConfig){
        el.highcharts(convertConfig(chartConfig)).show();
    };

    module.exports.drawThumb = function(el, chartConfig){
        chartConfig = convertConfig(chartConfig);
        chartConfig.legend = {enabled: false};
        el.highcharts(chartConfig);
    };
});

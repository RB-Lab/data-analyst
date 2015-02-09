define(function(require, exports, module){
    'use strict';

    var data = require('collections/data');

    module.exports.convert = function(chart){
        return {
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
    };
});

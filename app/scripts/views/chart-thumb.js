define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var data = require('collections/data');
    var router = require('lib/router');
    var suite2highcharts = require('lib/suite2highcharts');

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
            this.$el.highcharts(suite2highcharts.convert(chart));
        }
    });
    module.exports = Help;
});

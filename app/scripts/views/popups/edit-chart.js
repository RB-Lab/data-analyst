define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var router = require('lib/router');
    var suite = require('models/suite');
    var Chart = require('models/chart');

    var Home = Backbone.Layout.extend({
        template: 'popups/edit-chart',
        newFlag: false,
        events: {
            'click #apply-chart': function(){
                this.deserialize();
                if(this.newFlag){
                    suite.get('charts').add(this.chart);
                    this.newFlag = false;
                    router.navigate('chart/' + (suite.get('charts').models.length - 1), {trigger: true});
                }
                this.trigger('closeMe');
                this.chart.trigger('update');
            }
        },
        initialize: function(options){
            if(options.chart === 'new'){
                this.chart = new Chart();
                this.newFlag = true;
            } else {
                this.chart = suite.get('charts').at(options.chart);
            }
        },
        serialize: function(){
            return {
                chartTitle: this.chart.get('title'),
                chartType: this.chart.get('type'),
                xAxisTitle: this.chart.get('xAxis').title,
                xAxisAttriute: this.chart.get('xAxis').attribute,
                yAxisTitle: this.chart.get('yAxis').title,
                yAxisAttriute: this.chart.get('yAxis').attribute,
                supportedTypes: ['bar', 'column', 'line', 'scatter']
            };
        },
        deserialize: function(){
            this.chart.set('title', this.$el.find('#chart-title').val());
            this.chart.set('type', this.$el.find('#chart-type').val());
            this.chart.set('xAxis', {
                title: this.$el.find('#x-axis-title').val(),
                attribute: this.$el.find('#x-axis-attribute').val()
            });
            this.chart.set('yAxis', {
                title: this.$el.find('#y-axis-title').val(),
                attribute: this.$el.find('#y-axis-attribute').val()
            });
        }
    });

    module.exports = Home;
});

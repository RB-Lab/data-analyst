define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var analysisModel = require('models/analysis');

    var Home = Backbone.Layout.extend({
        template: 'popups/set-data-source',
        events: {
            'click #set-and-close': 'setDataSource'
        },
        setDataSource: function(){
            var source = $.trim($('#data-source').val());
            if (!source) {
                return;
            }

            analysisModel.setDataSource(source);
            this.trigger('closeMe');
        },
        serialize: function(){
            return {dataSource: analysisModel.get('dataSource')};
        }
    });

    module.exports = Home;
});

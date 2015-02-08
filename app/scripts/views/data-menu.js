define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var analysisModel = require('models/analysis');

    var Home = Backbone.Layout.extend({
        initialize: function(){
            this.listenTo(analysisModel, 'change:dataSource', this.render);
            this.listenTo(analysisModel, 'change:dataSourceError', this.render);
            this.listenTo(analysisModel, 'change:suite', this.render);
        },
        template: 'data-menu',
        events: {
            'click #set-data-source': function(){
                this.trigger('requestPopup', 'views/popups/set-data-source');
            }
        },
        serialize: function(){
            return {
                dataSource: analysisModel.get('dataSource') || '',
                dataSourceError: analysisModel.get('dataSourceError'),
                suite: analysisModel.get('suite')
            };
        }
    });

    module.exports = Home;
});

define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var analysisModel = require('models/analysis');
    var suite = require('models/suite');

    var Home = Backbone.Layout.extend({
        initialize: function(){
            this.listenTo(analysisModel, 'change:dataSource', this.render);
            this.listenTo(analysisModel, 'change:dataSourceError', this.render);
            this.listenTo(suite, 'change:state', this.render);
        },
        template: 'data-menu',
        events: {
            'click #set-data-source': function(){
                this.trigger('requestPopup', 'views/popups/set-data-source');
            },
            'click #set-suite': function(){
                this.trigger('requestPopup', 'views/popups/set-suite');
            }
        },
        serialize: function(){
            return {
                dataSource: analysisModel.get('dataSource') || '',
                dataSourceError: analysisModel.get('dataSourceError'),
                suite: suite.get('name'),
                suiteLoadingError: suite.get('loadingError'),
            };
        }
    });

    module.exports = Home;
});

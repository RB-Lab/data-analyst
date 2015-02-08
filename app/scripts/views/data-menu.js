define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var data = require('collections/data');
    var suite = require('models/suite');

    // TODO divide it into two views
    var DataMenu = Backbone.Layout.extend({
        initialize: function(){
            this.listenTo(data, 'metaChange:state', function(){
                this.render();
            });
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
                dataSourceState: data.meta('state'),
                dataSource: data.url,
                dataSourceError: data.meta('loadingError'),

                suiteState: suite.get('state'),
                suite: suite.get('name'),
                suiteLoadingError: suite.get('loadingError'),
            };
        }
    });

    module.exports = DataMenu;
});

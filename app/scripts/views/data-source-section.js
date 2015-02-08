define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var data = require('collections/data');

    var DataSourceSection = Backbone.Layout.extend({
        initialize: function(){
            this.listenTo(data, 'metaChange:state', this.render);
        },
        template: 'data-source-section',
        events: {
            'click #set-data-source': function(){
                this.trigger('requestPopup', 'views/popups/set-data-source');
            }
        },
        serialize: function(){
            return {
                dataSourceState: data.meta('state'),
                dataSource: data.url,
                dataSourceError: data.meta('loadingError')
            };
        }
    });

    module.exports = DataSourceSection;
});

define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var data = require('collections/data');

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

            data.url = source;
            data.fetch();
            this.trigger('closeMe');
        },
        serialize: function(){
            return {dataSource: data.url};
        }
    });

    module.exports = Home;
});

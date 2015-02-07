define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Home = Backbone.Layout.extend({
        template: 'data-menu',
        events: {
            'click #set-data-source': function(){
                this.trigger('requestPopup', 'setDataSource');
            }
        },
        serialize: function(){
            return {dataSource: '', suite: null};
        }
    });

    module.exports = Home;
});

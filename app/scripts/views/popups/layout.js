define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Home = Backbone.Layout.extend({
        initialize: function(options){
            require([options.view], function(View){
                this.insertView('.popup-container', new View()).render();
            }.bind(this));
        },
        template: 'popups/layout',
        events: {
            'click .popup-closer': function(){
                this.trigger('closeMe');
            }
        }
    });

    module.exports = Home;
});

define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Home = Backbone.Layout.extend({
        initialize: function(options){
            require([options.view], function(View){

                var view = new View(options.params);
                this.insertView('.popup-container', view).render();

                view.on('closeMe', function(){
                    this.trigger('closeMe');
                }.bind(this));

            }.bind(this));
        },
        template: 'popups/layout',
        events: {
            // TODO close on [esc]
            'click .popup-closer': function(){
                this.trigger('closeMe');
            }
        }
    });

    module.exports = Home;
});

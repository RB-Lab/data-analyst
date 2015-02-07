define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var MainMenu = require('views/menu');
    var DataMenu = require('views/data-menu');

    var Menu = Backbone.Layout.extend({
        initialize: function(){
            this.views['#data-menu'].on('requestPopup', function(popup){

            });
        },
        el: '#main-container',
        template: 'main-layout',
        eventBus: {},
        views: {
            '#main-menu': new MainMenu(),
            '#data-menu': new DataMenu()
        }
    });

    module.exports = Menu;
});

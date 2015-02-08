define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var MainMenu = require('views/menu');
    var DataMenu = require('views/data-menu');
    var PopupLayout = require('views/popups/layout');

    var Menu = Backbone.Layout.extend({
        initialize: function(){
            this.getView('#data-menu').on('requestPopup', function(popup){
                var popupView = this.insertView(new PopupLayout({view: popup}));
                popupView.render();
                popupView.on('closeMe', function(){
                    this.removeView(popupView);
                }.bind(this));
            }.bind(this));
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

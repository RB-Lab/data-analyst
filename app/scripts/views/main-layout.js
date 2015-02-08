define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var MainMenu = require('views/menu');
    var DataSourceSection = require('views/data-source-section');
    var SuiteSection = require('views/suite-section');
    var PopupLayout = require('views/popups/layout');

    var Menu = Backbone.Layout.extend({
        initialize: function(){
            this.getViews('#data-menu').each(function(view){
                this.listenTo(view, 'requestPopup', this.openPopup);
            }.bind(this));
        },
        el: '#main-container',
        template: 'main-layout',
        eventBus: {},
        views: {
            '#main-menu': new MainMenu(),
            '#data-menu': [
                new DataSourceSection(),
                new SuiteSection()
            ]
        },
        openPopup: function(popup){
            var popupView = this.insertView(new PopupLayout({view: popup}));
            popupView.render();
            popupView.on('closeMe', function(){
                this.removeView(popupView);
            }.bind(this));
        }
    });

    module.exports = Menu;
});

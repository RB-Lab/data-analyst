define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var MainMenu = require('views/menu');
    var DataSourceSection = require('views/data-source-section');
    var SuiteSection = require('views/suite-section');
    var PopupLayout = require('views/popups/layout');

    var MainLayout = Backbone.Layout.extend({
        initialize: function(){
            this.getViews('#data-menu').each(function(view){
                this.listenTo(view, 'requestPopup', this.openPopup);
            }.bind(this));
        },
        el: '#main-container',
        template: 'main-layout',
        views: {
            '#main-menu': new MainMenu(),
            '#data-menu': [
                new DataSourceSection(),
                new SuiteSection()
            ]
        },
        openPopup: function(popup, params){
            var popupView = this.insertView(new PopupLayout({view: popup, params: params}));
            popupView.render();
            popupView.on('closeMe', function(){
                this.removeView(popupView);
            }.bind(this));
        },
        changePage: function(newPage){
            this.removeView('#container');
            this.insertView('#container', newPage);
            this.listenTo(newPage, 'requestPopup', this.openPopup);
            newPage.render();
        }
    });

    module.exports = MainLayout;
});

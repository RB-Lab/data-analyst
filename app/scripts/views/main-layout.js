define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var MainMenu = require('views/menu');

    var Menu = Backbone.Layout.extend({
        initialize: function(){
            this.views['#main-menu'].render();
        },
        el: '#main-container',
        template: 'main-layout',
        views: {
            '#main-menu': new MainMenu()
        }
    });

    module.exports = Menu;
});

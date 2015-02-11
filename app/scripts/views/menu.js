define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var _ = require('underscore');
    var router = require('lib/router');
    var routesConfig = require('config/routes');

    var Menu = Backbone.Layout.extend({
        template: 'main-menu',
        events: {
            'click a': 'goto',
            'click #data-menu-icon': function(){
                $('#data-menu').toggleClass('active');
            }
        },
        initialize: function(){
            this.items = [];
            _.each(routesConfig, function(cfg){
                if (cfg.menuItem) {
                    this.items.push({title: cfg.menuItem, href: cfg.route});
                }
            }.bind(this));
        },
        serialize: function() {
            return {items: this.items};
        },
        goto: function(e){
            router.navigate(e.currentTarget.getAttribute('href'), {trigger: true});
            return false;
        },
    });

    module.exports = Menu;
});

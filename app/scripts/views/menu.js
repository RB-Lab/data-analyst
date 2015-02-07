define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var router = require('lib/router');
    var routesConfig = require('config/routes');

    var Menu = Backbone.View.extend({
        initialize: function(){
            this.items = [];
            _.each(routesConfig, function(cfg){
                if (cfg.menuItem) {
                    this.items.push({title: cfg.menuItem, href: cfg.route});
                }
            }.bind(this));
        },
        el: $('#menu-container'),
        events: {
            'click a': 'goto'
        },
        goto: function(e){
            router.navigate(e.currentTarget.getAttribute('href'), {trigger: true});
            return false;
        },
        template: _.template($('#menu').html()),
        render: function () {
            $(this.el).html(this.template({items: this.items}));
        }
    });

    module.exports = Menu;
});

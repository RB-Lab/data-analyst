define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var router = require('lib/router');

    var routesConfig = require('config/routes');
    var MenuView = require('views/menu');

    var menu = [];
    var menuView = new MenuView();

    _.each(routesConfig, function(cfg){
        router.route(cfg.route, cfg.name, function(){
            require([cfg.view], function(View){
                new View().render();
            });
        });
        if (cfg.menuItem) {
            menu.push({title: cfg.menuItem, href: cfg.route});
        }
    });

    menuView.render({items: menu});

    module.exports = router;
});

define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var router = require('lib/router');

    var routesConfig = require('config/routes');

    var mainLayout = null;

    _.each(routesConfig, function(cfg){
        router.route(cfg.route, cfg.name, function(){

            var params = {};
            var args = arguments;
            _.each(cfg.route.match(/:[\w\d]+/g), function(key, i){
                params[key.slice(1)] = args[i];
            });

            require([cfg.view], function(View){
                mainLayout.changePage(new View(params));
            });
        });
    });

    module.exports = {
        injectMainLayout: function(layout){
            mainLayout = layout;
        }
    };
});

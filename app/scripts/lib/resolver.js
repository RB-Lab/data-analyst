define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var router = require('lib/router');

    var routesConfig = require('config/routes');

    _.each(routesConfig, function(cfg){
        router.route(cfg.route, cfg.name, function(){
            require([cfg.view], function(View){
                new View().render();
            });
        });
    });

    module.exports = router;
});

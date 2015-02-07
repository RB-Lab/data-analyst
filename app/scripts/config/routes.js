define(function(require, exports, module){
    'use strict';

    var routes = [
        {
            name: 'home',
            route: '',
            view: 'views/home',
            menuItem: 'Home'
        },
        {
            name: 'help',
            route: 'help',
            view: 'views/help',
            menuItem: 'Help'
        }
    ];

    module.exports = routes;
});

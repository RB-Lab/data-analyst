/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'
    }
});

require([
    'backbone',
    'views/menu',
    'lib/resolver'
], function (Backbone, MainMenu) {
   // Backbone.history.start({pushState: true});
    new MainMenu().render();
    Backbone.history.start();
    console.log('Hello from Backbone!');
});

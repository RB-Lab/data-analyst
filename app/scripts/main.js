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
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text',
        layoutmanager: '../bower_components/layoutmanager/backbone.layoutmanager'
    }
});

require([
    'backbone',
    'underscore',
    'views/menu',
    'layoutmanager',
    'lib/resolver'
], function (Backbone, _, MainMenu) {
   // Backbone.history.start({pushState: true});
    Backbone.history.start();

    Backbone.Layout.configure({
        prefix: '../templates/',
        fetchTemplate: function(path){
            var done = this.async();
            require(['text!' + path + '.html'], function(tmpl){
                done(_.template(tmpl));
            });
        }
    });

    new MainMenu().render();
});

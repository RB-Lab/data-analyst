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
    'views/main-layout',
    'layoutmanager',
    'lib/resolver'
], function (Backbone, _, MainLayout) {

    Backbone.Layout.configure({
        prefix: '../templates/',
        fetchTemplate: function(path){
            var done = this.async();
            require(['text!' + path + '.html'], function(tmpl){
                done(_.template(tmpl));
            });
        }
    });

    new MainLayout().render().once('afterRender', function(){
//        Backbone.history.start({pushState: true});
        Backbone.history.start();
    });
});

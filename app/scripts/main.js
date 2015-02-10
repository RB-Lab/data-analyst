/*global require*/
'use strict';

require.config({
    baseUrl: '/scripts',
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
        },
        highcharts: {
            deps: ['jquery'],
            exports: 'Highcharts'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        highcharts: '../bower_components/highcharts-release/highcharts',
        text: '../bower_components/requirejs-text/text',
        layoutmanager: '../bower_components/layoutmanager/backbone.layoutmanager'
    }
});

require([
    'backbone',
    'underscore',
    'views/main-layout',
    'lib/resolver',
    'layoutmanager',
    'highcharts'
], function (Backbone, _, MainLayout, resolver) {

    Backbone.Layout.configure({
        prefix: '../templates/',
        fetchTemplate: function(path){
            var done = this.async();
            require(['text!' + path + '.html'], function(tmpl){
                done(_.template(tmpl));
            });
        }
    });

    var mainLayout = new MainLayout().render().once('afterRender', function(){
//        Backbone.history.start({pushState: true});
        Backbone.history.start();
    });

    resolver.injectMainLayout(mainLayout);
});

define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var suite = require('models/suite');
    var data = require('collections/data');

    var Home = Backbone.Layout.extend({
        el: '#container',
        template: 'home',
        events: {
            'dblclick .title': function(){
                this.$el.find('.title').attr('contenteditable', true);
            },
            'blur .title': function(){
                suite.set('title', this.$el.find('.title').text());
                this.$el.find('.title').attr('contenteditable', false);
            }
        },
        initialize: function(){
            this.listenTo(suite, 'sync', function(){
                this.renderSuite();
            });
            this.listenTo(suite, 'change:title', this.setTitle);
        },
        renderSuite: function(){
            this.setTitle();
            _.each(suite.sections, function(){

            });
        },

        setTitle: function(){
            // set it manually because re-render whole suite (or even container) for only
            // title looking like overhead. As well as creating a separate view for it.
            this.$el.find('.title').text(suite.escape('title'));
        },

        serialize: function(){
            return {title: suite.escape('title')};
        }
    });

    module.exports = Home;
});




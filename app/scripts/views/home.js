define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var suite = require('models/suite');
    var ChartThumb = require('views/chart-thumb');

    var Home = Backbone.Layout.extend({
        template: 'home',
        events: {
            'dblclick .title': function(){
                this.$el.find('.title').attr('contenteditable', true);
            },
            'blur .title': function(){
                suite.set('title', this.$el.find('.title').text());
                this.$el.find('.title').attr('contenteditable', false);
            },
            'click #add-chart': function(){
                this.trigger('requestPopup',
                             'views/popups/edit-chart',
                             {chart: 'new'});
            }
        },
        initialize: function(){
            this.listenTo(suite, 'sync', function(){
                this.renderSuite();
                this.render();
            });
            this.listenTo(suite, 'change:title', this.setTitle);
            this.renderSuite();
        },
        renderSuite: function(){
            if(!suite.get('charts')){
                return;
            }
            this.removeView('');
            var views = [];
            suite.get('charts').each(function(chart, i){
                views.push(new ChartThumb({chart: chart, chatNumber: i}));
            });
            this.insertViews(views);
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




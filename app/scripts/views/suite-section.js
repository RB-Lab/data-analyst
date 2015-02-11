define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var suite = require('models/suite');

    var SuiteSection = Backbone.Layout.extend({
        initialize: function(){
            this.listenTo(suite, 'change:state', this.render);
        },
        template: 'suite-section',
        events: {
            'click #set-suite': function(){
                this.trigger('requestPopup', 'views/popups/set-suite');
            },
            'click #save-suite': function(){
                suite.save();
                // TODO add _normal_ notifications and use it for this purpose
                this.$el.find('#save-suite').text('ok');
                window.setTimeout(function(){
                    this.$el.find('#save-suite').text('save');
                }.bind(this), 500);
            }
        },
        serialize: function(){
            return {
                suiteState: suite.get('state'),
                suite: suite.get('name'),
                suiteLoadingError: suite.get('loadingError'),
            };
        }
    });

    module.exports = SuiteSection;
});

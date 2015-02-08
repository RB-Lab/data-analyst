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

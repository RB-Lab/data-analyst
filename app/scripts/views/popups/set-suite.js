define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var suite = require('models/suite');

    var Home = Backbone.Layout.extend({
        template: 'popups/set-suite',
        events: {
            'click #load': 'loadSuite'
        },
        loadSuite: function(){
            var url = $.trim($('#suite-url').val());
            if (!url) {
                return;
            }

            suite.urlRoot = url;
            suite.fetch();
            this.trigger('closeMe');
        }
    });

    module.exports = Home;
});

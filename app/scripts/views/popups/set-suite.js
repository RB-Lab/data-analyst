define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var analysisModel = require('models/analysis');

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

            analysisModel.loadSuite(url);
            this.trigger('closeMe');
        }
    });

    module.exports = Home;
});

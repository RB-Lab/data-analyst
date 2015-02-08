define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Home = Backbone.Layout.extend({
        template: 'popups/set-data-source',
        events: {

        }
    });

    module.exports = Home;
});

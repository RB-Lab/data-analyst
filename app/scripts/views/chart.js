define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Help = Backbone.Layout.extend({
        el: '#container',
        template: 'chart',
        initialize: function(options){
            console.log(options)
        }
    });

    module.exports = Help;
});


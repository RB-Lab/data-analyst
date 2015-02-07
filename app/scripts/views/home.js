define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Home = Backbone.Layout.extend({
        el: '#container',
        template: 'home'
    });

    module.exports = Home;
});




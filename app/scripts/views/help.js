define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Help = Backbone.Layout.extend({
        el: $('#container'),
        template: 'help'
    });
    module.exports = Help;
});


define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Help = Backbone.Layout.extend({
        template: 'help'
        // TODO render help page from markdown (see also templates/help.html TODO note)
        // hypothesis: use serialize method for it
    });
    module.exports = Help;
});


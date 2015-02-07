define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');

    var Help = Backbone.View.extend({
        el: $('#container'),
        template: _.template($('#help').html()),
        render: function () {
            $(this.el).html(this.template());
        }
    });
    module.exports = Help;
});


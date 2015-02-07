define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');

   var Home = Backbone.View.extend({
        el: $('#container'),
        template: _.template($('#home').html()),
        render: function () {
            $(this.el).html(this.template());
        }
    });

    module.exports = Home;
});




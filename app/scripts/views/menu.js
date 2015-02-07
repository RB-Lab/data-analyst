define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var router = require('lib/router');

    var Menu = Backbone.View.extend({
        el: $('#menu-container'),
        events: {
            'click a': 'goto'
        },
        goto: function(e){
            router.navigate(e.currentTarget.getAttribute('href'), {trigger: true});
            return false;
        },
        template: _.template($('#menu').html()),
        render: function (items) {
            $(this.el).html(this.template(items));
        }
    });

    module.exports = Menu;
});

define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var marked = require('marked');

    var Help = Backbone.Layout.extend({
        template: 'help',
        text: '',
        initialize: function(){
            require(['text!/texts/help.md'], function(text){
                this.text = marked(text);
                this.render();
            }.bind(this));
        },
        serialize: function(){
            return {text: this.text};
        }
    });
    module.exports = Help;
});


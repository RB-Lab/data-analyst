define(function(require, exports, module){
    'use strict';
    var window = require('lib/window');

    var storage = {
        setItem: function(name, value){
            if (value.toJSON) {
                return window.localStorage.setItem(name, value.toJSON());
            }
            try {
                window.localStorage.setItem(name, window.JSON.stringify(value));
            } catch (ignore) {
                window.localStorage.setItem(name, value.toString());
            }
        },

        getItem: function(name) {
            var value = window.localStorage.getItem(name);
            try {
                return window.JSON.parse(value);
            }catch (ignore) {
                return value;
            }
        },

        removeItem: localStorage.removeItem
    };

    module.exports = storage;
});

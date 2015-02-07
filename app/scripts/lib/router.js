/**
 * @module lib/router -- just a Backbone Router instance (singletone)
 */

define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var Router = Backbone.Router.extend({});

    var router = new Router();

    module.exports = router;
});

/*
 * @module collections/meta-collection -- adds to collections abilliti to store meta information
 *     unforunatelly, backbone
 */


define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');

    var MetaCollection = Backbone.Collection.extend({

        meta: function(prop, value) {
            if (!this._meta) {
                this._meta = {};
            }
            if (value === undefined) {
                return this._meta[prop];
            } else {
                this._meta[prop] = value;
                this.trigger('metaChange:' + prop);
            }
        }

    });

    module.exports = MetaCollection;
});

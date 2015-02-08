define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var lang = require('lib/i18n/en');
    var storage = require('lib/storage');

    var Suite = Backbone.Model.extend({

        initialize: function(){

            var suite = storage.getItem('suite');
            if (suite) {
                _.each(suite, function(value, key){
                    this.set(key, value);
                }, this);
            }

            this.on('sync', function(){
                this.ok();
            }, this);

            this.on('error', function(suite, e){
                // TODO make generic HTTP errors and common error handler
                if (lang.suiteLoadingError[e.status]) {
                    this.set('loadingError', lang.suiteLoadingError[e.status]);
                } else {
                    this.set('loadingError', lang.suiteLoadingError.unknown);
                }
                this.set('state', 'error');
            }, this);

            this.ok();

        },

        /**
         * loads suite form remote and save it to local storage
         * @overrides
         */

        sync: function(method){
            if (method === 'read') {
                this.set('state', 'loading');
                Backbone.Model.prototype.sync.apply(this, arguments);
            } else if (method === 'create' || method === 'update') {
                storage.setItem('suite', this);
            }
        },

        /**
         * remove service attributes (state,loadingError, etc.) do not forget to add it here
         * if you'll add them to model.
         * @overrides
         */
        toJSON: function(){
            var value = _.clone(this.attributes);
            delete value.state;
            delete value.loadingError;
            return value;
        },

        ok: function(){
            this.set('loadingError', '');
            this.set('state', 'ok');
        }

    });

    module.exports = new Suite();
});

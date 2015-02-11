define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var Charts = require('collections/charts');
    var lang = require('lib/i18n/en');
    var storage = require('lib/storage');

    var Suite = Backbone.Model.extend({

        initialize: function(){

            var suite = storage.getItem('suite');
            if (suite) {
                _.each(suite, function(value, key){
                    if (key === 'charts') {
                        return this.set('charts', new Charts(value));
                    }
                    this.set(key, value);
                }, this);
            } else {
                this.set('charts', new Charts());
                this.set('title', 'New suite');
            }

            this.on('sync', function(){
                if(_.isArray(this.get('charts'))){
                    this.set('charts', new Charts(this.get('charts')));
                }
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
         * loads suite form remote or save it to local storage
         * @overrides
         */

        sync: function(method){
            if (method === 'read') {
                this.set('state', 'loading');
                Backbone.Model.prototype.sync.apply(this, arguments);
            } else if (method === 'create' || method === 'update') {
                // TODO add 'saved' notification
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

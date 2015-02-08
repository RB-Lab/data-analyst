define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var Metacollection = require('collections/meta-collection');
    var lang = require('lib/i18n/en');
    var storage = require('lib/storage');

    var Data = Metacollection.extend({

        initialize: function(){

            this.url = storage.getItem('dataSource') || '';
            if (this.url) {
                this.fetch();
            }

            this.on('sync', function(){
                if (this.models.length){
                    this.ok();
                    storage.setItem('dataSource', this.url);
                } else {
                    this.meta('dataSourceError', lang.dataSourceErrors.wrongData);
                    this.meta('state', 'error');
                }
            }, this);

            this.on('error', function(suite, e){
                // TODO make generic HTTP errors and common error handler
                if (lang.dataSourceErrors[e.status]) {
                    this.meta('loadingError', lang.dataSourceErrors[e.status]);
                } else {
                    this.meta('loadingError', lang.dataSourceErrors.unknown);
                }
                this.meta('state', 'error');
            }, this);

            this.ok();
        },

        fetch: function(){
            this.meta('state', 'loading');
            Backbone.Collection.prototype.fetch.apply(this, arguments);
        },

        ok: function(){
            this.meta('loadingError', '');
            this.meta('state', 'ok');
        },

        url: ''

    });

    module.exports = new Data();
});

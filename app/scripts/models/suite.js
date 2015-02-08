define(function(require, exports, module){
    'use strict';

    var Backbone = require('backbone');
    var lang = require('lib/i18n/en');

    var Suite = Backbone.Model.extend({

        initialize: function(){

            this.on('sync', function(){
                this.set('state', 'ok');
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

        },

        // TODO overide sync method to:
        //      - check if it GET and then if suite of this name is stored in LS
        //      - if SAVE - save it to LS
        // TODO add LS abstraction layer
        sync: function(){
            this.set('state', 'loading');
            Backbone.Model.prototype.sync.apply(this, arguments);
        },

        urlRoot: '',
        state: 'ok',
        loadingError: ''

    });

    module.exports = new Suite();
});

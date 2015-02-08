/**
 * @module model/analysis -- the main model, containing suite and data source.
 */

define(function(require, exports, module){
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var lang = require('lib/i18n/en');

    var Analysis = Backbone.Model.extend({
        dataSource: '',
        setDataSource: function(dataSource){
            this.set('dataSource', dataSource); // enable standard magic
            $.ajax({
                dataType: 'json',
                url: dataSource,
                success: function (data){
                    if (_.isArray(data)){
                        this.set('data', data);
                        this.set('dataSourceError', '');
                    } else {
                        this.set('dataSourceError', lang.dataSourceErrors.wrongData);
                    }
                }.bind(this),
                error: function(e){
                    if (lang.dataSourceErrors[e.status]) {
                        this.set('dataSourceError', lang.dataSourceErrors[e.status]);
                    } else {
                        this.set('dataSourceError', lang.dataSourceErrors.unknown);
                    }
                }.bind(this)
            });
        },
        loadSuite: function(url){
            // TODO add loading states (see also in data-menu.html)
            $.ajax({
                dataType: 'json',
                url: url,
                success: function (suite){
                    console.log(suite);
                }.bind(this),
                error: function(e){
                    // TODO make generic HTTP errors and common error handler
                    if (lang.suitLoadingError[e.status]) {
                        this.set('suitLoadingError', lang.suitLoadingError[e.status]);
                    } else {
                        this.set('suitLoadingError', lang.suitLoadingError.unknown);
                    }
                }.bind(this)
            });
        },
        dataSourceError: '',
        suitLoadingError: '',
        data: null,
        suite: null
    });

    module.exports = new Analysis();
});

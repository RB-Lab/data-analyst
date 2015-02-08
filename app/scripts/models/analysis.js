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
        dataSourceError: '',
        data: null,
        suite: null
    });

    module.exports = new Analysis();
});

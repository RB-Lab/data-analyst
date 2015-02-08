define(function(require, exports, module){
    'use strict';
    // TODO make normal i18n using proper lib, initializing on app start, setting lang
    // from config or browser navigator.language. Maybe even insert it to templates.
    module.exports = {
        dataSourceErrors: {
            wrongData: 'Specified API provides incorrect data',
            unknown: 'Error occured while loading specified URL',
            401: 'This API provided only for authorised users',
            403: 'This API is forbidden',
            404: 'Can\'t find specified URL',
            500: 'Error on data server'
        },
        suitLoadingError: {
            unknown: 'Error occured while loading specified URL',
            401: 'This suite location provided only for authorised users',
            403: 'This suite location is forbidden',
            404: 'Can\'t find specified URL',
            500: 'Error on data server'
        },
    };

});

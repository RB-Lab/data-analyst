define(function(require, exports, module){
    'use strict';
    module.exports = {
        dataSourceErrors: {
            wrongData: 'Specified API provides incorrect data',
            unknown: 'Error occured while loading specified URL',
            401: 'This API provided only for authorised users',
            403: 'This API is forbidden',
            404: 'Can\'t find specified URL',
            500: 'Error on data server'
        }
    };

});

sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'masterss',
            componentId: 'Company_codeList',
            contextPath: '/Company_code'
        },
        CustomPageDefinitions
    );
});
sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'masterss/test/integration/FirstJourney',
		'masterss/test/integration/pages/Company_codeList',
		'masterss/test/integration/pages/Company_codeObjectPage'
    ],
    function(JourneyRunner, opaJourney, Company_codeList, Company_codeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('masterss') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCompany_codeList: Company_codeList,
					onTheCompany_codeObjectPage: Company_codeObjectPage
                }
            },
            opaJourney.run
        );
    }
);
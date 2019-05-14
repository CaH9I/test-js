window.PeeriusIpxlTestCallbacks =
    [{
        name: 'homepage_Section2_1_ie',
        position: 'homepage_Section2_1_ie',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'homepage_Section2_1_uk',
        position: 'homepage_Section2_1_uk',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'notFound_SectionMarketing_5_ie',
        position: 'notFound_SectionMarketing_5_ie',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'notFound_SectionMarketing_5_uk',
        position: 'notFound_SectionMarketing_5_uk',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'SearchEmpty_SectionMarketing_3_ie',
        position: 'SearchEmpty_SectionMarketing_3_ie',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'SearchEmpty_SectionMarketing_3_uk',
        position: 'SearchEmpty_SectionMarketing_3_uk',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'emptyCartPage_Section1_4_ie',
        position: 'emptyCartPage_Section1_4_ie',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'emptyCartPage_Section1_4_uk',
        position: 'emptyCartPage_Section1_4_uk',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'orderConfirmationPage_Section1_6_ie',
        position: 'orderConfirmationPage_Section1_6_ie',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'orderConfirmationPage_Section1_6_uk',
        position: 'orderConfirmationPage_Section1_6_uk',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'productDetails_SectionCarousel_2_ie',
        position: 'productDetails_SectionCarousel_2_ie',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'productDetails_SectionCarousel_2_uk',
        position: 'productDetails_SectionCarousel_2_uk',
        recommendation: ["1154210", "1199868", "1097492", "1019694", "1190487"]
    },
    {
        name: 'homepage_Section1_1_uk',
        position: 'homepage_Section1_1_uk',
        recommendation: ["1154210"]
    },
    {
        name: 'homepage_Section1_1_ie',
        position: 'homepage_Section1_1_ie',
        recommendation: ["1154210"]
    },
    {
        name: 'homepage_Section3_banner1_uk',
        position: 'homepage_Section3_banner1_uk',
        recommendation: ["1154210"]
    },
    {
        name: 'homepage_Section3_banner1_ie',
        position: 'homepage_Section3_banner1_ie',
        recommendation: ["1154210"]
    },
    {
        name: 'C01_SectionTopBanner1_1_uk',
        position: 'C01_SectionTopBanner1_1_uk',
        recommendation: ["1154210"]
    },
    {
        name: 'C01_SectionTopBanner1_1_ie',
        position: 'C01_SectionTopBanner1_1_ie',
        recommendation: ["1154210"]
    }];

(function () {
    "use strict";

    var getUrlParameter = function (url, name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
        if (results == null) {
            return null;
        }
        else {
            return decodeURI(results[1]) || 0;
        }
    };

    window.Peerius = {
        smartRecsClick: function (id) {
            console.log("PEERIUS-TEST: Clicked on id " + id + ", going to another page");
        },
        smartRecsSendClick: function (id) {
            console.log("PEERIUS-TEST: Clicked on id " + id + ", staying on the same page");
        },
        sendAjax: function (url) {
            var ids = getUrlParameter(url, 'ids');
            var idsArray = ids.split(',');
            for (var i in idsArray) {
                if (idsArray.hasOwnProperty(i)) {
                    console.log('PEERIUS-TEST: Shown recommendation ' + idsArray[i]);
                }
            }
        }
    };

    console.log("PEERIUS-TEST: Test started");

    if (!window.PeeriusCallbacks) {
        console.error('PeeriusCallbacks not defined')
    } else {
        console.log('PeeriusCallbacks defined')
    }

    console.log('PEERIUS-TEST: Start parsing callback');

    var tracking = window.PeeriusCallbacks['track'] || undefined;
    var callback = window.PeeriusCallbacks['smartRecs'] || undefined;

    var type = tracking['type'] || undefined;
    var lang = tracking['lang'] || undefined;
    var user = tracking['user'] || undefined;
    var channel = tracking['channel'] || undefined;
    var abTestContent = tracking['abTestContent'] || undefined;
    var recContent = tracking['recContent'] || undefined;

    var name = user['name'] || undefined;
    var email = user['email'] || undefined;

    console.log("PEERIUS-TEST: Start parsing PeeriusCallbacks");

    if (!tracking) {
        console.error('track field is missing from PeeriusCallbacks');
    }
    if (!callback) {
        console.error('smartRecs field is missing from PeeriusCallbacks');
    }
    if (!(typeof callback == 'function')) {
        console.error('smartRecs field is not a function');
    }

    if (!type) {
        console.error('type field is missing from PeeriusCallbacks');
    } else {
        console.log('PEERIUS-TEST: type: ' + type);
    }

    if (!lang) {
        console.error('lang field is missing from PeeriusCallbacks');
    } else {
        console.log('PEERIUS-TEST: lang: ' + lang);
    }

    if (!user) {
        console.error('user field is missing from PeeriusCallbacks');
    } else {
        console.log('PEERIUS-TEST: user: ', user);
    }

    if (!channel) {
        console.warn('channel field is missing from PeeriusCallbacks');
    } else {
        console.log('PEERIUS-TEST: channel: ' + channel);
    }

    if (!abTestContent) {
        console.warn('abTestContent field is missing from PeeriusCallbacks');
    } else {
        console.log('PEERIUS-TEST: abTestContent: ' + abTestContent);
    }

    if (!recContent) {
        console.warn('recContent field is missing from PeeriusCallbacks');
    } else {
        console.log('PEERIUS-TEST: recContent: ' + recContent);
    }

    console.log("PEERIUS-TEST: End parsing PeeriusCallbacks");

    var ipxlTest = window.PeeriusIpxlTestCallbacks || undefined;

    var response;

    if (!ipxlTest) {
        console.log("PEERIUS-TEST: PeeriusIpxlTestCallbacks not defined, no recommendation will be provided");
    } else {
        console.log("PEERIUS-TEST: Preparing response")
        response = ipxlTest.map(function(element){
            var recs = [],
                widget = element.recommendation,
                name = element.name;

            if(widget){
                recs = widget.map(function(id){
                    var recommendation = {
                        id: 'P_' + id,
                        refCode: id
                    };
                    if (recContent != 'refCodeOnly') {
                        recommendation.url = 'URL' + id;
                    }
                    return recommendation;
                });
            }
            return {
                widget: name + 'json',
                alias: name + 'widget',
                position: element.position,
                recs: recs
            }
        });

    }

    callback.call(this, response);
})();

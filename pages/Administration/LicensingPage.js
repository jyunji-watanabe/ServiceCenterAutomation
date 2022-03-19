const menu = require('../../utilities/menu');

const { I } = inject();
module.exports = {
    locators: {
        FeatureTitles: { css: 'tr>td:nth-child(2) span.NoWrap' }, // Title部分はNoWrapクラスがついているため（他に説明部分がある）
        FeatureValues: { css: 'tr>td:nth-child(4) span.NoWrap' }
    },
    open() {
        menu.open('Administration', 'Licensing');
    },
    async getFeatureValueSet() {
        let featureTitles = await I.grabTextFromAll(this.locators.FeatureTitles);
        let featureValues = await I.grabTextFromAll(this.locators.FeatureValues);
        if (featureTitles.length !== featureValues.length)
            throw new Exception("Failed to retrieve OutSystem Features. " +
                                "FeatureTitleCount, FeatureValueCount: " + FeatureTitles.length + ", " + FeatureValues.length);
        let featureTitleValueSet = {};
        for (var i = 0; i < featureTitles.length; i++)
            featureTitleValueSet[featureTitles[i]] = featureValues[i];
        return featureTitleValueSet;
    }
}
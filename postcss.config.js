const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');

const postCssConfig = {
    plugins: [
        postcssImport,
        postcssFlexbugsFixes,
        postcssPresetEnv({ stage: 3 })
    ]
};


const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: postCssConfig
    }
};

module.exports = {
    postCssConfig,
    postCssLoader
};

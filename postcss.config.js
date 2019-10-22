module.exports = {
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-preset-env')({
            stage: 0,
            autoprefixer: { grid: false },
            features: {
                'custom-media-queries': true,
            },
            importFrom: './src/base.css',
        }),
    ],
};

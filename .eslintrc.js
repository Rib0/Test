module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['babel', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'linebreak-style': 'off', // Неправильно работает в Windows.
        'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
        'jsx-a11y/label-has-for': [
            2,
            {
                required: {
                    every: ['id'],
                },
            },
        ], // для ошибки вложенных свойств htmlFor элементов label
    },
};

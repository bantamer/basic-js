module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
        mocha: true,
    },
    extends: ['prettier', 'eslint:recommended'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'no-console': 'error',
        'no-plusplus': 'error',
        eqeqeq: 'error',
        'prefer-const': 'error',
        'no-use-before-define': 'error',
    },
};

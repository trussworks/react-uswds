const _import = require('eslint-plugin-import');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const jsxA11Y = require('eslint-plugin-jsx-a11y');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const noOnlyTests = require('eslint-plugin-no-only-tests');
const security = require('eslint-plugin-security');
const vitest = require('eslint-plugin-vitest');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');
const {
    fixupConfigRules,
    fixupPluginRules,
} = require('@eslint/compat');


const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [
    ...fixupConfigRules(compat.extends(
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:security/recommended-legacy',
        'plugin:storybook/recommended',
        'prettier',
    )), {
        plugins: {
            import: fixupPluginRules(_import),
            '@typescript-eslint': typescriptEslint,
            'jsx-a11y': fixupPluginRules(jsxA11Y),
            react: fixupPluginRules(react),
            'react-hooks': fixupPluginRules(reactHooks),
            'no-only-tests': noOnlyTests,
            security: fixupPluginRules(security),
            vitest: fixupPluginRules(vitest),
        },

        ignores: [
            'node_modules/*'
        ],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.node,
            },

            ecmaVersion: 2018,
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },

                requireConfigFile: false,
            },
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
            'no-only-tests/no-only-tests': 'error',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-expressions':  ['error', { 'allowShortCircuit': true}]
        },
    }, ...compat.extends('plugin:@typescript-eslint/recommended', 'prettier').map(config => ({
        ...config,
        files: ['**/*.ts?(x)'],
    })), {
        files: ['**/*.ts?(x)'],

        plugins: {
            '@typescript-eslint': typescriptEslint,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2018,
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },

                warnOnUnsupportedTypeScriptVersion: true,
            },
        },

        rules: {
            'import/no-unresolved': 'off',
        },
    }
];

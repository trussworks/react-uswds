const { defineConfig, globalIgnores } = require('eslint/config')
const _import = require('eslint-plugin-import')
const typescriptEslint = require('@typescript-eslint/eslint-plugin')
const jsxA11Y = require('eslint-plugin-jsx-a11y')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const noOnlyTests = require('eslint-plugin-no-only-tests')
const security = require('eslint-plugin-security')
const vitest = require('@vitest/eslint-plugin')
const globals = require('globals')
const tsParser = require('@typescript-eslint/parser')
const js = require('@eslint/js')
const { FlatCompat } = require('@eslint/eslintrc')
const { fixupConfigRules, fixupPluginRules } = require('@eslint/compat')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = defineConfig([
  globalIgnores(['src/serverSideTest.js']),
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:security/recommended-legacy',
      'plugin:storybook/recommended',
      'prettier'
    )
  ),
  {
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

    ignores: ['node_modules/*'],

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
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  ...compat
    .extends('plugin:@typescript-eslint/recommended-type-checked', 'prettier')
    .map((config) => ({
      ...config,
      files: ['**/*.ts?(x)'],
    })),
  {
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
        projectService: {
          allowDefaultProject: [
            '__mocks__/focus-trap-react.tsx',
            'dangerfile.ts',
          ],
          defaultProject: 'tsconfig.json',
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },

    rules: {
      'import/no-unresolved': 'off',
    },
  },
  {
    // Storybook treats CSF render functions as component boundaries, but the
    // hooks rule cannot infer that from their lowercase property name.
    files: ['**/*.stories.tsx'],

    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    // dangerfile.ts is tooling, not library code: it is outside tsconfig.json's
    // include, so node builtin module types (e.g. child_process) cannot resolve
    // and the type-aware "unsafe" rules produce false positives
    files: ['dangerfile.ts'],

    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
])

const aliasPath = require('./aliasPath');

module.exports = (() => ({
	env: {
		browser: true,
		es6: true
	},
	extends: [
		'airbnb'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'import',
		'react-hooks'
	],
	rules: {
		'arrow-body-style': ['error', 'as-needed'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'max-len': ['error', 120],
		'linebreak-style': 0,
		'no-restricted-syntax': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		indent: ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'jsx-quotes': ['error', 'prefer-single'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'prettier/prettier': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'comma-dangle': ['error', 'never'],
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				'newlines-between': 'always',
				warnOnUnassignedImports: true,
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
				pathGroupsExcludedImportTypes: ['react'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'builtin'
					},
					{
						pattern: '@layout/**',
						group: 'internal'
					},
					{
						pattern: '@components/**',
						group: 'internal'
					},
					{
						pattern: '@contexts/**',
						group: 'internal'
					},
					{
						pattern: '@helpers/**',
						group: 'internal'
					},
					{
						pattern: '@hooks/**',
						group: 'internal'
					},
					{
						pattern: '@config/**',
						group: 'internal'
					},
					{
						pattern: '@images/**',
						group: 'internal'
					}
				]
			}
		]
	},
	settings: {
		'import/resolver': {
			'babel-module': {
				'module-resolver': {
					alias: aliasPath
				}
			}
		}
	}
}))();

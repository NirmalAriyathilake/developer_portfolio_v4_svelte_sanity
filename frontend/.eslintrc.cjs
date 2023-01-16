module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint', 'simple-import-sort'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							// `react` first, `next` second, then packages starting with a character
							['^react$', '^next', '^[a-z]'],
							// Packages starting with `@`
							['^@'],
							// Packages starting with `~`
							['^~'],
							// Imports starting with `../`
							['^\\.\\.(?!/?$)', '^\\.\\./?$'],
							// Imports starting with `./`
							['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
							// Style imports
							['^.+\\.s?css$'],
							// Side effect imports
							['^\\u0000']
						]
					}
				]
			}
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'@typescript-eslint/consistent-type-imports': 'error',
		// '@typescript-eslint/consistent-type-imports': [
		// 	'error',
		// 	{
		// 		prefer: 'type-imports',
		// 		fixStyle: 'separate-type-imports'
		// 	}
		// ],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error'
	}
};

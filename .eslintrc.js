"use strict";

module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:eslint-plugin/recommended",
		"plugin:node/recommended",
	],
	env: {
		node: true,
	},
	rules: {
		// Possible Problems
		"no-unused-vars": [
			1,
			{
				vars: "local",
				args: "none",
				ignoreRestSiblings: false,
				argsIgnorePattern: "^_",
				caughtErrors: "none",
			},
		],
		// Suggestions
		quotes: [2, "double", { allowTemplateLiterals: true }],
		// Layout & Formatting
		indent: [
			2,
			"tab",
			{
				SwitchCase: 4,
			},
		],
		"brace-style": [
			2,
			"allman",
			{
				allowSingleLine: true,
			},
		],
		semi: [2, "always"],
	},
	overrides: [
		{
			files: ["tests/**/*.js"],
			env: { mocha: true },
		},
	],
};

const aliasPath = require('./aliasPath');

module.exports = (()=>({
	"presets": [
		"next/babel"
	],
	"plugins": [
		[
			"styled-components",
			{
				"ssr": true,
				"displayName": true,
				"preprocess": false
			}
		],
		["@babel/plugin-proposal-optional-chaining"],
		["inline-import", { "extensions": [".css"] }],
		["import", { "libraryName": "antd" }],
		["module-resolver", {
			"alias": aliasPath
		}]
	]
}))();
module.exports = {
	exportTrailingSlash: true, // evita error 404
	exportPathMap() {
		return {
			'/': { page: '/' },
		};
	},
};

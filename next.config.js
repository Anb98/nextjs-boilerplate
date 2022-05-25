module.exports = {
	trailingSlash: true, // evita error 404
	exportPathMap() {
		return {
			'/': { page: '/' }
		};
	}
};

'use strict';

const pathKey = options => {
	options = options || {};

	const env = options.env || process.env;
	const platform = options.platform || process.platform;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(env).find(x => x.toUpperCase() === 'PATH') || 'Path';
};

module.exports = pathKey;
module.exports.default = pathKey;

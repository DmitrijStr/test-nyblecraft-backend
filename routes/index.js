const { createPdf } = require('./routes');


const router = (req, res) => {
	if (req.url === '/user' && req.method === 'POST') {
		createPdf(req, res);
	}
}

	module.exports = {
    router
};
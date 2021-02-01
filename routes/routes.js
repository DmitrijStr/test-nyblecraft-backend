const { userModel } = require('../models/user.js');
const PDFDocument = require('pdfkit');
const FS = require('fs');

const createPdf = (req, res) => {
	let data = '';
	req.on('data', (chunk) => {
		data += chunk
	});
	req.on('end', () => {
		const body = JSON.parse(data)
		console.log(body.firstName)
		userModel.findOne({
			where: {
				firstName: body.firstName
			},
			raw: true
		})
			.then((user) => {
				const doc = new PDFDocument();
				doc.pipe(FS.createWriteStream('output.pdf'));
				doc.text(`${user.firstName} ${user.lastName}`)
				doc.image(user.image, {
					fit: [250, 300]
				})
				doc.end();
			})
			.then(() => {
				const readStream = FS.createReadStream('./output.pdf');
				const data = [];
				readStream.on('data', (chunk) => {
					data.push(chunk);
				});
				readStream.on('end', () => {
					userModel.update({ pdf: Buffer.concat(data) }, {
						where: {
							firstName: body.firstName
						}
					})
				});
			})
		res.end(JSON.stringify('true'))
		res.writeHead(200, {
			'Content-Type': 'application/json'
		})
	})
}

module.exports = {
	createPdf,
};

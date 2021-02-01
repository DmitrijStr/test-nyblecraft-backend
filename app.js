const http = require('http');
const { router } = require('./routes');
const { sequelize } = require('./configs/dbconfig.js');
const { PORT } = require('./configs/index.js');

sequelize.authenticate().then(function (e) {
	if (e) {
		console.log('There is connection ERROR');
	} else {
		console.log('Connection to db has been established successfully');
	}
});

const server = http.createServer(router);

server.listen(PORT, () => console.log(`listening to port: ${PORT}`));

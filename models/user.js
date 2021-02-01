const { sequelize } = require('../configs/dbconfig.js');
const Sequelize = require('sequelize');

const userModel = sequelize.define('users', {
	firstName: {
		type: Sequelize.STRING(64)
	},
	lastName: {
		type: Sequelize.STRING(64),
	},
	image: {
		type: Sequelize.BLOB('long')
	},
	pdf: {
		type: Sequelize.BLOB('long'),
	}
});

module.exports = {
	userModel
};

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	'usersdb',
	'dima',
	'pass', {
	host: 'localhost',
	port: 3306,
	dialect: 'mysql',
	define: {
		freezeTableName: true
	}
});

module.exports = {
  sequelize
};

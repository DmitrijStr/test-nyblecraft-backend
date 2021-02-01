const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	'usersdb',
	'dima',
	'80293642685qweR!', {
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

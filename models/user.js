var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {

	var users = sequelize.define("users", {
		name: DataTypes.STRING,
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		email: DataTypes.STRING
	});
	// , {

	// 	//ALL OPTIONS FOR THIS MODEL IN HERE 
		
	// });
	return users;
}
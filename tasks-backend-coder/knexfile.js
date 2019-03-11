// module.exports = {
// 	client: 'postgresql',
// 	connection: {
// 		database: 'tasks',
// 		user: 'postgres',
// 		password: '123456'
// 	},
// 	pool: {
// 		min: 2,
// 		max: 10
// 	},
// 	migrations: {
// 		tableName: 'knex_migrations'
// 	}
// };

module.exports = {
	client: 'postgresql',
	connection: {
		// host: 'postgres://zghphpkp:N-NFxE__yTOLf9IQlQFEk7qW_idHbT4F@isilo.db.elephantsql.com:5432/zghphpkp',
		host: 'isilo.db.elephantsql.com',
		database: 'zghphpkp',
		user: 'zghphpkp',
		password: 'N-NFxE__yTOLf9IQlQFEk7qW_idHbT4F'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};

//basic script for package.json "mocha --exit" (replaced with nodemon script for auto testing)

const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

before((done) => {
	mongoose.connect('mongodb://localhost/users_test2', { useNewUrlParser: true });
	mongoose.connection
		.once('open', () => {
			done();
		})
		.on('error', (error) => {
			console.warn('Warning', error);
		});
})

beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		done();
	});
})

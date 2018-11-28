const assert = require('assert');
const User = require('../src/user');
const colors = require('colors');

describe('Reading users out of the database', () => {
	let sabrina;

	beforeEach((done) => {
		sabrina = new User({ name: 'Sabrina'});

		sabrina.save()
			.then(() => done());
	})

	it('finds all users with name of sabrina', (done) => {
		User.find({ name: 'Sabrina'})
			.then((users) => {
				// console.log('users: ', users);
				assert(users[0]._id.toString() === sabrina._id.toString());

				console.log(' ');
				console.log('  You fucking rock Madeleine!!!! :)'.magenta)
				done();
			})
	})

	it('find a user with a particular id', (done) => {
		User.findOne({ _id: sabrina._id })
			.then((user) => {
				assert(user.name === 'Sabrina');
				done();
			});
	})
})

const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
	it('saves a user', () => {
		const sabrina = new User({ name: 'Sabrina' });

		sabrina.save();
	})
})

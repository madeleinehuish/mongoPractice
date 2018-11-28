const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
	it('saves a user', (done) => {
		const sabrina = new User({ name: 'Sabrina' });

		sabrina.save()
			.then(() => {
				assert(!sabrina.isNew); //isNew is a mongo function that is true if value has NOT been saved to db
				done();
			});
	})
})

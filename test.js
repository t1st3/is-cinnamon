import test from 'ava';
import isCinnamon from '.';

test('is-cinnamon', async t => {
	await isCinnamon.then(bool => {
		t.is(bool, false);
	});
});

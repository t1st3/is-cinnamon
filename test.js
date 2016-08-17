import test from 'ava';
import isCinnamon from './';

test('is-cinnamon', t => {
	return isCinnamon().then(data => {
		t.false(data);
	});
});

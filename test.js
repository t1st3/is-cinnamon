import test from 'ava';
import isCinnamon from '.';

test('is-cinnamon', async t => {
	t.is(await isCinnamon(), false);
});

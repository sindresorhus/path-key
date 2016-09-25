import test from 'ava';
import m from './';

test(t => {
	t.is(m().toUpperCase(), 'PATH');
	t.is(m({env: {PATH: ''}}), 'PATH');
	t.is(m({env: {Path: ''}, platform: 'win32'}), 'Path');
	t.is(m({env: {}, platform: 'darwin'}), 'PATH');
	t.is(m({env: {}, platform: 'win32'}), 'Path');
});

import test from 'ava';
import fn from './';

test(t => {
	t.is(fn().toUpperCase(), 'PATH');
	t.is(fn({env: {PATH: ''}}), 'PATH');
	t.is(fn({env: {Path: ''}, platform: 'win32'}), 'Path');
	t.is(fn({env: {}, platform: 'darwin'}), 'PATH');
	t.is(fn({env: {}, platform: 'win32'}), 'Path');
});

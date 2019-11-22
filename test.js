import test from 'ava';
import pathKey from '.';

test('main', t => {
	t.is(pathKey().toUpperCase(), 'PATH');
	t.is(pathKey({env: {PATH: ''}}), 'PATH');
	t.is(pathKey({env: {Path: ''}, platform: 'win32'}), 'Path');
	t.is(pathKey({env: {}, platform: 'darwin'}), 'PATH');
	t.is(pathKey({env: {}, platform: 'win32'}), 'Path');
	t.is(pathKey({env: {Path: '', PATH: ''}, platform: 'win32'}), 'PATH');
	t.is(pathKey({env: {PATH: '', Path: ''}, platform: 'win32'}), 'Path');
});

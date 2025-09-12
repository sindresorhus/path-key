import test from 'ava';
import pathKey from './index.js';

test('main', t => {
	t.is(pathKey().toUpperCase(), 'PATH');
	t.is(pathKey({env: {PATH: ''}}), 'PATH');
	t.is(pathKey({env: {Path: ''}, platform: 'win32'}), 'Path');
	t.is(pathKey({env: {}, platform: 'darwin'}), 'PATH');
	t.is(pathKey({env: {}, platform: 'win32'}), 'Path');
	t.is(pathKey({env: {Path: '', PATH: ''}, platform: 'win32'}), 'PATH');
	t.is(pathKey({env: {PATH: '', Path: ''}, platform: 'win32'}), 'Path');
});

test('Windows environment variable case variations', t => {
	// Test different case variations that might exist on Windows
	const variations = [
		{env: {path: 'value'}, expected: 'path'},
		{env: {Path: 'value'}, expected: 'Path'},
		{env: {PATH: 'value'}, expected: 'PATH'},
		{env: {PaTh: 'value'}, expected: 'PaTh'},
	];

	for (const {env, expected} of variations) {
		t.is(pathKey({env, platform: 'win32'}), expected);
	}
});

test('Non-Windows platforms always return PATH', t => {
	const platforms = ['darwin', 'linux', 'freebsd', 'aix', 'sunos'];
	const env = {path: 'value', Path: 'value'};

	for (const platform of platforms) {
		t.is(pathKey({env, platform}), 'PATH');
	}
});

test('Empty environment defaults', t => {
	t.is(pathKey({env: {}, platform: 'win32'}), 'Path');
	t.is(pathKey({env: {}, platform: 'darwin'}), 'PATH');
	t.is(pathKey({env: {}, platform: 'linux'}), 'PATH');
});

test('Custom environment objects work correctly', t => {
	// This demonstrates why the package is useful - custom env objects
	// don't have the case-insensitive magic of process.env on Windows
	const customEnv = {Path: 'C:\\Windows\\System32'};
	const key = pathKey({env: customEnv, platform: 'win32'});

	t.is(key, 'Path');
	t.is(customEnv[key], 'C:\\Windows\\System32');
	t.is(customEnv.PATH, undefined); // Not case-insensitive like process.env
});

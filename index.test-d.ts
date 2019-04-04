import {expectType} from 'tsd';
import pathKey = require('.');

expectType<string>(pathKey());
expectType<string>(pathKey({env: {}}));
expectType<string>(pathKey({platform: 'win32'}));

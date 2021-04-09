import {expectType} from 'tsd';
import pathKey from './index.js';

expectType<string>(pathKey());
expectType<string>(pathKey({env: {}}));
expectType<string>(pathKey({platform: 'win32'}));

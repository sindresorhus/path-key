import {expectType} from 'tsd-check';
import pathKey from '.';

expectType<string>(pathKey());
expectType<string>(pathKey({env: {}}));
expectType<string>(pathKey({platform: 'win32'}));

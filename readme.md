# path-key

> Get the [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) environment variable key cross-platform

It's usually `PATH` but on Windows it can be any casing like `Path`...

## Install

```sh
npm install path-key
```

## Usage

```js
import pathKey from 'path-key';

const key = pathKey();
//=> 'PATH'

const PATH = process.env[key];
//=> '/usr/local/bin:/usr/bin:/bin'
```

## API

### pathKey(options?)

#### options

Type: `object`

##### env

Type: `object`\
Default: [`process.env`](https://nodejs.org/api/process.html#process_process_env)

Use a custom environment variables object.

#### platform

Type: `string`\
Default: [`process.platform`](https://nodejs.org/api/process.html#process_process_platform)

Get the PATH key for a specific platform.

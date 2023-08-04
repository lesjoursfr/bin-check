[![npm version](https://badge.fury.io/js/@lesjoursfr%2Fbin-check.svg)](https://badge.fury.io/js/@lesjoursfr%2Fbin-check)
[![QC Checks](https://github.com/lesjoursfr/bin-check/actions/workflows/quality-control.yml/badge.svg)](https://github.com/lesjoursfr/bin-check/actions/workflows/quality-control.yml)
[![Tests](https://github.com/lesjoursfr/bin-check/actions/workflows/tests.yml/badge.svg)](https://github.com/lesjoursfr/bin-check/actions/workflows/tests.yml)

# bin-check

Check if a binary is working by checking its exit code

## Install

```sh
npm install @lesjoursfr/bin-check
```

## Usage

```js
import binCheck from "@lesjoursfr/bin-check";

binCheck("/bin/sh", ["--version"]).then((works) => {
	console.log(works);
	//=> true
});
```

## API

### binCheck(binary, [arguments])

Returns a `Promise` for a `boolean`.

### binCheck.sync(binary, [arguments])

Returns a `boolean`.

#### binary

Type: `string`

Path to the binary.

#### arguments

-   Type: `Array`
-   Default: `['--help']`

Arguments to run the binary with.

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)

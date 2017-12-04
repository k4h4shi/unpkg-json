# unpkg-json 

> Get metadata of a package from [unpkg.com](https://unpkg.com/#/)


## Install

```
$ npm install --save unpkg-json
```


## Usage

```js
const unpkgJson = require('unpkg-json');

unpkgJson('dpndon').then(json => {
	console.log(json);
	//=> {name: 'dpndon', ...}
});

```

## API

### unpkgJson(name)

#### name

Type: `string`

Name of the package.

## License
MIT

## Author
[Kotaro Takahashi@k4h4shi](https://twitter.com/k4h4shi)
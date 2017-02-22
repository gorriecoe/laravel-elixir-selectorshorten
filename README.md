# laravel-elixir-selectorshorten

This plugin only renames ids with a prefix of id- and classes with a prefix of class-. You can specify more prefixes though the options object.

## Install

```bash
$ npm install --save-dev laravel-elixir-selectorshorten
```

## Usage

User e.g. to delete intermediary files after elixir version

```js

require('laravel-elixir-selectorshorten');

elixir(function(mix) {
  mix.shorten();
});
```
## Custom usage
Shorten can be called with the following settings:

```js
shorten(options, allowedExtensions)
```

#### options
Type: Array

The array with prefix strings.

#### allowedExtensions

Type: Array

The array with file extensions.

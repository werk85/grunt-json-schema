# grunt-json-schema

> Grunt json-schema validation task

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-schema --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-schema');
```

## The "json_schema" task

### Overview
In your project's Gruntfile, add a section named `json_schema` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_schema: {
    test: {
      options: {
        // json-schema specific options go here
      },
      files: {
        // Schema to file mapping goes here
      } 
    }
  }
})
```

### Options

For configurable options see the documentation of [json-schema](https://github.com/kriszyp/json-schema).

### Usage Examples

#### Default Options
In this example the files at `path1/input.json` and `path2/*.json` are validated with the `path/schema.json` file. You can define as much schemas to file mappings as you want.

```js
grunt.initConfig({
  json_schema: {
    test: {
      options: {},
      files: {
        'path/schema.json': ['path1/input.json', 'path2/*.json']
      } 
    }
  }
})
```

#### Custom Options
You can define custom `options` that are given to the [json-schema] validator.

```js
grunt.initConfig({
  json_schema: {
    test: {
      options: {
        validateFormatsStrict: true
      },
      files: {
        'path/schema.json': ['path1/input.json', 'path2/*.json']
      }  
    }
  }
})
```

## Release History
_(Nothing yet)_

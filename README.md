[![Build Status](https://travis-ci.org/magnolia-cms/calculator-magnolia.svg?branch=master)](https://travis-ci.org/magnolia-cms/calculator-magnolia)

# calculator-magnolia

Simple configurable calculator, ie for interest or mortgage calculation - Component template for Magnolia CMS.

> (Demonstrates how to test light modules)

> (Demonstrates how to build resources with webpack)


## Features

Provide a simple calculator on a webpage to enable visitors to calculate a value based on a formula that you configure. Can be used to supply interest calculators, mortgage calculators, and the like. Calculator contains two fields.

Content author can supply formula as well as labels for the two fields.

Can be placed multiple times on one page.

![](./_dev/README-calculator.png)

![](./_dev/README-calculator-dialog.png)

## Usage

Make the component available to authors, and include the files in `webresources` on your pages using standard magnolia techniques.

(To make this component available on the mtk basic page, you could use the decoration included in `_dev/decorations`.)

### Depends on jQuery 3.x

jQuery 3.x must be available on the page.

To include the Necessary resources you could add the following fragment to your page template.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src=".resources/calculator-magnolia/webresources/bundle.js"></script>

```


## Tests

> This project illustrates how to test a shared Magnolia light module.
> Both integration tests and js unit tests are demonstrated.

### Magnolia Template / Integration tests

The correct rendering of your template, based on content entered with the dialog can be tested with an integration test. This package demonstrates the following approach:
* Create a demo page with one or more instances of your component configured in various ways via the dialog.
* Export the page as an xml bootstrap file to `_dev/demos` directory.
* Supply a test script in `_dev/test/integration` which loads the demo webpage and checks the rendered DOM for expected contents. Such tests can be easily written with the `cheerio` library (https://github.com/cheeriojs/cheerio).
* Add an integration and test script to the `package.json`. (See the package.json for details.)
* Supply a `.travis.yml` configuration, and connect your git repo to the free travis-ci continuous integration service so that your modules tests will be run whenever it is pushed to github.

Cheerio is recommended as an easy approach to testing rendered templates, but you could use more sophisticated approaches, such as selenium to test user interactions with your components.

### JS Unit Tests

JS Unit tests are using Jest as test runner, as it supplies a DOM environment

### Travis

travis-ci automatically runs the `test` script provided in the package.json.

Setting up the Magnolia server is done with the `before_script` hook in `.travis.yml`.


## Information on Magnolia CMS
This directory is a Magnolia 'light module'.

https://docs.magnolia-cms.com

Search the docs for `sharing light modules` for details on how to share and use light modules on npm and github.


## Contribute to the Magnolia component ecosystem
It's easy to create components for Magnolia and share them on github and npm. I invite you to do so and join the community. Let's stop wasting time by developing the same thing again and again, rather let's help each other out by sharing our work and create a rich library of components.

Just add `magnolia-light-module` as a keyword to npm's package.json to make them easy to find and use on npm.


## License

MIT

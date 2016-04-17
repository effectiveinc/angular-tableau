# EffectiveUI Angular Directive for Tableau

This is an Angular module that provides a service and directive for easily embedding Tableau visualizations within
your Angular app.

It's built with [Angular 1.4.x](https://angularjs.org) and [Gulp.js](http://gulpjs.com) and targets modern browsers 
(latest Chrome, Firefox, and Safari, IE10+) and Tableau Server 9.1 - 9.3.

## Usage

1. Install the component (e.g. with Bower). If needed, add the main JS file identified in bower.json to your HTML.
2. Add a dependency on the com.effectiveui.tableau module in your app module
3. Currently, you must manually add the Tableau Server script tag to your main HTML page, per the 
  [Tableau instructions](http://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_concepts_get_API.htm)
4. In your app's config function, inject the tableauProvider and use the `configure` method to provide the host and
  siteRoot for your Tableau server (see documentation comments in this service). Optionally, you can also use the
  `setDefaultOptions` method to provide default options for all visualizations you embed.
5. To embed a visualization, decorate a `div` or other element with the `eui-tableau-viz` attribute. The value of
  this attribute should be the workbook/view path for the desired visualization, as defined on the Tableau server
  (this can be found in Tableau embed code blocks as the "name" parameter. Encoded HTML entities should be decoded, 
  so e.g. if your Tableau embed code contains `<param name='name' value='MyWorkbook&#47;MyViz' />`, enter this as
   `MyWorkbook/MyViz`). Also, you'll need to specify a `viz-height` attribute on the same element, to tell the 
   visualization how tall it should be (its width will behave like a block-level element and fill its container).

## Contributing

1. Install a current version of Node.js (built with v4.2.4) from https://nodejs.org/
2. Install Bower: `npm install -g bower`
3. Install Gulp: `npm install -g gulp`
4. cd to the project root and install dependencies: `npm install && bower install`

NOTE: Node.js is only used for the development environment; it is not required for the component itself at runtime.

You can use the following commands:

- `$ gulp` to build the component and demo app in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode

## See Also

For more info on Tableau configuration, see Tableau's [JavaScript API documentation]
(http://onlinehelp.tableau.com/current/api/js_api/en-us/help.htm)

## Making a Release

TBD

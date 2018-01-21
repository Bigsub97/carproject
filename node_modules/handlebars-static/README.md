# handlebars-static

A [helper](http://handlebarsjs.com/#helpers) for handlebar templates.

The helper generates full URLs to static resources,
such as `example.com/static/css/main.css`, given the static asset,
such as `css/main.css`. It can also be used to cache-bust static assets. This allows you to:

1. Change the location of your static resources very quickly. For example, maybe you initially
had your static resources located at `example.com/static`. Now, let's assume you want
to serve the static resources from a subdomain such as `static.example.com`. This can be
accomplished by making a single change in your code, rather than having to go and
change all the URLs to the static resources manually.

2. Set large cache max-ages for static resources. This makes your application perform
faster, since clients will rarely query for static resources. And you will still be able
to change your static resources, since this helper will cache-bust the URLs.

## Installation

    npm install handlebars-static

## Usage

```javascript
var Handlebars = require('handlebars');
var handlebarsStatic = require('handlebars-static');

Handlebars.registerHelper('static', handlebarsStatic('example.com/static'));

var source = "<img> src='{{static 'images/foo.png'}}' </img>" +
    "<img> src='{{static 'images/bar.jpg'}}' </img>";

var template = Handlebars.compile(source);
var result = template();

console.log(result);

//would render:
//<img> src='example.com/static/images/foo.png' </img>
//<img> src='example.com/static/images/bar.jpg' </img>
```

## Usage with Express

Primarily, this helper was written to be used with express applications that use
handlebars as their view engines. The example code below uses the
[express-handlebars](https://www.npmjs.com/package/express-handlebars) engine,
but you can utilize other engines such as [hbs](https://www.npmjs.com/package/hbs) in a similar
fashion, as long as you know how to register helpers for the engine.

**Directory Structure:**

```
.
├── app.js
└── views
    └── home.hbs

1 directory, 2 files
```

**views/home.hbs:**

```handlebars
<img> src='{{static 'images/foo.png'}}' </img>
<img> src='{{static 'images/bar.jpg'}}' </img>
```

**app.js:**

```javascript
var express = require('express');
var exphbs = require('express-handlebars');
var handlebarsStatic = require('handlebars-static');

var app = express();

//changing this value here will modify the URLs in all the handlebar templates
var staticUrl = 'example.com/static';

var hbs = exphbs.create({
        helpers: {
            
            //you can name the helper anything you like, it does not have to be 'static'.
            //however, it is best to call it 'static'
            static: handlebarsStatic(staticUrl)
        }
    });

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {layout:false});
    
    //will render:
    //<img> src='example.com/static/images/foo.png' </img>
    //<img> src='example.com/static/images/bar.jpg' </img>
    
});

```

## API

This module exposes a single function that
is used to create the helper for handlebars templates.
The function accepts the following parameters:

1. `url`: The URL to append in front of all static assets.
2. `[options]`: An optional object that allows set up of cache busting.
    1. `[options.manifest]`: A map from static asset names to hashed static asset names.
    For example, 
    
        ```javascript
        var manifest = {
        'images/foo.jpg':'images/foo-jd8Hl2.jpg',
        'images/bar.jpg':'images/bar-ny7Ile.jpg'
        };
        ```
        If the manifest is provided, then the helper will internally
        replace the static asset name with the hashed static name,
        and then create the URL to the static resource.
     2. `[options.silenceManifestErrors=false]`: Whether to silence manifest
     errors. This is only required if you are using a manifest. If this is false,
     then the helper will throw an error if the hashed name cannot
     be found for a static asset in the manifest. It is recommended to keep this false.

## Cache Busting

This section is not required in order to use the helper. However, this is how I personally
deal with static assets in all of my projects.

1. Use [gulp-hash](https://www.npmjs.com/package/gulp-hash) to hash my static resources. This gulp
 plugin will create copies of all static resources with hashed names, and will create a manifest
 mapping from the filename to the hashed filename.
2. Provide the manifest generated using gulp-hash to the helper, and then use normally.
3. Create a build script in package.json that runs the gulp-hash task I've created, in order
to create production static assets.

Example is shown below:

**Project Directory Structure:**

```
.
└── static
    └── images
        ├── main.png
        └── foo.png
    └── js
        ├── bar.js
        └── bundle.js
└── app.js
```

**Project Directory Structure after gulp-hash**

```
.
└── static
    └── images
        ├── main.png
        ├── main-A8n3n14j.png
        ├── foo.png
        └── foo-n92ljiey.png
    └── js
        ├── bar.js
        ├── bar-nei27ks.js
        ├── bundle.js
        └── bundle-2l83Uls.js
    └── manifest.json
└── app.js
```

**Manifest.json**

```json
{
  "images/main.png": "images/main-A8n3n14j.png",
  "images/foo.png": "images/foo-n92ljiey.png",
  "js/bar.js": "js/bar-nei27ks.js",
  "js/bundle.js": "js/bundle-2l83Uls.js"
}
```

**app.js**

```javascript
var Handlebars = require('handlebars');
var handlebarsStatic = require('handlebars-static');
var manifest = require('./static/manifest.json');

Handlebars.registerHelper('static', handlebarsStatic('example.com/static', {manifest:manifest}));

var source = "<img> src='{{static 'images/foo.png'}}' </img>" +
    "<img> src='{{static 'images/main.png'}}' </img>";

var template = Handlebars.compile(source);
var result = template();

console.log(result);

//would render:
//<img> src='example.com/static/images/foo-n92ljiey.png' </img>
//<img> src='example.com/static/images/main-A8n3n14j.png' </img>
```

## License

MIT
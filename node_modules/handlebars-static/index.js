"use strict";

var is = require('is');
var isPlainObject = require('is-plain-object');
is.plainObject = isPlainObject;
var merge = require('merge');

/**
 * @param {string} url - The URL that will be attached to the front of all links to static resources.
 * @param {object} [options]
 * @param {Object.<string, string>} [options.manifest]
 * @param {boolean} [options.silenceManifestErrors=false]
 * @returns {Function}
 */
module.exports = function (url, options) {

    var defaults = {
        silenceManifestErrors: false
    };

    //type checking
    if (!is.string(url)) throw new TypeError('url must be a string');
    if (is.defined(options) && !is.plainObject(options)) throw new TypeError('options must be a plain object');

    //merge default options
    options = options || {};
    options = merge({}, defaults, options);

    //type check options
    if (!is.bool(options.silenceManifestErrors)) throw new TypeError('options.silenceManifestErrors must be a boolean');
    if (is.defined(options.manifest) && !is.plainObject(options.manifest)) throw new TypeError('options.manifest must be a plain object');
    if (is.defined(options.manifest)) {
        for (var key in options.manifest) {
            if (options.manifest.hasOwnProperty(key)) {
                if (!is.string(key) || !is.string(options.manifest[key])) {
                    throw new TypeError('options.manifest must have all keys and values of type string')
                }
            }
        }
    }

    var manifest = options.manifest;
    var silenceManifestErrors = options.silenceManifestErrors;
    var useManifest = is.defined(manifest);

    //add trailing slash
    url = url.charAt(url.length - 1) === '/' ? url : url + '/';

    return function (staticAsset) {

        //saved to a new variable so that if using the manifest results in an error,
        //the exception will be able to indicate the original parameter that caused problems
        var link = staticAsset;

        //remove leading slash
        if (link.charAt(0) === '/')
            link = link.slice(1);

        if (useManifest) {

            //checking original and then both versions with and without leading slash
            link = manifest[staticAsset] || manifest[link] || manifest['/' + link];

            if (!link) {
                if (!silenceManifestErrors) {
                    throw new Error('Link for ' + staticAsset + ' could not be found in the manifest.');
                }
                else {
                    link = staticAsset; //fallback to using original parameter
                }
            }

            //manifest result may have leading slash
            if (link.charAt(0) === '/')
                link = link.slice(1);
        }

        return url + link;
    }
};
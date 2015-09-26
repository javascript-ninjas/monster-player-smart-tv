/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	window.jQuery = window.$ = __webpack_require__(1);
	__webpack_require__(13);

	__webpack_require__(3);
	__webpack_require__(4);

	var appModule = __webpack_require__(5);

	var config = {
	    strictDi: true
	};

	angular.element(document).ready(function () {
	    angular.bootstrap(document, [appModule], config);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.11.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:19Z
	 */"use strict";(function(global,factory){if(typeof module === "object" && typeof module.exports === "object"){ // For CommonJS and CommonJS-like environments where a proper window is present,
	// execute the factory and get jQuery
	// For environments that do not inherently posses a window with a document
	// (such as Node.js), expose a jQuery-making factory as module.exports
	// This accentuates the need for the creation of a real window
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info
	module.exports = global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else {factory(global);} // Pass this if window is not defined yet
	})(typeof window !== "undefined"?window:undefined,function(window,noGlobal){ // Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//
	var deletedIds=[];var _slice=deletedIds.slice;var concat=deletedIds.concat;var push=deletedIds.push;var indexOf=deletedIds.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="1.11.3", // Define a local copy of jQuery
	jQuery=function jQuery(selector,context){ // The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);}, // Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn = jQuery.prototype = { // The current version of jQuery being used
	jquery:version,constructor:jQuery, // Start with an empty selector
	selector:"", // The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);}, // Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num != null? // Return just the one element from the set
	num < 0?this[num + this.length]:this[num]: // Return all the elements in a clean array
	_slice.call(this);}, // Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){ // Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems); // Add the old object onto the stack (as a reference)
	ret.prevObject = this;ret.context = this.context; // Return the newly-formed element set
	return ret;}, // Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each:function each(callback,args){return jQuery.each(this,callback,args);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i + (i < 0?len:0);return this.pushStack(j >= 0 && j < len?[this[j]]:[]);},end:function end(){return this.prevObject || this.constructor(null);}, // For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:deletedIds.sort,splice:deletedIds.splice};jQuery.extend = jQuery.fn.extend = function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0] || {},i=1,length=arguments.length,deep=false; // Handle a deep copy situation
	if(typeof target === "boolean"){deep = target; // skip the boolean and the target
	target = arguments[i] || {};i++;} // Handle case when target is a string or something (possible in deep copy)
	if(typeof target !== "object" && !jQuery.isFunction(target)){target = {};} // extend jQuery itself if only one argument is passed
	if(i === length){target = this;i--;}for(;i < length;i++) { // Only deal with non-null/undefined values
	if((options = arguments[i]) != null){ // Extend the base object
	for(name in options) {src = target[name];copy = options[name]; // Prevent never-ending loop
	if(target === copy){continue;} // Recurse if we're merging plain objects or arrays
	if(deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){if(copyIsArray){copyIsArray = false;clone = src && jQuery.isArray(src)?src:[];}else {clone = src && jQuery.isPlainObject(src)?src:{};} // Never move original objects, clone them
	target[name] = jQuery.extend(deep,clone,copy); // Don't bring in undefined values
	}else if(copy !== undefined){target[name] = copy;}}}} // Return the modified object
	return target;};jQuery.extend({ // Unique for each copy of jQuery on the page
	expando:"jQuery" + (version + Math.random()).replace(/\D/g,""), // Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){}, // See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction:function isFunction(obj){return jQuery.type(obj) === "function";},isArray:Array.isArray || function(obj){return jQuery.type(obj) === "array";},isWindow:function isWindow(obj){ /* jshint eqeqeq: false */return obj != null && obj == obj.window;},isNumeric:function isNumeric(obj){ // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj) {return false;}return true;},isPlainObject:function isPlainObject(obj){var key; // Must be an Object.
	// Because of IE, we also have to check the presence of the constructor property.
	// Make sure that DOM nodes and window objects don't pass through, as well
	if(!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)){return false;}try{ // Not own constructor property must be Object
	if(obj.constructor && !hasOwn.call(obj,"constructor") && !hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e) { // IE8,9 Will throw exceptions on certain host objects #9897
	return false;} // Support: IE<9
	// Handle iteration over inherited properties before own properties.
	if(support.ownLast){for(key in obj) {return hasOwn.call(obj,key);}} // Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	for(key in obj) {}return key === undefined || hasOwn.call(obj,key);},type:function type(obj){if(obj == null){return obj + "";}return typeof obj === "object" || typeof obj === "function"?class2type[toString.call(obj)] || "object":typeof obj;}, // Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval:function globalEval(data){if(data && jQuery.trim(data)){ // We use execScript on Internet Explorer
	// We use an anonymous function so that context is window
	// rather than jQuery in Firefox
	(window.execScript || function(data){window["eval"].call(window,data);})(data);}}, // Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();}, // args is for internal usage only
	each:function each(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i < length;i++) {value = callback.apply(obj[i],args);if(value === false){break;}}}else {for(i in obj) {value = callback.apply(obj[i],args);if(value === false){break;}}} // A special, fast, case for the most common use of each
	}else {if(isArray){for(;i < length;i++) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}else {for(i in obj) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}}return obj;}, // Support: Android<4.1, IE<9
	trim:function trim(text){return text == null?"":(text + "").replace(rtrim,"");}, // results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results || [];if(arr != null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr === "string"?[arr]:arr);}else {push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){var len;if(arr){if(indexOf){return indexOf.call(arr,elem,i);}len = arr.length;i = i?i < 0?Math.max(0,len + i):i:0;for(;i < len;i++) { // Skip accessing in sparse arrays
	if(i in arr && arr[i] === elem){return i;}}}return -1;},merge:function merge(first,second){var len=+second.length,j=0,i=first.length;while(j < len) {first[i++] = second[j++];} // Support: IE<9
	// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
	if(len !== len){while(second[j] !== undefined) {first[i++] = second[j++];}}first.length = i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert; // Go through the array, only saving the items
	// that pass the validator function
	for(;i < length;i++) {callbackInverse = !callback(elems[i],i);if(callbackInverse !== callbackExpect){matches.push(elems[i]);}}return matches;}, // arg is for internal usage only
	map:function map(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[]; // Go through the array, translating each of the items to their new values
	if(isArray){for(;i < length;i++) {value = callback(elems[i],i,arg);if(value != null){ret.push(value);}} // Go through every key on the object,
	}else {for(i in elems) {value = callback(elems[i],i,arg);if(value != null){ret.push(value);}}} // Flatten any nested arrays
	return concat.apply([],ret);}, // A global GUID counter for objects
	guid:1, // Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var args,proxy,tmp;if(typeof context === "string"){tmp = fn[context];context = fn;fn = tmp;} // Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;} // Simulated bind
	args = _slice.call(arguments,2);proxy = function(){return fn.apply(context || this,args.concat(_slice.call(arguments)));}; // Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;return proxy;},now:function now(){return +new Date();}, // jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support}); // Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object " + name + "]"] = name.toLowerCase();});function isArraylike(obj){ // Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length="length" in obj && obj.length,type=jQuery.type(obj);if(type === "function" || jQuery.isWindow(obj)){return false;}if(obj.nodeType === 1 && length){return true;}return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;}var Sizzle= /*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, // Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, // Instance-specific data
	expando="sizzle" + 1 * new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a === b){hasDuplicate = true;}return 0;}, // General-purpose constants
	MAX_NEGATIVE=1 << 31, // Instance methods
	hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice, // Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i < len;i++) {if(list[i] === elem){return i;}}return -1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier=characterEncoding.replace("w","w#"), // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +  // Operator (capture 2)
	"*([*^$|!~]?=)" + whitespace +  // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",pseudos=":(" + characterEncoding + ")(?:\\((" +  // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +  // 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +  // 3. anything else (capture 2)
	".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace + "+","g"),rtrim=new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$","g"),rcomma=new RegExp("^" + whitespace + "*," + whitespace + "*"),rcombinators=new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),rattributeQuotes=new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^" + identifier + "$"),matchExpr={"ID":new RegExp("^#(" + characterEncoding + ")"),"CLASS":new RegExp("^\\.(" + characterEncoding + ")"),"TAG":new RegExp("^(" + characterEncoding.replace("w","w*") + ")"),"ATTR":new RegExp("^" + attributes),"PSEUDO":new RegExp("^" + pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)","i"),"bool":new RegExp("^(?:" + booleans + ")$","i"), // For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x" + escaped - 0x10000; // NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high !== high || escapedWhitespace?escaped:high < 0? // BMP codepoint
	String.fromCharCode(high + 0x10000): // Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high >> 10 | 0xD800,high & 0x3FF | 0xDC00);}, // Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();}; // Optimize for push.apply( _, NodeList )
	try{push.apply(arr = slice.call(preferredDoc.childNodes),preferredDoc.childNodes); // Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e) {push = {apply:arr.length? // Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}: // Support: IE<9
	function(target,els){var j=target.length,i=0; // Can't trust NodeList.length
	while(target[j++] = els[i++]) {}target.length = j - 1;}};}function Sizzle(selector,context,results,seed){var match,elem,m,nodeType, // QSA vars
	i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument || context:preferredDoc) !== document){setDocument(context);}context = context || document;results = results || [];nodeType = context.nodeType;if(typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11){return results;}if(!seed && documentIsHTML){ // Try to shortcut find operations when possible (e.g., not under DocumentFragment)
	if(nodeType !== 11 && (match = rquickExpr.exec(selector))){ // Speed-up: Sizzle("#ID")
	if(m = match[1]){if(nodeType === 9){elem = context.getElementById(m); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document (jQuery #6963)
	if(elem && elem.parentNode){ // Handle the case where IE, Opera, and Webkit return items
	// by name instead of ID
	if(elem.id === m){results.push(elem);return results;}}else {return results;}}else { // Context is not a document
	if(context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context,elem) && elem.id === m){results.push(elem);return results;}} // Speed-up: Sizzle("TAG")
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results; // Speed-up: Sizzle(".CLASS")
	}else if((m = match[3]) && support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}} // QSA path
	if(support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))){nid = old = expando;newContext = context;newSelector = nodeType !== 1 && selector; // qSA works strangely on Element-rooted queries
	// We can work around this by specifying an extra ID on the root
	// and working up from there (Thanks to Andrew Dupont for the technique)
	// IE 8 doesn't work on object elements
	if(nodeType === 1 && context.nodeName.toLowerCase() !== "object"){groups = tokenize(selector);if(old = context.getAttribute("id")){nid = old.replace(rescape,"\\$&");}else {context.setAttribute("id",nid);}nid = "[id='" + nid + "'] ";i = groups.length;while(i--) {groups[i] = nid + toSelector(groups[i]);}newContext = rsibling.test(selector) && testContext(context.parentNode) || context;newSelector = groups.join(",");}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError) {}finally {if(!old){context.removeAttribute("id");}}}}} // All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);} /**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){ // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key + " ") > Expr.cacheLength){ // Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key + " "] = value;}return cache;} /**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando] = true;return fn;} /**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return !!fn(div);}catch(e) {return false;}finally { // Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);} // release memory in IE
	div = null;}} /**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--) {Expr.attrHandle[arr[i]] = handler;}} /**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b && a,diff=cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
	if(diff){return diff;} // Check if b follows a
	if(cur){while(cur = cur.nextSibling) {if(cur === b){return -1;}}}return a?1:-1;} /**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name === "input" && elem.type === type;};} /**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return (name === "input" || name === "button") && elem.type === type;};} /**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument = +argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; // Match elements found at the specified indexes
	while(i--) {if(seed[j = matchIndexes[i]]){seed[j] = !(matches[j] = seed[j]);}}});});} /**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context && typeof context.getElementsByTagName !== "undefined" && context;} // Expose support vars for convenience
	support = Sizzle.support = {}; /**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML = Sizzle.isXML = function(elem){ // documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem && (elem.ownerDocument || elem).documentElement;return documentElement?documentElement.nodeName !== "HTML":false;}; /**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument = Sizzle.setDocument = function(node){var hasCompare,parent,doc=node?node.ownerDocument || node:preferredDoc; // If no document and documentElement is available, return
	if(doc === document || doc.nodeType !== 9 || !doc.documentElement){return document;} // Set our document
	document = doc;docElem = doc.documentElement;parent = doc.defaultView; // Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if(parent && parent !== parent.top){ // IE11 does not have attachEvent, so all must suffer
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}} /* Support tests
		---------------------------------------------------------------------- */documentIsHTML = !isXML(doc); /* Attributes
		---------------------------------------------------------------------- */ // Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function(div){div.className = "i";return !div.getAttribute("className");}); /* getElement(s)By*
		---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function(div){div.appendChild(doc.createComment(""));return !div.getElementsByTagName("*").length;}); // Support: IE<9
	support.getElementsByClassName = rnative.test(doc.getElementsByClassName); // Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function(div){docElem.appendChild(div).id = expando;return !doc.getElementsByName || !doc.getElementsByName(expando).length;}); // ID find and filter
	if(support.getById){Expr.find["ID"] = function(id,context){if(typeof context.getElementById !== "undefined" && documentIsHTML){var m=context.getElementById(id); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	return m && m.parentNode?[m]:[];}};Expr.filter["ID"] = function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id") === attrId;};};}else { // Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"] = function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");return node && node.value === attrId;};};} // Tag
	Expr.find["TAG"] = support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName !== "undefined"){return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag); // Filter out possible comments
	if(tag === "*"){while(elem = results[i++]) {if(elem.nodeType === 1){tmp.push(elem);}}return tmp;}return results;}; // Class
	Expr.find["CLASS"] = support.getElementsByClassName && function(className,context){if(documentIsHTML){return context.getElementsByClassName(className);}}; /* QSA/matchesSelector
		---------------------------------------------------------------------- */ // QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];if(support.qsa = rnative.test(doc.querySelectorAll)){ // Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){ // Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");} // Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");} // Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
	if(!div.querySelectorAll("[id~=" + expando + "-]").length){rbuggyQSA.push("~=");} // Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");} // Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#" + expando + "+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){ // Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D"); // Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");} // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} // Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)){assert(function(div){ // Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch = matches.call(div,"div"); // This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")); /* Contains
		---------------------------------------------------------------------- */hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType === 9?a.documentElement:a,bup=b && b.parentNode;return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains?adown.contains(bup):a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));}:function(a,b){if(b){while(b = b.parentNode) {if(b === a){return true;}}}return false;}; /* Sorting
		---------------------------------------------------------------------- */ // Document order sorting
	sortOrder = hasCompare?function(a,b){ // Flag for duplicate removal
	if(a === b){hasDuplicate = true;return 0;} // Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition - !b.compareDocumentPosition;if(compare){return compare;} // Calculate position if both inputs belong to the same document
	compare = (a.ownerDocument || a) === (b.ownerDocument || b)?a.compareDocumentPosition(b): // Otherwise we know they are disconnected
	1; // Disconnected nodes
	if(compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare){ // Choose the first element that is related to our preferred document
	if(a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc,a)){return -1;}if(b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc,b)){return 1;} // Maintain original order
	return sortInput?indexOf(sortInput,a) - indexOf(sortInput,b):0;}return compare & 4?-1:1;}:function(a,b){ // Exit early if the nodes are identical
	if(a === b){hasDuplicate = true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; // Parentless nodes are either documents or disconnected
	if(!aup || !bup){return a === doc?-1:b === doc?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a) - indexOf(sortInput,b):0; // If the nodes are siblings, we can do a quick check
	}else if(aup === bup){return siblingCheck(a,b);} // Otherwise we need full lists of their ancestors for comparison
	cur = a;while(cur = cur.parentNode) {ap.unshift(cur);}cur = b;while(cur = cur.parentNode) {bp.unshift(cur);} // Walk down the tree looking for a discrepancy
	while(ap[i] === bp[i]) {i++;}return i? // Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]): // Otherwise nodes in our document sort first
	ap[i] === preferredDoc?-1:bp[i] === preferredDoc?1:0;};return doc;};Sizzle.matches = function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector = function(elem,expr){ // Set document vars if needed
	if((elem.ownerDocument || elem) !== document){setDocument(elem);} // Make sure that attribute selectors are quoted
	expr = expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr); // IE 9's matchesSelector returns false on disconnected nodes
	if(ret || support.disconnectedMatch ||  // As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document && elem.document.nodeType !== 11){return ret;}}catch(e) {}}return Sizzle(expr,document,null,[elem]).length > 0;};Sizzle.contains = function(context,elem){ // Set document vars if needed
	if((context.ownerDocument || context) !== document){setDocument(context);}return contains(context,elem);};Sizzle.attr = function(elem,name){ // Set document vars if needed
	if((elem.ownerDocument || elem) !== document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn && hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val !== undefined?val:support.attributes || !documentIsHTML?elem.getAttribute(name):(val = elem.getAttributeNode(name)) && val.specified?val.value:null;};Sizzle.error = function(msg){throw new Error("Syntax error, unrecognized expression: " + msg);}; /**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort = function(results){var elem,duplicates=[],j=0,i=0; // Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;sortInput = !support.sortStable && results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem = results[i++]) {if(elem === results[i]){j = duplicates.push(i);}}while(j--) {results.splice(duplicates[j],1);}} // Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;return results;}; /**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText = Sizzle.getText = function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ // If no nodeType, this is expected to be an array
	while(node = elem[i++]) { // Do not traverse comment nodes
	ret += getText(node);}}else if(nodeType === 1 || nodeType === 9 || nodeType === 11){ // Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent === "string"){return elem.textContent;}else { // Traverse its children
	for(elem = elem.firstChild;elem;elem = elem.nextSibling) {ret += getText(elem);}}}else if(nodeType === 3 || nodeType === 4){return elem.nodeValue;} // Do not include comment or processing instruction nodes
	return ret;};Expr = Sizzle.selectors = { // Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1] = match[1].replace(runescape,funescape); // Move the given value to match[3] whether quoted or unquoted
	match[3] = (match[3] || match[4] || match[5] || "").replace(runescape,funescape);if(match[2] === "~="){match[3] = " " + match[3] + " ";}return match.slice(0,4);},"CHILD":function CHILD(match){ /* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1] = match[1].toLowerCase();if(match[1].slice(0,3) === "nth"){ // nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);} // numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4] = +(match[4]?match[5] + (match[6] || 1):2 * (match[3] === "even" || match[3] === "odd"));match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6] && match[2];if(matchExpr["CHILD"].test(match[0])){return null;} // Accept quoted arguments as-is
	if(match[3]){match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
	}else if(unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
	excess = tokenize(unquoted,true)) && ( // advance to the next closing parenthesis
	excess = unquoted.indexOf(")",unquoted.length - excess) - unquoted.length)){ // excess is a negative index
	match[0] = match[0].slice(0,excess);match[2] = unquoted.slice(0,excess);} // Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector === "*"?function(){return true;}:function(elem){return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className + " "];return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className,function(elem){return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result == null){return operator === "!=";}if(!operator){return true;}result += "";return operator === "="?result === check:operator === "!="?result !== check:operator === "^="?check && result.indexOf(check) === 0:operator === "*="?check && result.indexOf(check) > -1:operator === "$="?check && result.slice(-check.length) === check:operator === "~="?(" " + result.replace(rwhitespace," ") + " ").indexOf(check) > -1:operator === "|="?result === check || result.slice(0,check.length + 1) === check + "-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3) !== "nth",forward=type.slice(-4) !== "last",ofType=what === "of-type";return first === 1 && last === 0? // Shortcut for :nth-*(n)
	function(elem){return !!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple !== forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType && elem.nodeName.toLowerCase(),useCache=!xml && !ofType;if(parent){ // :(first|last|only)-(child|of-type)
	if(simple){while(dir) {node = elem;while(node = node[dir]) {if(ofType?node.nodeName.toLowerCase() === name:node.nodeType === 1){return false;}} // Reverse direction for :only-* (if we haven't yet done so)
	start = dir = type === "only" && !start && "nextSibling";}return true;}start = [forward?parent.firstChild:parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
	if(forward && useCache){ // Seek `elem` from a previously-cached index
	outerCache = parent[expando] || (parent[expando] = {});cache = outerCache[type] || [];nodeIndex = cache[0] === dirruns && cache[1];diff = cache[0] === dirruns && cache[2];node = nodeIndex && parent.childNodes[nodeIndex];while(node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
	diff = nodeIndex = 0) || start.pop()) { // When found, cache indexes on `parent` and break
	if(node.nodeType === 1 && ++diff && node === elem){outerCache[type] = [dirruns,nodeIndex,diff];break;}} // Use previously-cached element index if available
	}else if(useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns){diff = cache[1]; // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
	}else { // Use the same loop as above to seek `elem` from the start
	while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {if((ofType?node.nodeName.toLowerCase() === name:node.nodeType === 1) && ++diff){ // Cache the index of each encountered element
	if(useCache){(node[expando] || (node[expando] = {}))[type] = [dirruns,diff];}if(node === elem){break;}}}} // Incorporate the offset, then check against cycle size
	diff -= last;return diff === first || diff % first === 0 && diff / first >= 0;}};},"PSEUDO":function PSEUDO(pseudo,argument){ // pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);} // But maintain support for old signatures
	if(fn.length > 1){args = [pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--) {idx = indexOf(seed,matched[i]);seed[idx] = !(matches[idx] = matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{ // Potentially complex pseudos
	"not":markFunction(function(selector){ // Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length; // Match elements unmatched by `matcher`
	while(i--) {if(elem = unmatched[i]){seed[i] = !(matches[i] = elem);}}}):function(elem,context,xml){input[0] = elem;matcher(input,null,xml,results); // Don't keep the element (issue #299)
	input[0] = null;return !results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length > 0;};}),"contains":markFunction(function(text){text = text.replace(runescape,funescape);return function(elem){return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;};}), // "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){ // lang value must be a valid identifier
	if(!ridentifier.test(lang || "")){Sizzle.error("unsupported lang: " + lang);}lang = lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do {if(elemLang = documentIsHTML?elem.lang:elem.getAttribute("xml:lang") || elem.getAttribute("lang")){elemLang = elemLang.toLowerCase();return elemLang === lang || elemLang.indexOf(lang + "-") === 0;}}while((elem = elem.parentNode) && elem.nodeType === 1);return false;};}), // Miscellaneous
	"target":function target(elem){var hash=window.location && window.location.hash;return hash && hash.slice(1) === elem.id;},"root":function root(elem){return elem === docElem;},"focus":function focus(elem){return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);}, // Boolean properties
	"enabled":function enabled(elem){return elem.disabled === false;},"disabled":function disabled(elem){return elem.disabled === true;},"checked":function checked(elem){ // In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;},"selected":function selected(elem){ // Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected === true;}, // Contents
	"empty":function empty(elem){ // http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem = elem.firstChild;elem;elem = elem.nextSibling) {if(elem.nodeType < 6){return false;}}return true;},"parent":function parent(elem){return !Expr.pseudos["empty"](elem);}, // Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name === "input" && elem.type === "button" || name === "button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");}, // Position-in-collection
	"first":createPositionalPseudo(function(){return [0];}),"last":createPositionalPseudo(function(matchIndexes,length){return [length - 1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return [argument < 0?argument + length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i < length;i += 2) {matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i < length;i += 2) {matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument < 0?argument + length:argument;for(;--i >= 0;) {matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument < 0?argument + length:argument;for(;++i < length;) {matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos
	for(i in {radio:true,checkbox:true,file:true,password:true,image:true}) {Expr.pseudos[i] = createInputPseudo(i);}for(i in {submit:true,reset:true}) {Expr.pseudos[i] = createButtonPseudo(i);} // Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype = Expr.filters = Expr.pseudos;Expr.setFilters = new setFilters();tokenize = Sizzle.tokenize = function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector + " "];if(cached){return parseOnly?0:cached.slice(0);}soFar = selector;groups = [];preFilters = Expr.preFilter;while(soFar) { // Comma and first run
	if(!matched || (match = rcomma.exec(soFar))){if(match){ // Don't consume trailing commas as valid
	soFar = soFar.slice(match[0].length) || soFar;}groups.push(tokens = []);}matched = false; // Combinators
	if(match = rcombinators.exec(soFar)){matched = match.shift();tokens.push({value:matched, // Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar = soFar.slice(matched.length);} // Filters
	for(type in Expr.filter) {if((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))){matched = match.shift();tokens.push({value:matched,type:type,matches:match});soFar = soFar.slice(matched.length);}}if(!matched){break;}} // Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector): // Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i < len;i++) {selector += tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base && dir === "parentNode",doneName=done++;return combinator.first? // Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){return matcher(elem,context,xml);}}}: // Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
	if(xml){while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else {while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){outerCache = elem[expando] || (elem[expando] = {});if((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName){ // Assign to newCache so results back-propagate to previous elements
	return newCache[2] = oldCache[2];}else { // Reuse newcache so results back-propagate to previous elements
	outerCache[dir] = newCache; // A match means we're done; a fail means we have to keep checking
	if(newCache[2] = matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length > 1?function(elem,context,xml){var i=matchers.length;while(i--) {if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i < len;i++) {Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map != null;for(;i < len;i++) {if(elem = unmatched[i]){if(!filter || filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter && !postFilter[expando]){postFilter = setMatcher(postFilter);}if(postFinder && !postFinder[expando]){postFinder = setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, // Get initial elements from seed or context
	elems=seed || multipleContexts(selector || "*",context.nodeType?[context]:context,[]), // Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter && (seed || !selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder || (seed?preFilter:preexisting || postFilter)? // ...intermediate processing is necessary
	[]: // ...otherwise use results directly
	results:matcherIn; // Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);} // Apply postFilter
	if(postFilter){temp = condense(matcherOut,postMap);postFilter(temp,[],context,xml); // Un-match failing elements by moving them back to matcherIn
	i = temp.length;while(i--) {if(elem = temp[i]){matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);}}}if(seed){if(postFinder || preFilter){if(postFinder){ // Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp = [];i = matcherOut.length;while(i--) {if(elem = matcherOut[i]){ // Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i] = elem);}}postFinder(null,matcherOut = [],temp,xml);} // Move matched elements from seed to results to keep them synchronized
	i = matcherOut.length;while(i--) {if((elem = matcherOut[i]) && (temp = postFinder?indexOf(seed,elem):preMap[i]) > -1){seed[temp] = !(results[temp] = elem);}}} // Add elements to results, through postFinder if defined
	}else {matcherOut = condense(matcherOut === results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else {push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative || Expr.relative[" "],i=leadingRelative?1:0, // The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem === checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem) > -1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml)); // Avoid hanging onto element (issue #299)
	checkContext = null;return ret;}];for(;i < len;i++) {if(matcher = Expr.relative[tokens[i].type]){matchers = [addCombinator(elementMatcher(matchers),matcher)];}else {matcher = Expr.filter[tokens[i].type].apply(null,tokens[i].matches); // Return special upon seeing a positional matcher
	if(matcher[expando]){ // Find the next relative operator (if any) for proper handling
	j = ++i;for(;j < len;j++) {if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i > 1 && elementMatcher(matchers),i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i - 1).concat({value:tokens[i - 2].type === " "?"*":""})).replace(rtrim,"$1"),matcher,i < j && matcherFromTokens(tokens.slice(i,j)),j < len && matcherFromTokens(tokens = tokens.slice(j)),j < len && toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length > 0,byElement=elementMatchers.length > 0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed && [],setMatched=[],contextBackup=outermostContext, // We must always have either seed elements or outermost context
	elems=seed || byElement && Expr.find["TAG"]("*",outermost), // Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns += contextBackup == null?1:Math.random() || 0.1,len=elems.length;if(outermost){outermostContext = context !== document && context;} // Add elements passing elementMatchers directly to results
	// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i !== len && (elem = elems[i]) != null;i++) {if(byElement && elem){j = 0;while(matcher = elementMatchers[j++]) {if(matcher(elem,context,xml)){results.push(elem);break;}}if(outermost){dirruns = dirrunsUnique;}} // Track unmatched elements for set filters
	if(bySet){ // They will have gone through all possible matchers
	if(elem = !matcher && elem){matchedCount--;} // Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}} // Apply set filters to unmatched elements
	matchedCount += i;if(bySet && i !== matchedCount){j = 0;while(matcher = setMatchers[j++]) {matcher(unmatched,setMatched,context,xml);}if(seed){ // Reintegrate element matches to eliminate the need for sorting
	if(matchedCount > 0){while(i--) {if(!(unmatched[i] || setMatched[i])){setMatched[i] = pop.call(results);}}} // Discard index placeholder values to get only actual matches
	setMatched = condense(setMatched);} // Add matches to results
	push.apply(results,setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1){Sizzle.uniqueSort(results);}} // Override manipulation of globals by nested matchers
	if(outermost){dirruns = dirrunsUnique;outermostContext = contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile = Sizzle.compile = function(selector,match /* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector + " "];if(!cached){ // Generate a function of recursive functions that can be used to check each element
	if(!match){match = tokenize(selector);}i = match.length;while(i--) {cached = matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else {elementMatchers.push(cached);}} // Cache the compiled function
	cached = compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)); // Save selector and tokenization
	cached.selector = selector;}return cached;}; /**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select = Sizzle.select = function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector === "function" && selector,match=!seed && tokenize(selector = compiled.selector || selector);results = results || []; // Try to minimize operations if there is no seed and only one group
	if(match.length === 1){ // Take a shortcut and set the context if the root selector is an ID
	tokens = match[0] = match[0].slice(0);if(tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]){context = (Expr.find["ID"](token.matches[0].replace(runescape,funescape),context) || [])[0];if(!context){return results; // Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context = context.parentNode;}selector = selector.slice(tokens.shift().value.length);} // Fetch a seed set for right-to-left matching
	i = matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--) {token = tokens[i]; // Abort if we hit a combinator
	if(Expr.relative[type = token.type]){break;}if(find = Expr.find[type]){ // Search, expanding context for leading sibling combinators
	if(seed = find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)){ // If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector = seed.length && toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}} // Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled || compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector) && testContext(context.parentNode) || context);return results;}; // One-time assignments
	// Sort stability
	support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate; // Initialize against the default document
	setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function(div1){ // Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div")) & 1;}); // Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML = "<a href='#'></a>";return div.firstChild.getAttribute("href") === "#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase() === "type"?1:2);}});} // Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes || !assert(function(div){div.innerHTML = "<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value") === "";})){addHandle("value",function(elem,name,isXML){if(!isXML && elem.nodeName.toLowerCase() === "input"){return elem.defaultValue;}});} // Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled") == null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name] === true?name.toLowerCase():(val = elem.getAttributeNode(name)) && val.specified?val.value:null;}});}return Sizzle;})(window);jQuery.find = Sizzle;jQuery.expr = Sizzle.selectors;jQuery.expr[":"] = jQuery.expr.pseudos;jQuery.unique = Sizzle.uniqueSort;jQuery.text = Sizzle.getText;jQuery.isXMLDoc = Sizzle.isXML;jQuery.contains = Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/; // Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){ /* jshint -W018 */return !!qualifier.call(elem,i,elem) !== not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem === qualifier !== not;});}if(typeof qualifier === "string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier = jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return jQuery.inArray(elem,qualifier) >= 0 !== not;});}jQuery.filter = function(expr,elems,not){var elem=elems[0];if(not){expr = ":not(" + expr + ")";}return elems.length === 1 && elem.nodeType === 1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType === 1;}));};jQuery.fn.extend({find:function find(selector){var i,ret=[],self=this,len=self.length;if(typeof selector !== "string"){return this.pushStack(jQuery(selector).filter(function(){for(i = 0;i < len;i++) {if(jQuery.contains(self[i],this)){return true;}}}));}for(i = 0;i < len;i++) {jQuery.find(selector,self[i],ret);} // Needed because $( selector, context ) becomes $( context ).find( selector )
	ret = this.pushStack(len > 1?jQuery.unique(ret):ret);ret.selector = this.selector?this.selector + " " + selector:selector;return ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector || [],false));},not:function not(selector){return this.pushStack(winnow(this,selector || [],true));},is:function is(selector){return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector === "string" && rneedsContext.test(selector)?jQuery(selector):selector || [],false).length;}}); // Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery, // Use the correct document accordingly with window argument (sandbox)
	document=window.document, // A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init = function(selector,context){var match,elem; // HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;} // Handle HTML strings
	if(typeof selector === "string"){if(selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3){ // Assume that strings that start and end with <> are HTML and skip the regex check
	match = [null,selector,null];}else {match = rquickExpr.exec(selector);} // Match html or make sure no context is specified for #id
	if(match && (match[1] || !context)){ // HANDLE: $(html) -> $(array)
	if(match[1]){context = context instanceof jQuery?context[0]:context; // scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context && context.nodeType?context.ownerDocument || context:document,true)); // HANDLE: $(html, props)
	if(rsingleTag.test(match[1]) && jQuery.isPlainObject(context)){for(match in context) { // Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]); // ...and otherwise set as attributes
	}else {this.attr(match,context[match]);}}}return this; // HANDLE: $(#id)
	}else {elem = document.getElementById(match[2]); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	if(elem && elem.parentNode){ // Handle the case where IE and Opera return items
	// by name instead of ID
	if(elem.id !== match[2]){return rootjQuery.find(selector);} // Otherwise, we inject the element directly into the jQuery object
	this.length = 1;this[0] = elem;}this.context = document;this.selector = selector;return this;} // HANDLE: $(expr, $(...))
	}else if(!context || context.jquery){return (context || rootjQuery).find(selector); // HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else {return this.constructor(context).find(selector);} // HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context = this[0] = selector;this.length = 1;return this; // HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready !== "undefined"?rootjQuery.ready(selector): // Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector !== undefined){this.selector = selector.selector;this.context = selector.context;}return jQuery.makeArray(selector,this);}; // Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn; // Initialize central reference
	rootjQuery = jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, // methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.extend({dir:function dir(elem,_dir,until){var matched=[],cur=elem[_dir];while(cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {if(cur.nodeType === 1){matched.push(cur);}cur = cur[_dir];}return matched;},sibling:function sibling(n,elem){var r=[];for(;n;n = n.nextSibling) {if(n.nodeType === 1 && n !== elem){r.push(n);}}return r;}});jQuery.fn.extend({has:function has(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i = 0;i < len;i++) {if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors) || typeof selectors !== "string"?jQuery(selectors,context || this.context):0;for(;i < l;i++) {for(cur = this[i];cur && cur !== context;cur = cur.parentNode) { // Always skip document fragments
	if(cur.nodeType < 11 && (pos?pos.index(cur) > -1: // Don't pass non-elements to Sizzle
	cur.nodeType === 1 && jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length > 1?jQuery.unique(matched):matched);}, // Determine the position of an element within
	// the matched set of elements
	index:function index(elem){ // No argument, return index in parent
	if(!elem){return this[0] && this[0].parentNode?this.first().prevAll().length:-1;} // index in selector
	if(typeof elem === "string"){return jQuery.inArray(this[0],jQuery(elem));} // Locate the position of the desired element
	return jQuery.inArray( // If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem,this);},add:function add(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector == null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){do {cur = cur[dir];}while(cur && cur.nodeType !== 1);return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent && parent.nodeType !== 11?parent:null;},parents:function parents(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function prevAll(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function siblings(elem){return jQuery.sibling((elem.parentNode || {}).firstChild,elem);},children:function children(elem){return jQuery.sibling(elem.firstChild);},contents:function contents(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument || elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name] = function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5) !== "Until"){selector = until;}if(selector && typeof selector === "string"){ret = jQuery.filter(selector,ret);}if(this.length > 1){ // Remove duplicates
	if(!guaranteedUnique[name]){ret = jQuery.unique(ret);} // Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){ret = ret.reverse();}}return this.pushStack(ret);};});var rnotwhite=/\S+/g; // String to Object options format cache
	var optionsCache={}; // Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options){var object=optionsCache[options] = {};jQuery.each(options.match(rnotwhite) || [],function(_,flag){object[flag] = true;});return object;} /*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks = function(options){ // Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string"?optionsCache[options] || createOptions(options):jQuery.extend({},options);var  // Flag to know if list is currently firing
	firing, // Last fire value (for non-forgettable lists)
	memory, // Flag to know if list was already fired
	_fired, // End of the loop when firing
	firingLength, // Index of currently firing callback (modified by remove if needed)
	firingIndex, // First callback to fire (used internally by add and fireWith)
	firingStart, // Actual callback list
	list=[], // Stack of fire calls for repeatable lists
	stack=!options.once && [], // Fire callbacks
	fire=function fire(data){memory = options.memory && data;_fired = true;firingIndex = firingStart || 0;firingStart = 0;firingLength = list.length;firing = true;for(;list && firingIndex < firingLength;firingIndex++) {if(list[firingIndex].apply(data[0],data[1]) === false && options.stopOnFalse){memory = false; // To prevent further calls using add
	break;}}firing = false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list = [];}else {self.disable();}}}, // Actual Callbacks object
	self={ // Add a callback or a collection of callbacks to the list
	add:function add(){if(list){ // First, we save the current length
	var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type === "function"){if(!options.unique || !self.has(arg)){list.push(arg);}}else if(arg && arg.length && type !== "string"){ // Inspect recursively
	add(arg);}});})(arguments); // Do we need to add the callbacks to the
	// current firing batch?
	if(firing){firingLength = list.length; // With memory, if we're not firing then
	// we should call right away
	}else if(memory){firingStart = start;fire(memory);}}return this;}, // Remove a callback from the list
	remove:function remove(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index = jQuery.inArray(arg,list,index)) > -1) {list.splice(index,1); // Handle firing indexes
	if(firing){if(index <= firingLength){firingLength--;}if(index <= firingIndex){firingIndex--;}}}});}return this;}, // Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list) > -1:!!(list && list.length);}, // Remove all callbacks from the list
	empty:function empty(){list = [];firingLength = 0;return this;}, // Have the list do nothing anymore
	disable:function disable(){list = stack = memory = undefined;return this;}, // Is it disabled?
	disabled:function disabled(){return !list;}, // Lock the list in its current state
	lock:function lock(){stack = undefined;if(!memory){self.disable();}return this;}, // Is it locked?
	locked:function locked(){return !stack;}, // Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(list && (!_fired || stack)){args = args || [];args = [context,args.slice?args.slice():args];if(firing){stack.push(args);}else {fire(args);}}return this;}, // Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;}, // To know if the callbacks have already been called at least once
	fired:function fired(){return !!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[ // action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then() /* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i]) && fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn && fn.apply(this,arguments);if(returned && jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else {newDefer[tuple[0] + "With"](this === _promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns = null;}).promise();}, // Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj != null?jQuery.extend(obj,_promise):_promise;}},deferred={}; // Keep pipe for back-compat
	_promise.pipe = _promise.then; // Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; // promise[ done | fail | progress ] = list.add
	_promise[tuple[1]] = list.add; // Handle state
	if(stateString){list.add(function(){ // state = [ resolved | rejected ]
	_state = stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i ^ 1][2].disable,tuples[2][2].lock);} // deferred[ resolve | reject | notify ]
	deferred[tuple[0]] = function(){deferred[tuple[0] + "With"](this === deferred?_promise:this,arguments);return this;};deferred[tuple[0] + "With"] = list.fireWith;}); // Make the deferred a promise
	_promise.promise(deferred); // Call given func if any
	if(func){func.call(deferred,deferred);} // All done!
	return deferred;}, // Deferred helper
	when:function when(subordinate /* , ..., subordinateN */){var i=0,resolveValues=_slice.call(arguments),length=resolveValues.length, // the count of uncompleted subordinates
	remaining=length !== 1 || subordinate && jQuery.isFunction(subordinate.promise)?length:0, // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining === 1?subordinate:jQuery.Deferred(), // Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i] = this;values[i] = arguments.length > 1?_slice.call(arguments):value;if(values === progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; // add listeners to Deferred subordinates; treat others as resolved
	if(length > 1){progressValues = new Array(length);progressContexts = new Array(length);resolveContexts = new Array(length);for(;i < length;i++) {if(resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else {--remaining;}}} // if we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}}); // The deferred used on DOM ready
	var readyList;jQuery.fn.ready = function(fn){ // Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
	isReady:false, // A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1, // Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, // Handle when the DOM is ready
	ready:function ready(wait){ // Abort if there are pending holds or we're already ready
	if(wait === true?--jQuery.readyWait:jQuery.isReady){return;} // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
	if(!document.body){return setTimeout(jQuery.ready);} // Remember that the DOM is ready
	jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait !== true && --jQuery.readyWait > 0){return;} // If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]); // Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}}); /**
	 * Clean-up method for dom ready events
	 */function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else {document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}} /**
	 * The ready event handler and self cleanup method
	 */function completed(){ // readyState === "complete" is good enough for us to call the dom ready in oldIE
	if(document.addEventListener || event.type === "load" || document.readyState === "complete"){detach();jQuery.ready();}}jQuery.ready.promise = function(obj){if(!readyList){readyList = jQuery.Deferred(); // Catch cases where $(document).ready() is called after the browser event has already occurred.
	// we once tried to use readyState "interactive" here, but it caused issues like the one
	// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
	if(document.readyState === "complete"){ // Handle it asynchronously to allow scripts the opportunity to delay ready
	setTimeout(jQuery.ready); // Standards-based browsers support DOMContentLoaded
	}else if(document.addEventListener){ // Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed,false); // A fallback to window.onload, that will always work
	window.addEventListener("load",completed,false); // If IE event model is used
	}else { // Ensure firing before onload, maybe late but safe also for iframes
	document.attachEvent("onreadystatechange",completed); // A fallback to window.onload, that will always work
	window.attachEvent("onload",completed); // If IE and not a frame
	// continually check to see if the document is ready
	var top=false;try{top = window.frameElement == null && document.documentElement;}catch(e) {}if(top && top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{ // Use the trick by Diego Perini
	// http://javascript.nwbox.com/IEContentLoaded/
	top.doScroll("left");}catch(e) {return setTimeout(doScrollCheck,50);} // detach all dom ready events
	detach(); // and execute any waiting functions
	jQuery.ready();}})();}}}return readyList.promise(obj);};var strundefined=typeof undefined; // Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;for(i in jQuery(support)) {break;}support.ownLast = i !== "0"; // Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false; // Execute ASAP in case we need to set body.style.zoom
	jQuery(function(){ // Minified: var a,b,c,d
	var val,div,body,container;body = document.getElementsByTagName("body")[0];if(!body || !body.style){ // Return for frameset docs that don't have a body
	return;} // Setup
	div = document.createElement("div");container = document.createElement("div");container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom !== strundefined){ // Support: IE<8
	// Check if natively block-level elements act like inline-block
	// elements when setting their display to 'inline' and giving
	// them layout
	div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;if(val){ // Prevent IE 6 from affecting layout for positioned elements #11048
	// Prevent IE from shrinking the body in IE 7 mode #12869
	// Support: IE<8
	body.style.zoom = 1;}}body.removeChild(container);});(function(){var div=document.createElement("div"); // Execute the test only if not already executed in another module.
	if(support.deleteExpando == null){ // Support: IE<9
	support.deleteExpando = true;try{delete div.test;}catch(e) {support.deleteExpando = false;}} // Null elements to avoid leaks in IE.
	div = null;})(); /**
	 * Determines whether an object can have data
	 */jQuery.acceptData = function(elem){var noData=jQuery.noData[(elem.nodeName + " ").toLowerCase()],nodeType=+elem.nodeType || 1; // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9?false: // Nodes accept data unless otherwise specified; rejection can be conditional
	!noData || noData !== true && elem.getAttribute("classid") === noData;};var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){ // If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data === undefined && elem.nodeType === 1){var name="data-" + key.replace(rmultiDash,"-$1").toLowerCase();data = elem.getAttribute(name);if(typeof data === "string"){try{data = data === "true"?true:data === "false"?false:data === "null"?null: // Only convert to a number if it doesn't change the string
	+data + "" === data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e) {} // Make sure we set the data so it isn't changed later
	jQuery.data(elem,key,data);}else {data = undefined;}}return data;} // checks a cache object for emptiness
	function isEmptyDataObject(obj){var name;for(name in obj) { // if the public data object is empty, the private is still empty
	if(name === "data" && jQuery.isEmptyObject(obj[name])){continue;}if(name !== "toJSON"){return false;}}return true;}function internalData(elem,name,data,pvt /* Internal Use Only */){if(!jQuery.acceptData(elem)){return;}var ret,thisCache,internalKey=jQuery.expando, // We have to handle DOM nodes and JS objects differently because IE6-7
	// can't GC object references properly across the DOM-JS boundary
	isNode=elem.nodeType, // Only DOM nodes need the global jQuery cache; JS object data is
	// attached directly to the object so GC can occur automatically
	cache=isNode?jQuery.cache:elem, // Only defining an ID for JS objects if its cache already exists allows
	// the code to shortcut on the same path as a DOM node with no cache
	id=isNode?elem[internalKey]:elem[internalKey] && internalKey; // Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string"){return;}if(!id){ // Only DOM nodes need a new unique ID for each element since their data
	// ends up in the global cache
	if(isNode){id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;}else {id = internalKey;}}if(!cache[id]){ // Avoid exposing jQuery metadata on plain JS objects when the object
	// is serialized using JSON.stringify
	cache[id] = isNode?{}:{toJSON:jQuery.noop};} // An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if(typeof name === "object" || typeof name === "function"){if(pvt){cache[id] = jQuery.extend(cache[id],name);}else {cache[id].data = jQuery.extend(cache[id].data,name);}}thisCache = cache[id]; // jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if(!pvt){if(!thisCache.data){thisCache.data = {};}thisCache = thisCache.data;}if(data !== undefined){thisCache[jQuery.camelCase(name)] = data;} // Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if(typeof name === "string"){ // First Try to find as-is property data
	ret = thisCache[name]; // Test for null|undefined property data
	if(ret == null){ // Try to find the camelCased property
	ret = thisCache[jQuery.camelCase(name)];}}else {ret = thisCache;}return ret;}function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}var thisCache,i,isNode=elem.nodeType, // See jQuery.data for more information
	cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando; // If there is already no cache entry for this object, there is no
	// purpose in continuing
	if(!cache[id]){return;}if(name){thisCache = pvt?cache[id]:cache[id].data;if(thisCache){ // Support array or space separated string names for data keys
	if(!jQuery.isArray(name)){ // try the string as a key before any manipulation
	if(name in thisCache){name = [name];}else { // split the camel cased version by spaces unless a key with the spaces exists
	name = jQuery.camelCase(name);if(name in thisCache){name = [name];}else {name = name.split(" ");}}}else { // If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name = name.concat(jQuery.map(name,jQuery.camelCase));}i = name.length;while(i--) {delete thisCache[name[i]];} // If there is no data left in the cache, we want to continue
	// and let the cache object itself get destroyed
	if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}} // See jQuery.data for more information
	if(!pvt){delete cache[id].data; // Don't destroy the parent cache unless the internal data object
	// had been the only thing left in it
	if(!isEmptyDataObject(cache[id])){return;}} // Destroy the cache
	if(isNode){jQuery.cleanData([elem],true); // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */}else if(support.deleteExpando || cache != cache.window){ /* jshint eqeqeq: true */delete cache[id]; // When all else fails, null
	}else {cache[id] = null;}}jQuery.extend({cache:{}, // The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData:{"applet ":true,"embed ":true, // ...but Flash objects (which have this classid) *can* handle expandos
	"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function hasData(elem){elem = elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return !!elem && !isEmptyDataObject(elem);},data:function data(elem,name,_data){return internalData(elem,name,_data);},removeData:function removeData(elem,name){return internalRemoveData(elem,name);}, // For internal use only.
	_data:function _data(elem,name,data){return internalData(elem,name,data,true);},_removeData:function _removeData(elem,name){return internalRemoveData(elem,name,true);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem && elem.attributes; // Special expections of .data basically thwart jQuery.access,
	// so implement the relevant behavior ourselves
	// Gets all values
	if(key === undefined){if(this.length){data = jQuery.data(elem);if(elem.nodeType === 1 && !jQuery._data(elem,"parsedAttrs")){i = attrs.length;while(i--) { // Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name = attrs[i].name;if(name.indexOf("data-") === 0){name = jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}jQuery._data(elem,"parsedAttrs",true);}}return data;} // Sets multiple values
	if(typeof key === "object"){return this.each(function(){jQuery.data(this,key);});}return arguments.length > 1? // Sets one value
	this.each(function(){jQuery.data(this,key,value);}): // Gets one value
	// Try to fetch any internally stored data first
	elem?dataAttr(elem,key,jQuery.data(elem,key)):undefined;},removeData:function removeData(key){return this.each(function(){jQuery.removeData(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type = (type || "fx") + "queue";queue = jQuery._data(elem,type); // Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue || jQuery.isArray(data)){queue = jQuery._data(elem,type,jQuery.makeArray(data));}else {queue.push(data);}}return queue || [];}},dequeue:function dequeue(elem,type){type = type || "fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);}; // If the fx queue is dequeued, always remove the progress sentinel
	if(fn === "inprogress"){fn = queue.shift();startLength--;}if(fn){ // Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type === "fx"){queue.unshift("inprogress");} // clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength && hooks){hooks.empty.fire();}}, // not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks:function _queueHooks(elem,type){var key=type + "queueHooks";return jQuery._data(elem,key) || jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type + "queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type !== "string"){data = type;type = "fx";setter--;}if(arguments.length < setter){return jQuery.queue(this[0],type);}return data === undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); // ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type === "fx" && queue[0] !== "inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type || "fx",[]);}, // Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type !== "string"){obj = type;type = undefined;}type = type || "fx";while(i--) {tmp = jQuery._data(elements[i],type + "queueHooks");if(tmp && tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function isHidden(elem,el){ // isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;return jQuery.css(elem,"display") === "none" || !jQuery.contains(elem.ownerDocument,elem);}; // Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=jQuery.access = function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key == null; // Sets many values
	if(jQuery.type(key) === "object"){chainable = true;for(i in key) {jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);} // Sets one value
	}else if(value !== undefined){chainable = true;if(!jQuery.isFunction(value)){raw = true;}if(bulk){ // Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn = null; // ...except when executing function values
	}else {bulk = fn;fn = function(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i < length;i++) {fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems: // Gets
	bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;};var rcheckableType=/^(?:checkbox|radio)$/i;(function(){ // Minified: var a,b,c
	var input=document.createElement("input"),div=document.createElement("div"),fragment=document.createDocumentFragment(); // Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; // IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3; // Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName("tbody").length; // Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName("link").length; // Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>"; // Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";input.checked = true;fragment.appendChild(input);support.appendChecked = input.checked; // Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild(div);div.innerHTML = "<input type='radio' checked='checked' name='t'/>"; // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent = false;});div.cloneNode(true).click();} // Execute the test only if not already executed in another module.
	if(support.deleteExpando == null){ // Support: IE<9
	support.deleteExpando = true;try{delete div.test;}catch(e) {support.deleteExpando = false;}}})();(function(){var i,eventName,div=document.createElement("div"); // Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for(i in {submit:true,change:true,focusin:true}) {eventName = "on" + i;if(!(support[i + "Bubbles"] = eventName in window)){ // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
	div.setAttribute(eventName,"t");support[i + "Bubbles"] = div.attributes[eventName].expando === false;}} // Null elements to avoid leaks in IE.
	div = null;})();var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}function returnFalse(){return false;}function safeActiveElement(){try{return document.activeElement;}catch(err) {}} /*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event = {global:{},add:function add(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;} // Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn = handler;handler = handleObjIn.handler;selector = handleObjIn.selector;} // Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid = jQuery.guid++;} // Init the element's event structure and main handler, if this is the first
	if(!(events = elemData.events)){events = elemData.events = {};}if(!(eventHandle = elemData.handle)){eventHandle = elemData.handle = function(e){ // Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;}; // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
	eventHandle.elem = elem;} // Handle multiple events separated by a space
	types = (types || "").match(rnotwhite) || [""];t = types.length;while(t--) {tmp = rtypenamespace.exec(types[t]) || [];type = origType = tmp[1];namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;} // If event changes its type, use the special event handlers for the changed type
	special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type
	type = (selector?special.delegateType:special.bindType) || type; // Update special based on newly reset type
	special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers
	handleObj = jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector && jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); // Init the event handler queue if we're the first
	if(!(handlers = events[type])){handlers = events[type] = [];handlers.delegateCount = 0; // Only use addEventListener/attachEvent if the special events handler returns false
	if(!special.setup || special.setup.call(elem,data,namespaces,eventHandle) === false){ // Bind the global event handler to the element
	if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on" + type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid = handler.guid;}} // Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else {handlers.push(handleObj);} // Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type] = true;} // Nullify elem to prevent memory leaks in IE
	elem = null;}, // Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem) && jQuery._data(elem);if(!elemData || !(events = elemData.events)){return;} // Once for each type.namespace in types; type may be omitted
	types = (types || "").match(rnotwhite) || [""];t = types.length;while(t--) {tmp = rtypenamespace.exec(types[t]) || [];type = origType = tmp[1];namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events) {jQuery.event.remove(elem,type + types[t],handler,selector,true);}continue;}special = jQuery.event.special[type] || {};type = (selector?special.delegateType:special.bindType) || type;handlers = events[type] || [];tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events
	origCount = j = handlers.length;while(j--) {handleObj = handlers[j];if((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}} // Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount && !handlers.length){if(!special.teardown || special.teardown.call(elem,namespaces,elemData.handle) === false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}} // Remove the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){delete elemData.handle; // removeData also checks for emptiness and clears the expando if empty
	// so use it instead of delete
	jQuery._removeData(elem,"events");}},trigger:function trigger(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem || document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur = tmp = elem = elem || document; // Don't do events on text and comment nodes
	if(elem.nodeType === 3 || elem.nodeType === 8){return;} // focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type + jQuery.event.triggered)){return;}if(type.indexOf(".") >= 0){ // Namespaced trigger; create a regexp to match event type in handle()
	namespaces = type.split(".");type = namespaces.shift();namespaces.sort();}ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
	event = event[jQuery.expando]?event:new jQuery.Event(type,typeof event === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger = onlyHandlers?2:3;event.namespace = namespaces.join(".");event.namespace_re = event.namespace?new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"):null; // Clean up the event in case it is being reused
	event.result = undefined;if(!event.target){event.target = elem;} // Clone any incoming data and prepend the event, creating the handler arg list
	data = data == null?[event]:jQuery.makeArray(data,[event]); // Allow special events to draw outside the lines
	special = jQuery.event.special[type] || {};if(!onlyHandlers && special.trigger && special.trigger.apply(elem,data) === false){return;} // Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)){bubbleType = special.delegateType || type;if(!rfocusMorph.test(bubbleType + type)){cur = cur.parentNode;}for(;cur;cur = cur.parentNode) {eventPath.push(cur);tmp = cur;} // Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp === (elem.ownerDocument || document)){eventPath.push(tmp.defaultView || tmp.parentWindow || window);}} // Fire handlers on the event path
	i = 0;while((cur = eventPath[i++]) && !event.isPropagationStopped()) {event.type = i > 1?bubbleType:special.bindType || type; // jQuery handler
	handle = (jQuery._data(cur,"events") || {})[event.type] && jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);} // Native handler
	handle = ontype && cur[ontype];if(handle && handle.apply && jQuery.acceptData(cur)){event.result = handle.apply(cur,data);if(event.result === false){event.preventDefault();}}}event.type = type; // If nobody prevented the default action, do it now
	if(!onlyHandlers && !event.isDefaultPrevented()){if((!special._default || special._default.apply(eventPath.pop(),data) === false) && jQuery.acceptData(elem)){ // Call a native DOM method on the target with the same name name as the event.
	// Can't use an .isFunction() check here because IE6/7 fails that test.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype && elem[type] && !jQuery.isWindow(elem)){ // Don't re-trigger an onFOO event when we call its FOO() method
	tmp = elem[ontype];if(tmp){elem[ontype] = null;} // Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered = type;try{elem[type]();}catch(e) { // IE<9 dies on focus/blur to hidden element (#1486,#12518)
	// only reproducible on winXP IE8 native, not IE9 in IE8 mode
	}jQuery.event.triggered = undefined;if(tmp){elem[ontype] = tmp;}}}}return event.result;},dispatch:function dispatch(event){ // Make a writable jQuery.Event from the native event object
	event = jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=_slice.call(arguments),handlers=(jQuery._data(this,"events") || {})[event.type] || [],special=jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0] = event;event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch && special.preDispatch.call(this,event) === false){return;} // Determine handlers
	handlerQueue = jQuery.event.handlers.call(this,event,handlers); // Run delegates first; they may want to stop propagation beneath us
	i = 0;while((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {event.currentTarget = matched.elem;j = 0;while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) { // Triggered event must either 1) have no namespace, or
	// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
	if(!event.namespace_re || event.namespace_re.test(handleObj.namespace)){event.handleObj = handleObj;event.data = handleObj.data;ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem,args);if(ret !== undefined){if((event.result = ret) === false){event.preventDefault();event.stopPropagation();}}}}} // Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target; // Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	// Avoid non-left-click bubbling in Firefox (#3861)
	if(delegateCount && cur.nodeType && (!event.button || event.type !== "click")){ /* jshint eqeqeq: false */for(;cur != this;cur = cur.parentNode || this) { /* jshint eqeqeq: true */ // Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")){matches = [];for(i = 0;i < delegateCount;i++) {handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)
	sel = handleObj.selector + " ";if(matches[sel] === undefined){matches[sel] = handleObj.needsContext?jQuery(sel,this).index(cur) >= 0:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} // Add the remaining (directly-bound) handlers
	if(delegateCount < _handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},fix:function fix(event){if(event[jQuery.expando]){return event;} // Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type] = fixHook = rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy = fixHook.props?this.props.concat(fixHook.props):this.props;event = new jQuery.Event(originalEvent);i = copy.length;while(i--) {prop = copy[i];event[prop] = originalEvent[prop];} // Support: IE<9
	// Fix target property (#1925)
	if(!event.target){event.target = originalEvent.srcElement || document;} // Support: Chrome 23+, Safari?
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType === 3){event.target = event.target.parentNode;} // Support: IE<9
	// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
	event.metaKey = !!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;}, // Includes some event props shared by KeyEvent and MouseEvent
	props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){ // Add which for key events
	if(event.which == null){event.which = original.charCode != null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function filter(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement; // Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX == null && original.clientX != null){eventDoc = event.target.ownerDocument || document;doc = eventDoc.documentElement;body = eventDoc.body;event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);} // Add relatedTarget, if necessary
	if(!event.relatedTarget && fromElement){event.relatedTarget = fromElement === event.target?original.toElement:fromElement;} // Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which && button !== undefined){event.which = button & 1?1:button & 2?3:button & 4?2:0;}return event;}},special:{load:{ // Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{ // Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this !== safeActiveElement() && this.focus){try{this.focus();return false;}catch(e) { // Support: IE<9
	// If we error on focus to hidden element (#1486, #12518),
	// let .trigger() run the handlers
	}}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this === safeActiveElement() && this.blur){this.blur();return false;}},delegateType:"focusout"},click:{ // For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(jQuery.nodeName(this,"input") && this.type === "checkbox" && this.click){this.click();return false;}}, // For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){ // Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result !== undefined && event.originalEvent){event.originalEvent.returnValue = event.result;}}}},simulate:function simulate(type,elem,event,bubble){ // Piggyback on a donor event to simulate a different one.
	// Fake originalEvent to avoid donor's stopPropagation, but if the
	// simulated event prevents default then we do the same on the donor.
	var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else {jQuery.event.dispatch.call(elem,e);}if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent = document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on" + type;if(elem.detachEvent){ // #8545, #7054, preventing memory leaks for custom events in IE6-8
	// detachEvent needed property on element, by name of that event, to properly expose it to GC
	if(typeof elem[name] === strundefined){elem[name] = null;}elem.detachEvent(name,handle);}};jQuery.Event = function(src,props){ // Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} // Event object
	if(src && src.type){this.originalEvent = src;this.type = src.type; // Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&  // Support: IE < 9, Android < 4.0
	src.returnValue === false?returnTrue:returnFalse; // Event type
	}else {this.type = src;} // Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);} // Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now(); // Mark it as fixed
	this[jQuery.expando] = true;}; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented = returnTrue;if(!e){return;} // If preventDefault exists, run it on the original event
	if(e.preventDefault){e.preventDefault(); // Support: IE
	// Otherwise set the returnValue property of the original event to false
	}else {e.returnValue = false;}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped = returnTrue;if(!e){return;} // If stopPropagation exists, run it on the original event
	if(e.stopPropagation){e.stopPropagation();} // Support: IE
	// Set the cancelBubble property of the original event to true
	e.cancelBubble = true;},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped = returnTrue;if(e && e.stopImmediatePropagation){e.stopImmediatePropagation();}this.stopPropagation();}}; // Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig] = {delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; // For mousenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related || related !== target && !jQuery.contains(target,related)){event.type = handleObj.origType;ret = handleObj.handler.apply(this,arguments);event.type = fix;}return ret;}};}); // IE submit delegation
	if(!support.submitBubbles){jQuery.event.special.submit = {setup:function setup(){ // Only need this for delegated form submit events
	if(jQuery.nodeName(this,"form")){return false;} // Lazy-add a submit handler when a descendant form may potentially be submitted
	jQuery.event.add(this,"click._submit keypress._submit",function(e){ // Node name check avoids a VML-related crash in IE (#9807)
	var elem=e.target,form=jQuery.nodeName(elem,"input") || jQuery.nodeName(elem,"button")?elem.form:undefined;if(form && !jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble = true;});jQuery._data(form,"submitBubbles",true);}}); // return undefined since we don't need an event listener
	},postDispatch:function postDispatch(event){ // If form was submitted by the user, bubble the event up the tree
	if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode && !event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function teardown(){ // Only need this for delegated form submit events
	if(jQuery.nodeName(this,"form")){return false;} // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
	jQuery.event.remove(this,"._submit");}};} // IE change delegation and checkbox/radio fix
	if(!support.changeBubbles){jQuery.event.special.change = {setup:function setup(){if(rformElems.test(this.nodeName)){ // IE doesn't fire change on a check/radio until blur; trigger it on click
	// after a propertychange. Eat the blur-change in special.change.handle.
	// This still fires onchange a second time for check/radio after blur.
	if(this.type === "checkbox" || this.type === "radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName === "checked"){this._just_changed = true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed && !event.isTrigger){this._just_changed = false;} // Allow triggered, simulated change events (#11500)
	jQuery.event.simulate("change",this,event,true);});}return false;} // Delegated event; lazy-add a change handler on descendant inputs
	jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName) && !jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode && !event.isSimulated && !event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function handle(event){var elem=event.target; // Swallow native change events from checkbox/radio, we already triggered them above
	if(this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox"){return event.handleObj.handler.apply(this,arguments);}},teardown:function teardown(){jQuery.event.remove(this,"._change");return !rformElems.test(this.nodeName);}};} // Create "bubbling" focus and blur events
	if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ // Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix] = {setup:function setup(){var doc=this.ownerDocument || this,attaches=jQuery._data(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}jQuery._data(doc,fix,(attaches || 0) + 1);},teardown:function teardown(){var doc=this.ownerDocument || this,attaches=jQuery._data(doc,fix) - 1;if(!attaches){doc.removeEventListener(orig,handler,true);jQuery._removeData(doc,fix);}else {jQuery._data(doc,fix,attaches);}}};});}jQuery.fn.extend({on:function on(types,selector,data,fn, /*INTERNAL*/one){var type,origFn; // Types can be a map of types/handlers
	if(typeof types === "object"){ // ( types-Object, selector, data )
	if(typeof selector !== "string"){ // ( types-Object, data )
	data = data || selector;selector = undefined;}for(type in types) {this.on(type,selector,data,types[type],one);}return this;}if(data == null && fn == null){ // ( types, fn )
	fn = selector;data = selector = undefined;}else if(fn == null){if(typeof selector === "string"){ // ( types, selector, fn )
	fn = data;data = undefined;}else { // ( types, data, fn )
	fn = data;data = selector;selector = undefined;}}if(fn === false){fn = returnFalse;}else if(!fn){return this;}if(one === 1){origFn = fn;fn = function(event){ // Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);}; // Use same guid so caller can remove using origFn
	fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);}return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function one(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types && types.preventDefault && types.handleObj){ // ( event )  dispatched jQuery.Event
	handleObj = types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType + "." + handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if(typeof types === "object"){ // ( types-object [, selector] )
	for(type in types) {this.off(type,selector,types[type]);}return this;}if(selector === false || typeof selector === "function"){ // ( types [, fn] )
	fn = selector;selector = undefined;}if(fn === false){fn = returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length) {safeFrag.createElement(list.pop());}}return safeFrag;}var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:" + nodeNames + ")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i, // checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, // We have to close these tags to support XHTML (#13200)
	wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"], // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup = wrapMap.option;wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;wrapMap.th = wrapMap.td;function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName !== strundefined?context.getElementsByTagName(tag || "*"):typeof context.querySelectorAll !== strundefined?context.querySelectorAll(tag || "*"):undefined;if(!found){for(found = [],elems = context.childNodes || context;(elem = elems[i]) != null;i++) {if(!tag || jQuery.nodeName(elem,tag)){found.push(elem);}else {jQuery.merge(found,getAll(elem,tag));}}}return tag === undefined || tag && jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;} // Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked = elem.checked;}} // Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table") && jQuery.nodeName(content.nodeType !== 11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;} // Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type = (jQuery.find.attr(elem,"type") !== null) + "/" + elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type = match[1];}else {elem.removeAttribute("type");}return elem;} // Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem = elems[i]) != null;i++) {jQuery._data(elem,"globalEval",!refElements || jQuery._data(refElements[i],"globalEval"));}}function cloneCopyEvent(src,dest){if(dest.nodeType !== 1 || !jQuery.hasData(src)){return;}var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events = {};for(type in events) {for(i = 0,l = events[type].length;i < l;i++) {jQuery.event.add(dest,type,events[type][i]);}}} // make the cloned public data object a copy from the original
	if(curData.data){curData.data = jQuery.extend({},curData.data);}}function fixCloneNodeIssues(src,dest){var nodeName,e,data; // We do not need to do anything for non-Elements
	if(dest.nodeType !== 1){return;}nodeName = dest.nodeName.toLowerCase(); // IE6-8 copies events bound via attachEvent when using cloneNode.
	if(!support.noCloneEvent && dest[jQuery.expando]){data = jQuery._data(dest);for(e in data.events) {jQuery.removeEvent(dest,e,data.handle);} // Event data gets referenced instead of copied if the expando gets copied too
	dest.removeAttribute(jQuery.expando);} // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if(nodeName === "script" && dest.text !== src.text){disableScript(dest).text = src.text;restoreScript(dest); // IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	}else if(nodeName === "object"){if(dest.parentNode){dest.outerHTML = src.outerHTML;} // This path appears unavoidable for IE9. When cloning an object
	// element in IE9, the outerHTML strategy above is not sufficient.
	// If the src has innerHTML and the destination does not,
	// copy the src.innerHTML into the dest.innerHTML. #10324
	if(support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))){dest.innerHTML = src.innerHTML;}}else if(nodeName === "input" && rcheckableType.test(src.type)){ // IE6-8 fails to persist the checked state of a cloned checkbox
	// or radio button. Worse, IE6-7 fail to give the cloned element
	// a checked appearance if the defaultChecked value isn't also set
	dest.defaultChecked = dest.checked = src.checked; // IE6-7 get confused and end up setting the value of a cloned
	// checkbox/radio button to an empty string instead of "on"
	if(dest.value !== src.value){dest.value = src.value;} // IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	}else if(nodeName === "option"){dest.defaultSelected = dest.selected = src.defaultSelected; // IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	}else if(nodeName === "input" || nodeName === "textarea"){dest.defaultValue = src.defaultValue;}}jQuery.extend({clone:function clone(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")){clone = elem.cloneNode(true); // IE<=8 does not properly clone detached, unknown element nodes
	}else {fragmentDiv.innerHTML = elem.outerHTML;fragmentDiv.removeChild(clone = fragmentDiv.firstChild);}if((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)){ // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements = getAll(clone);srcElements = getAll(elem); // Fix all IE cloning issues
	for(i = 0;(node = srcElements[i]) != null;++i) { // Ensure that the destination node is not null; Fixes #9587
	if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}} // Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements = srcElements || getAll(elem);destElements = destElements || getAll(clone);for(i = 0;(node = srcElements[i]) != null;i++) {cloneCopyEvent(node,destElements[i]);}}else {cloneCopyEvent(elem,clone);}} // Preserve script evaluation history
	destElements = getAll(clone,"script");if(destElements.length > 0){setGlobalEval(destElements,!inPage && getAll(elem,"script"));}destElements = srcElements = node = null; // Return the cloned set
	return clone;},buildFragment:function buildFragment(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length, // Ensure a safe fragment
	safe=createSafeFragment(context),nodes=[],i=0;for(;i < l;i++) {elem = elems[i];if(elem || elem === 0){ // Add nodes directly
	if(jQuery.type(elem) === "object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem); // Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
	}else {tmp = tmp || safe.appendChild(context.createElement("div")); // Deserialize a standard representation
	tag = (rtagName.exec(elem) || ["",""])[1].toLowerCase();wrap = wrapMap[tag] || wrapMap._default;tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag,"<$1></$2>") + wrap[2]; // Descend through wrappers to the right content
	j = wrap[0];while(j--) {tmp = tmp.lastChild;} // Manually add leading whitespace removed by IE
	if(!support.leadingWhitespace && rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));} // Remove IE's autoinserted <tbody> from table fragments
	if(!support.tbody){ // String was a <table>, *may* have spurious <tbody>
	elem = tag === "table" && !rtbody.test(elem)?tmp.firstChild: // String was a bare <thead> or <tfoot>
	wrap[1] === "<table>" && !rtbody.test(elem)?tmp:0;j = elem && elem.childNodes.length;while(j--) {if(jQuery.nodeName(tbody = elem.childNodes[j],"tbody") && !tbody.childNodes.length){elem.removeChild(tbody);}}}jQuery.merge(nodes,tmp.childNodes); // Fix #12392 for WebKit and IE > 9
	tmp.textContent = ""; // Fix #12392 for oldIE
	while(tmp.firstChild) {tmp.removeChild(tmp.firstChild);} // Remember the top-level container for proper cleanup
	tmp = safe.lastChild;}}} // Fix #11356: Clear elements from fragment
	if(tmp){safe.removeChild(tmp);} // Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if(!support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}i = 0;while(elem = nodes[i++]) { // #4087 - If origin and destination elements are the same, and this is
	// that element, do not do anything
	if(selection && jQuery.inArray(elem,selection) !== -1){continue;}contains = jQuery.contains(elem.ownerDocument,elem); // Append to fragment
	tmp = getAll(safe.appendChild(elem),"script"); // Preserve script evaluation history
	if(contains){setGlobalEval(tmp);} // Capture executables
	if(scripts){j = 0;while(elem = tmp[j++]) {if(rscriptType.test(elem.type || "")){scripts.push(elem);}}}}tmp = null;return safe;},cleanData:function cleanData(elems, /* internal */acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=support.deleteExpando,special=jQuery.event.special;for(;(elem = elems[i]) != null;i++) {if(acceptData || jQuery.acceptData(elem)){id = elem[internalKey];data = id && cache[id];if(data){if(data.events){for(type in data.events) {if(special[type]){jQuery.event.remove(elem,type); // This is a shortcut to avoid jQuery.event.remove's overhead
	}else {jQuery.removeEvent(elem,type,data.handle);}}} // Remove cache only if it was not already removed by jQuery.event.remove
	if(cache[id]){delete cache[id]; // IE does not allow us to delete expando properties from nodes,
	// nor does it have a removeAttribute function on Document nodes;
	// we must handle all of these cases
	if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute !== strundefined){elem.removeAttribute(internalKey);}else {elem[internalKey] = null;}deletedIds.push(id);}}}}}});jQuery.fn.extend({text:function text(value){return access(this,function(value){return value === undefined?jQuery.text(this):this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));},null,value,arguments.length);},append:function append(){return this.domManip(arguments,function(elem){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return this.domManip(arguments,function(elem){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function remove(selector,keepData /* Internal Use Only */){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem = elems[i]) != null;i++) {if(!keepData && elem.nodeType === 1){jQuery.cleanData(getAll(elem));}if(elem.parentNode){if(keepData && jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}elem.parentNode.removeChild(elem);}}return this;},empty:function empty(){var elem,i=0;for(;(elem = this[i]) != null;i++) { // Remove element nodes and prevent memory leaks
	if(elem.nodeType === 1){jQuery.cleanData(getAll(elem,false));} // Remove any remaining nodes
	while(elem.firstChild) {elem.removeChild(elem.firstChild);} // If this is a select, ensure that it displays empty (#12336)
	// Support: IE<9
	if(elem.options && jQuery.nodeName(elem,"select")){elem.options.length = 0;}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents = dataAndEvents == null?false:dataAndEvents;deepDataAndEvents = deepDataAndEvents == null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0] || {},i=0,l=this.length;if(value === undefined){return elem.nodeType === 1?elem.innerHTML.replace(rinlinejQuery,""):undefined;} // See if we can take a shortcut and just use innerHTML
	if(typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["",""])[1].toLowerCase()]){value = value.replace(rxhtmlTag,"<$1></$2>");try{for(;i < l;i++) { // Remove element nodes and prevent memory leaks
	elem = this[i] || {};if(elem.nodeType === 1){jQuery.cleanData(getAll(elem,false));elem.innerHTML = value;}}elem = 0; // If using innerHTML throws an exception, use the fallback method
	}catch(e) {}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var arg=arguments[0]; // Make the changes, replacing each context element with the new content
	this.domManip(arguments,function(elem){arg = this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this);}}); // Force removal if there was no new content (e.g., from empty arguments)
	return arg && (arg.length || arg.nodeType)?this:this.remove();},detach:function detach(selector){return this.remove(selector,true);},domManip:function domManip(args,callback){ // Flatten any nested arrays
	args = concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l - 1,value=args[0],isFunction=jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0] = value.call(this,index,self.html());}self.domManip(args,callback);});}if(l){fragment = jQuery.buildFragment(args,this[0].ownerDocument,false,this);first = fragment.firstChild;if(fragment.childNodes.length === 1){fragment = first;}if(first){scripts = jQuery.map(getAll(fragment,"script"),disableScript);hasScripts = scripts.length; // Use the original fragment for the last item instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i < l;i++) {node = fragment;if(i !== iNoClone){node = jQuery.clone(node,true,true); // Keep references to cloned scripts for later restoration
	if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}callback.call(this[i],node,i);}if(hasScripts){doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts
	jQuery.map(scripts,restoreScript); // Evaluate executable scripts on first document insertion
	for(i = 0;i < hasScripts;i++) {node = scripts[i];if(rscriptType.test(node.type || "") && !jQuery._data(node,"globalEval") && jQuery.contains(doc,node)){if(node.src){ // Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else {jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript,""));}}}} // Fix #11809: Avoid leaking memory
	fragment = first = null;}}return this;}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name] = function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length - 1;for(;i <= last;i++) {elems = i === last?this:this.clone(true);jQuery(insert[i])[original](elems); // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={}; /**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */ // Called only from within defaultDisplay
	function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body), // getDefaultComputedStyle might be reliably used only on attached element
	display=window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0]))? // Use of this method is a temporary fix (more like optmization) until something better comes along,
	// since it was removed from specification and supported only in FF
	style.display:jQuery.css(elem[0],"display"); // We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;} /**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display = actualDisplay(nodeName,doc); // If the simple way fails, read from inside an iframe
	if(display === "none" || !display){ // Use the already-created iframe if possible
	iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc = (iframe[0].contentWindow || iframe[0].contentDocument).document; // Support: IE
	doc.write();doc.close();display = actualDisplay(nodeName,doc);iframe.detach();} // Store the correct default display
	elemdisplay[nodeName] = display;}return display;}(function(){var shrinkWrapBlocksVal;support.shrinkWrapBlocks = function(){if(shrinkWrapBlocksVal != null){return shrinkWrapBlocksVal;} // Will be changed later if needed.
	shrinkWrapBlocksVal = false; // Minified: var b,c,d
	var div,body,container;body = document.getElementsByTagName("body")[0];if(!body || !body.style){ // Test fired too early or in an unsupported environment, exit.
	return;} // Setup
	div = document.createElement("div");container = document.createElement("div");container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div); // Support: IE6
	// Check if elements with layout shrink-wrap their children
	if(typeof div.style.zoom !== strundefined){ // Reset CSS: box-sizing; display; margin; border
	div.style.cssText =  // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";div.appendChild(document.createElement("div")).style.width = "5px";shrinkWrapBlocksVal = div.offsetWidth !== 3;}body.removeChild(container);return shrinkWrapBlocksVal;};})();var rmargin=/^margin/;var rnumnonpx=new RegExp("^(" + pnum + ")(?!px)[a-z%]+$","i");var getStyles,curCSS,rposition=/^(top|right|bottom|left)$/;if(window.getComputedStyle){getStyles = function(elem){ // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null);}return window.getComputedStyle(elem,null);};curCSS = function(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed = computed || getStyles(elem); // getPropertyValue is only needed for .css('filter') in IE9, see #12537
	ret = computed?computed.getPropertyValue(name) || computed[name]:undefined;if(computed){if(ret === "" && !jQuery.contains(elem.ownerDocument,elem)){ret = jQuery.style(elem,name);} // A tribute to the "awesome hack by Dean Edwards"
	// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
	// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
	// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
	if(rnumnonpx.test(ret) && rmargin.test(name)){ // Remember the original values
	width = style.width;minWidth = style.minWidth;maxWidth = style.maxWidth; // Put in the new values to get a computed value out
	style.minWidth = style.maxWidth = style.width = ret;ret = computed.width; // Revert the changed values
	style.width = width;style.minWidth = minWidth;style.maxWidth = maxWidth;}} // Support: IE
	// IE returns zIndex value as an integer.
	return ret === undefined?ret:ret + "";};}else if(document.documentElement.currentStyle){getStyles = function(elem){return elem.currentStyle;};curCSS = function(elem,name,computed){var left,rs,rsLeft,ret,style=elem.style;computed = computed || getStyles(elem);ret = computed?computed[name]:undefined; // Avoid setting ret to empty string here
	// so we don't default to auto
	if(ret == null && style && style[name]){ret = style[name];} // From the awesome hack by Dean Edwards
	// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	// If we're not dealing with a regular pixel number
	// but a number that has a weird ending, we need to convert it to pixels
	// but not position css attributes, as those are proportional to the parent element instead
	// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
	if(rnumnonpx.test(ret) && !rposition.test(name)){ // Remember the original values
	left = style.left;rs = elem.runtimeStyle;rsLeft = rs && rs.left; // Put in the new values to get a computed value out
	if(rsLeft){rs.left = elem.currentStyle.left;}style.left = name === "fontSize"?"1em":ret;ret = style.pixelLeft + "px"; // Revert the changed values
	style.left = left;if(rsLeft){rs.left = rsLeft;}} // Support: IE
	// IE returns zIndex value as an integer.
	return ret === undefined?ret:ret + "" || "auto";};}function addGetHookIf(conditionFn,hookFn){ // Define the hook, we'll check on the first run if it's really needed.
	return {get:function get(){var condition=conditionFn();if(condition == null){ // The test was not ready at this point; screw the hook this time
	// but check again when needed next time.
	return;}if(condition){ // Hook not needed (or it's not possible to use it due to missing dependency),
	// remove it.
	// Since there are no other hooks for marginRight, remove the whole object.
	delete this.get;return;} // Hook needed; redefine it so that the support test is not executed again.
	return (this.get = hookFn).apply(this,arguments);}};}(function(){ // Minified: var b,c,d,e,f,g, h,i
	var div,style,a,pixelPositionVal,boxSizingReliableVal,reliableHiddenOffsetsVal,reliableMarginRightVal; // Setup
	div = document.createElement("div");div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a = div.getElementsByTagName("a")[0];style = a && a.style; // Finish early in limited (non-browser) environments
	if(!style){return;}style.cssText = "float:left;opacity:.5"; // Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = style.opacity === "0.5"; // Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!style.cssFloat;div.style.backgroundClip = "content-box";div.cloneNode(true).style.backgroundClip = "";support.clearCloneStyle = div.style.backgroundClip === "content-box"; // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" || style.WebkitBoxSizing === "";jQuery.extend(support,{reliableHiddenOffsets:function reliableHiddenOffsets(){if(reliableHiddenOffsetsVal == null){computeStyleTests();}return reliableHiddenOffsetsVal;},boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal == null){computeStyleTests();}return boxSizingReliableVal;},pixelPosition:function pixelPosition(){if(pixelPositionVal == null){computeStyleTests();}return pixelPositionVal;}, // Support: Android 2.3
	reliableMarginRight:function reliableMarginRight(){if(reliableMarginRightVal == null){computeStyleTests();}return reliableMarginRightVal;}});function computeStyleTests(){ // Minified: var b,c,d,j
	var div,body,container,contents;body = document.getElementsByTagName("body")[0];if(!body || !body.style){ // Test fired too early or in an unsupported environment, exit.
	return;} // Setup
	div = document.createElement("div");container = document.createElement("div");container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);div.style.cssText =  // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute"; // Support: IE<9
	// Assume reasonable values in the absence of getComputedStyle
	pixelPositionVal = boxSizingReliableVal = false;reliableMarginRightVal = true; // Check for getComputedStyle so that this code is not run in IE<9.
	if(window.getComputedStyle){pixelPositionVal = (window.getComputedStyle(div,null) || {}).top !== "1%";boxSizingReliableVal = (window.getComputedStyle(div,null) || {width:"4px"}).width === "4px"; // Support: Android 2.3
	// Div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	contents = div.appendChild(document.createElement("div")); // Reset CSS: box-sizing; display; margin; border; padding
	contents.style.cssText = div.style.cssText =  // Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";contents.style.marginRight = contents.style.width = "0";div.style.width = "1px";reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents,null) || {}).marginRight);div.removeChild(contents);} // Support: IE8
	// Check if table cells still have offsetWidth/Height when they are set
	// to display:none and there are still other visible table cells in a
	// table row; if so, offsetWidth/Height are not reliable for use when
	// determining if an element has been hidden directly using
	// display:none (it is still safe to use offsets if a parent element is
	// hidden; don safety goggles and see bug #4512 for more information).
	div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";contents = div.getElementsByTagName("td");contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;if(reliableHiddenOffsetsVal){contents[0].style.display = "";contents[1].style.display = "none";reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;}body.removeChild(container);}})(); // A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function(elem,options,callback,args){var ret,name,old={}; // Remember the old values, and insert the new ones
	for(name in options) {old[name] = elem.style[name];elem.style[name] = options[name];}ret = callback.apply(elem,args || []); // Revert the old values
	for(name in options) {elem.style[name] = old[name];}return ret;};var ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/, // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^(" + pnum + ")(.*)$","i"),rrelNum=new RegExp("^([+-])=(" + pnum + ")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"]; // return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style,name){ // shortcut for names that are not vendor prefixed
	if(name in style){return name;} // check for vendor prefixed names
	var capName=name.charAt(0).toUpperCase() + name.slice(1),origName=name,i=cssPrefixes.length;while(i--) {name = cssPrefixes[i] + capName;if(name in style){return name;}}return origName;}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index < length;index++) {elem = elements[index];if(!elem.style){continue;}values[index] = jQuery._data(elem,"olddisplay");display = elem.style.display;if(show){ // Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index] && display === "none"){elem.style.display = "";} // Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display === "" && isHidden(elem)){values[index] = jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else {hidden = isHidden(elem);if(display && display !== "none" || !hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}} // Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index = 0;index < length;index++) {elem = elements[index];if(!elem.style){continue;}if(!show || elem.style.display === "none" || elem.style.display === ""){elem.style.display = show?values[index] || "":"none";}}return elements;}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches? // Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[1] - (subtract || 0)) + (matches[2] || "px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra === (isBorderBox?"border":"content")? // If we already have the right measurement, avoid augmentation
	4: // Otherwise initialize for horizontal or vertical properties
	name === "width"?1:0,val=0;for(;i < 4;i += 2) { // both box models exclude margin, so add it if we want it
	if(extra === "margin"){val += jQuery.css(elem,extra + cssExpand[i],true,styles);}if(isBorderBox){ // border-box includes padding, so remove it if we want content
	if(extra === "content"){val -= jQuery.css(elem,"padding" + cssExpand[i],true,styles);} // at this point, extra isn't border nor margin, so remove border
	if(extra !== "margin"){val -= jQuery.css(elem,"border" + cssExpand[i] + "Width",true,styles);}}else { // at this point, extra isn't content, so add padding
	val += jQuery.css(elem,"padding" + cssExpand[i],true,styles); // at this point, extra isn't content nor padding, so add border
	if(extra !== "padding"){val += jQuery.css(elem,"border" + cssExpand[i] + "Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){ // Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name === "width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=support.boxSizing && jQuery.css(elem,"boxSizing",false,styles) === "border-box"; // some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val <= 0 || val == null){ // Fall back to computed then uncomputed css if necessary
	val = curCSS(elem,name,styles);if(val < 0 || val == null){val = elem.style[name];} // Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;} // we need the check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]); // Normalize "", auto, and prepare for extra
	val = parseFloat(val) || 0;} // use the active box-sizing model to add/subtract irrelevant styles
	return val + augmentWidthOrHeight(elem,name,extra || (isBorderBox?"border":"content"),valueIsBorderBox,styles) + "px";}jQuery.extend({ // Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){ // We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret === ""?"1":ret;}}}}, // Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true}, // Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{ // normalize float css property
	"float":support.cssFloat?"cssFloat":"styleFloat"}, // Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){ // Don't set styles on text and comment nodes
	if(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style){return;} // Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style,origName)); // gets hook for the prefixed version
	// followed by the unprefixed version
	hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value
	if(value !== undefined){type = typeof value; // convert relative number strings (+= or -=) to relative numbers. #7345
	if(type === "string" && (ret = rrelNum.exec(value))){value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem,name)); // Fixes bug #9237
	type = "number";} // Make sure that null and NaN values aren't set. See: #7116
	if(value == null || value !== value){return;} // If a number was passed in, add 'px' to the (except for certain CSS properties)
	if(type === "number" && !jQuery.cssNumber[origName]){value += "px";} // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
	// but it would mean to define eight (for every problematic property) identical functions
	if(!support.clearCloneStyle && value === "" && name.indexOf("background") === 0){style[name] = "inherit";} // If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks || !("set" in hooks) || (value = hooks.set(elem,value,extra)) !== undefined){ // Support: IE
	// Swallow errors from 'invalid' CSS values (#5509)
	try{style[name] = value;}catch(e) {}}}else { // If a hook was provided get the non-computed value from there
	if(hooks && "get" in hooks && (ret = hooks.get(elem,false,extra)) !== undefined){return ret;} // Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name); // Make sure that we're working with the right name
	name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style,origName)); // gets hook for the prefixed version
	// followed by the unprefixed version
	hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
	if(hooks && "get" in hooks){val = hooks.get(elem,true,extra);} // Otherwise, if a way to get the computed value exists, use that
	if(val === undefined){val = curCSS(elem,name,styles);} //convert "normal" to computed value
	if(val === "normal" && name in cssNormalTransform){val = cssNormalTransform[name];} // Return, converting to number if forced or a qualifier was provided and val looks numeric
	if(extra === "" || extra){num = parseFloat(val);return extra === true || jQuery.isNumeric(num)?num || 0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name] = {get:function get(elem,computed,extra){if(computed){ // certain elements can have dimension info if we invisibly show them
	// however, it must have a current display style that would benefit from this
	return rdisplayswap.test(jQuery.css(elem,"display")) && elem.offsetWidth === 0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var styles=extra && getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,support.boxSizing && jQuery.css(elem,"boxSizing",false,styles) === "border-box",styles):0);}};});if(!support.opacity){jQuery.cssHooks.opacity = {get:function get(elem,computed){ // IE uses filters for opacity
	return ropacity.test((computed && elem.currentStyle?elem.currentStyle.filter:elem.style.filter) || "")?0.01 * parseFloat(RegExp.$1) + "":computed?"1":"";},set:function set(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity=" + value * 100 + ")":"",filter=currentStyle && currentStyle.filter || style.filter || ""; // IE has trouble with opacity if it does not have layout
	// Force it by setting the zoom level
	style.zoom = 1; // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
	// if value === "", then remove inline opacity #12685
	if((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha,"")) === "" && style.removeAttribute){ // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
	// if "filter:" is present at all, clearType is disabled, we want to avoid this
	// style.removeAttribute is IE Only, but so apparently is this code path...
	style.removeAttribute("filter"); // if there is no filter style applied in a css rule or unset inline opacity, we are done
	if(value === "" || currentStyle && !currentStyle.filter){return;}} // otherwise, set new filter values
	style.filter = ralpha.test(filter)?filter.replace(ralpha,opacity):filter + " " + opacity;}};}jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){ // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// Work around by temporarily setting element display to inline-block
	return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}); // These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix + suffix] = {expand:function expand(value){var i=0,expanded={}, // assumes a single number if not a string
	parts=typeof value === "string"?value.split(" "):[value];for(;i < 4;i++) {expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles = getStyles(elem);len = name.length;for(;i < len;i++) {map[name[i]] = jQuery.css(elem,name[i],false,styles);}return map;}return value !== undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length > 1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state === "boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else {jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween = Tween;Tween.prototype = {constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem = elem;this.prop = prop;this.easing = easing || "swing";this.options = options;this.start = this.now = this.cur();this.end = end;this.unit = unit || (jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks && hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos = eased = jQuery.easing[this.easing](percent,this.options.duration * percent,0,1,this.options.duration);}else {this.pos = eased = percent;}this.now = (this.end - this.start) * eased + this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks && hooks.set){hooks.set(this);}else {Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype = Tween.prototype;Tween.propHooks = {_default:{get:function get(tween){var result;if(tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)){return tween.elem[tween.prop];} // passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails
	// so, simple values such as "10px" are parsed to Float.
	// complex values such as "rotate(1rad)" are returned as is.
	result = jQuery.css(tween.elem,tween.prop,""); // Empty strings, null, undefined and "auto" are converted to 0.
	return !result || result === "auto"?0:result;},set:function set(tween){ // use step hook for back compat - use cssHook if its there - use .style if its
	// available and use plain properties where available
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now + tween.unit);}else {tween.elem[tween.prop] = tween.now;}}}}; // Support: IE <=9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set:function set(tween){if(tween.elem.nodeType && tween.elem.parentNode){tween.elem[tween.prop] = tween.now;}}};jQuery.easing = {linear:function linear(p){return p;},swing:function swing(p){return 0.5 - Math.cos(p * Math.PI) / 2;}};jQuery.fx = Tween.prototype.init; // Back Compat <1.8 extension point
	jQuery.fx.step = {};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts && parts[3] || (jQuery.cssNumber[prop]?"":"px"), // Starting value computation is required for potential unit mismatches
	start=(jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start && start[3] !== unit){ // Trust units reported by jQuery.css
	unit = unit || start[3]; // Make sure we update the tween properties later on
	parts = parts || []; // Iteratively approximate from a nonzero starting point
	start = +target || 1;do { // If previous iteration zeroed out, double until we get *something*
	// Use a string for doubling factor so we don't accidentally see scale as unchanged below
	scale = scale || ".5"; // Adjust and apply
	start = start / scale;jQuery.style(tween.elem,prop,start + unit); // Update scale, tolerating zero or NaN from tween.cur()
	// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
	}while(scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);} // Update tween properties
	if(parts){start = tween.start = +start || +target || 0;tween.unit = unit; // If a +=/-= token was provided, we're doing a relative animation
	tween.end = parts[1]?start + (parts[1] + 1) * parts[2]:+parts[2];}return tween;}]}; // Animations created synchronously will run synchronously
	function createFxNow(){setTimeout(function(){fxNow = undefined;});return fxNow = jQuery.now();} // Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,attrs={height:type},i=0; // if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth?1:0;for(;i < 4;i += 2 - includeWidth) {which = cssExpand[i];attrs["margin" + which] = attrs["padding" + which] = type;}if(includeWidth){attrs.opacity = attrs.width = type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(tweeners[prop] || []).concat(tweeners["*"]),index=0,length=collection.length;for(;index < length;index++) {if(tween = collection[index].call(animation,prop,value)){ // we're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){ /* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType && isHidden(elem),dataShow=jQuery._data(elem,"fxshow"); // handle queue: false promises
	if(!opts.queue){hooks = jQuery._queueHooks(elem,"fx");if(hooks.unqueued == null){hooks.unqueued = 0;oldfire = hooks.empty.fire;hooks.empty.fire = function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){ // doing this makes sure that the complete handler will be called
	// before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} // height/width overflow pass
	if(elem.nodeType === 1 && ("height" in props || "width" in props)){ // Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE does not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow = [style.overflow,style.overflowX,style.overflowY]; // Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display = jQuery.css(elem,"display"); // Test default display if display is currently "none"
	checkDisplay = display === "none"?jQuery._data(elem,"olddisplay") || defaultDisplay(elem.nodeName):display;if(checkDisplay === "inline" && jQuery.css(elem,"float") === "none"){ // inline-level elements accept inline-block;
	// block-level elements need to be inline with layout
	if(!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline"){style.display = "inline-block";}else {style.zoom = 1;}}}if(opts.overflow){style.overflow = "hidden";if(!support.shrinkWrapBlocks()){anim.always(function(){style.overflow = opts.overflow[0];style.overflowX = opts.overflow[1];style.overflowY = opts.overflow[2];});}} // show/hide pass
	for(prop in props) {value = props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle = toggle || value === "toggle";if(value === (hidden?"hide":"show")){ // If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
	if(value === "show" && dataShow && dataShow[prop] !== undefined){hidden = true;}else {continue;}}orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem,prop); // Any non-fx value stops us from restoring the original display value
	}else {display = undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden = dataShow.hidden;}}else {dataShow = jQuery._data(elem,"fxshow",{});} // store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden = !hidden;}if(hidden){jQuery(elem).show();}else {anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig) {jQuery.style(elem,prop,orig[prop]);}});for(prop in orig) {tween = createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop] = tween.start;if(hidden){tween.end = tween.start;tween.start = prop === "width" || prop === "height"?1:0;}}} // If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display === "none"?defaultDisplay(elem.nodeName):display) === "inline"){style.display = display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks; // camelCase, specialEasing and expand cssHook pass
	for(index in props) {name = jQuery.camelCase(index);easing = specialEasing[name];value = props[index];if(jQuery.isArray(value)){easing = value[1];value = props[index] = value[0];}if(index !== name){props[name] = value;delete props[index];}hooks = jQuery.cssHooks[name];if(hooks && "expand" in hooks){value = hooks.expand(value);delete props[name]; // not quite $.extend, this wont overwrite keys already present.
	// also - reusing 'index' from above because we have the correct "name"
	for(index in value) {if(!(index in props)){props[index] = value[index];specialEasing[index] = easing;}}}else {specialEasing[name] = easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){ // don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow || createFxNow(),remaining=Math.max(0,animation.startTime + animation.duration - currentTime), // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
	temp=remaining / animation.duration || 0,percent=1 - temp,index=0,length=animation.tweens.length;for(;index < length;index++) {animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent < 1 && length){return remaining;}else {deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow || createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop] || animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0, // if we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped = true;for(;index < length;index++) {animation.tweens[index].run(1);} // resolve when we played the last frame
	// otherwise, reject
	if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else {deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index < length;index++) {result = animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); // attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation = jQuery.extend(Animation,{tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback = props;props = ["*"];}else {props = props.split(" ");}var prop,index=0,length=props.length;for(;index < length;index++) {prop = props[index];tweeners[prop] = tweeners[prop] || [];tweeners[prop].unshift(callback);}},prefilter:function prefilter(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else {animationPrefilters.push(callback);}}});jQuery.speed = function(speed,easing,fn){var opt=speed && typeof speed === "object"?jQuery.extend({},speed):{complete:fn || !fn && easing || jQuery.isFunction(speed) && speed,duration:speed,easing:fn && easing || easing && !jQuery.isFunction(easing) && easing};opt.duration = jQuery.fx.off?0:typeof opt.duration === "number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default; // normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue == null || opt.queue === true){opt.queue = "fx";} // Queueing
	opt.old = opt.complete;opt.complete = function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){ // show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show() // animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){ // Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall); // Empty animations, or finishing resolves immediately
	if(empty || jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish = doAnimation;return empty || optall.queue === false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type !== "string"){gotoEnd = clearQueue;clearQueue = type;type = undefined;}if(clearQueue && type !== false){this.queue(type || "fx",[]);}return this.each(function(){var dequeue=true,index=type != null && type + "queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index] && data[index].stop){stopQueue(data[index]);}}else {for(index in data) {if(data[index] && data[index].stop && rrun.test(index)){stopQueue(data[index]);}}}for(index = timers.length;index--;) {if(timers[index].elem === this && (type == null || timers[index].queue === type)){timers[index].anim.stop(gotoEnd);dequeue = false;timers.splice(index,1);}} // start the next in the queue if the last step wasn't forced
	// timers currently will call their complete callbacks, which will dequeue
	// but only if they were gotoEnd
	if(dequeue || !gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type !== false){type = type || "fx";}return this.each(function(){var index,data=jQuery._data(this),queue=data[type + "queue"],hooks=data[type + "queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; // enable finishing flag on private data
	data.finish = true; // empty the queue first
	jQuery.queue(this,type,[]);if(hooks && hooks.stop){hooks.stop.call(this,true);} // look for any active animations, and finish them
	for(index = timers.length;index--;) {if(timers[index].elem === this && timers[index].queue === type){timers[index].anim.stop(true);timers.splice(index,1);}} // look for any animations in the old queue and finish them
	for(index = 0;index < length;index++) {if(queue[index] && queue[index].finish){queue[index].finish.call(this);}} // turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name] = function(speed,easing,callback){return speed == null || typeof speed === "boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};}); // Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name] = function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers = [];jQuery.fx.tick = function(){var timer,timers=jQuery.timers,i=0;fxNow = jQuery.now();for(;i < timers.length;i++) {timer = timers[i]; // Checks the timer has not already been removed
	if(!timer() && timers[i] === timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow = undefined;};jQuery.fx.timer = function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else {jQuery.timers.pop();}};jQuery.fx.interval = 13;jQuery.fx.start = function(){if(!timerId){timerId = setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop = function(){clearInterval(timerId);timerId = null;};jQuery.fx.speeds = {slow:600,fast:200, // Default speed
	_default:400}; // Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function(time,type){time = jQuery.fx?jQuery.fx.speeds[time] || time:time;type = type || "fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop = function(){clearTimeout(timeout);};});};(function(){ // Minified: var a,b,c,d,e
	var input,div,select,a,opt; // Setup
	div = document.createElement("div");div.setAttribute("className","t");div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a = div.getElementsByTagName("a")[0]; // First batch of tests.
	select = document.createElement("select");opt = select.appendChild(document.createElement("option"));input = div.getElementsByTagName("input")[0];a.style.cssText = "top:1px"; // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t"; // Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test(a.getAttribute("style")); // Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a"; // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value; // Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected; // Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype; // Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;support.optDisabled = !opt.disabled; // Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement("input");input.setAttribute("value","");support.input = input.getAttribute("value") === ""; // Check if an input maintains its value after becoming a radio
	input.value = "t";input.setAttribute("type","radio");support.radioValue = input.value === "t";})();var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks && "get" in hooks && (ret = hooks.get(elem,"value")) !== undefined){return ret;}ret = elem.value;return typeof ret === "string"? // handle most common string cases
	ret.replace(rreturn,""): // handle cases where value is null/undef or number
	ret == null?"":ret;}return;}isFunction = jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType !== 1){return;}if(isFunction){val = value.call(this,i,jQuery(this).val());}else {val = value;} // Treat null/undefined as ""; convert numbers to string
	if(val == null){val = "";}else if(typeof val === "number"){val += "";}else if(jQuery.isArray(val)){val = jQuery.map(val,function(value){return value == null?"":value + "";});}hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
	if(!hooks || !("set" in hooks) || hooks.set(this,val,"value") === undefined){this.value = val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val != null?val: // Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	jQuery.trim(jQuery.text(elem));}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type === "select-one" || index < 0,values=one?null:[],max=one?index + 1:options.length,i=index < 0?max:one?index:0; // Loop through all the selected options
	for(;i < max;i++) {option = options[i]; // oldIE doesn't update selected after form reset (#2551)
	if((option.selected || i === index) && ( // Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode,"optgroup"))){ // Get the specific value for the option
	value = jQuery(option).val(); // We don't need an array for one selects
	if(one){return value;} // Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--) {option = options[i];if(jQuery.inArray(jQuery.valHooks.option.get(option),values) >= 0){ // Support: IE6
	// When new option element is added to select box we need to
	// force reflow of newly added node in order to workaround delay
	// of initialization properties
	try{option.selected = optionSet = true;}catch(_) { // Will be executed only in IE6
	option.scrollHeight;}}else {option.selected = false;}} // Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex = -1;}return options;}}}}); // Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this] = {set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked = jQuery.inArray(jQuery(elem).val(),value) >= 0;}}};if(!support.checkOn){jQuery.valHooks[this].get = function(elem){ // Support: Webkit
	// "" is returned instead of "on" if a value isn't specified
	return elem.getAttribute("value") === null?"on":elem.value;};}});var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=support.getSetAttribute,getSetInput=support.input;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length > 1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var hooks,ret,nType=elem.nodeType; // don't get/set attributes on text, comment and attribute nodes
	if(!elem || nType === 3 || nType === 8 || nType === 2){return;} // Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute === strundefined){return jQuery.prop(elem,name,value);} // All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType !== 1 || !jQuery.isXMLDoc(elem)){name = name.toLowerCase();hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}if(value !== undefined){if(value === null){jQuery.removeAttr(elem,name);}else if(hooks && "set" in hooks && (ret = hooks.set(elem,value,name)) !== undefined){return ret;}else {elem.setAttribute(name,value + "");return value;}}else if(hooks && "get" in hooks && (ret = hooks.get(elem,name)) !== null){return ret;}else {ret = jQuery.find.attr(elem,name); // Non-existent attributes return null, we normalize to undefined
	return ret == null?undefined:ret;}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value && value.match(rnotwhite);if(attrNames && elem.nodeType === 1){while(name = attrNames[i++]) {propName = jQuery.propFix[name] || name; // Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){ // Set corresponding property to false
	if(getSetInput && getSetAttribute || !ruseDefault.test(name)){elem[propName] = false; // Support: IE<9
	// Also clear defaultChecked/defaultSelected (if appropriate)
	}else {elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;} // See #9699 for explanation of this approach (setting first, then removal)
	}else {jQuery.attr(elem,name,"");}elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue && value === "radio" && jQuery.nodeName(elem,"input")){ // Setting the type on a radio button after the value resets the value in IE6-9
	// Reset value to default in case type is set after value during creation
	var val=elem.value;elem.setAttribute("type",value);if(val){elem.value = val;}return value;}}}}}); // Hook for boolean attributes
	boolHook = {set:function set(elem,value,name){if(value === false){ // Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else if(getSetInput && getSetAttribute || !ruseDefault.test(name)){ // IE<8 needs the *property* name
	elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name,name); // Use defaultChecked and defaultSelected for oldIE
	}else {elem[jQuery.camelCase("default-" + name)] = elem[name] = true;}return name;}}; // Retrieve booleans specially
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name] || jQuery.find.attr;attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name)?function(elem,name,isXML){var ret,handle;if(!isXML){ // Avoid an infinite loop by temporarily removing this function from the getter
	handle = attrHandle[name];attrHandle[name] = ret;ret = getter(elem,name,isXML) != null?name.toLowerCase():null;attrHandle[name] = handle;}return ret;}:function(elem,name,isXML){if(!isXML){return elem[jQuery.camelCase("default-" + name)]?name.toLowerCase():null;}};}); // fix oldIE attroperties
	if(!getSetInput || !getSetAttribute){jQuery.attrHooks.value = {set:function set(elem,value,name){if(jQuery.nodeName(elem,"input")){ // Does not return so that setAttribute is also used
	elem.defaultValue = value;}else { // Use nodeHook if defined (#1954); otherwise setAttribute is fine
	return nodeHook && nodeHook.set(elem,value,name);}}};} // IE6/7 do not support getting/setting some attributes with get/setAttribute
	if(!getSetAttribute){ // Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {set:function set(elem,value,name){ // Set the existing or create a new attribute node
	var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));}ret.value = value += ""; // Break association with cloned elements by also using setAttribute (#9646)
	if(name === "value" || value === elem.getAttribute(name)){return value;}}}; // Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords = function(elem,name,isXML){var ret;if(!isXML){return (ret = elem.getAttributeNode(name)) && ret.value !== ""?ret.value:null;}}; // Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {get:function get(elem,name){var ret=elem.getAttributeNode(name);if(ret && ret.specified){return ret.value;}},set:nodeHook.set}; // Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {set:function set(elem,value,name){nodeHook.set(elem,value === ""?false:value,name);}}; // Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name] = {set:function set(elem,value){if(value === ""){elem.setAttribute(name,"auto");return value;}}};});}if(!support.style){jQuery.attrHooks.style = {get:function get(elem){ // Return undefined in the case of empty string
	// Note: IE uppercases css property names, but if we were to .toLowerCase()
	// .cssText, that would destroy case senstitivity in URL's, like in "background"
	return elem.style.cssText || undefined;},set:function set(elem,value){return elem.style.cssText = value + "";}};}var rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length > 1);},removeProp:function removeProp(name){name = jQuery.propFix[name] || name;return this.each(function(){ // try/catch handles cases where IE balks (such as removing a property on window)
	try{this[name] = undefined;delete this[name];}catch(e) {}});}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function prop(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType; // don't get/set properties on text, comment and attribute nodes
	if(!elem || nType === 3 || nType === 8 || nType === 2){return;}notxml = nType !== 1 || !jQuery.isXMLDoc(elem);if(notxml){ // Fix name and attach hooks
	name = jQuery.propFix[name] || name;hooks = jQuery.propHooks[name];}if(value !== undefined){return hooks && "set" in hooks && (ret = hooks.set(elem,value,name)) !== undefined?ret:elem[name] = value;}else {return hooks && "get" in hooks && (ret = hooks.get(elem,name)) !== null?ret:elem[name];}},propHooks:{tabIndex:{get:function get(elem){ // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href?0:-1;}}}}); // Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!support.hrefNormalized){ // href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name] = {get:function get(elem){return elem.getAttribute(name,4);}};});} // Support: Safari, IE9+
	// mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if(!support.optSelected){jQuery.propHooks.selected = {get:function get(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex; // Make sure that it also works with optgroups, see #5701
	if(parent.parentNode){parent.parentNode.selectedIndex;}}return null;}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()] = this;}); // IE6/7 call enctype encoding
	if(!support.enctype){jQuery.propFix.enctype = "encoding";}var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=typeof value === "string" && value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}if(proceed){ // The disjunction here is for better compressibility (see removeClass)
	classes = (value || "").match(rnotwhite) || [];for(;i < len;i++) {elem = this[i];cur = elem.nodeType === 1 && (elem.className?(" " + elem.className + " ").replace(rclass," "):" ");if(cur){j = 0;while(clazz = classes[j++]) {if(cur.indexOf(" " + clazz + " ") < 0){cur += clazz + " ";}} // only assign if different to avoid unneeded rendering.
	finalValue = jQuery.trim(cur);if(elem.className !== finalValue){elem.className = finalValue;}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=arguments.length === 0 || typeof value === "string" && value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}if(proceed){classes = (value || "").match(rnotwhite) || [];for(;i < len;i++) {elem = this[i]; // This expression is here for better compressibility (see addClass)
	cur = elem.nodeType === 1 && (elem.className?(" " + elem.className + " ").replace(rclass," "):"");if(cur){j = 0;while(clazz = classes[j++]) { // Remove *all* instances
	while(cur.indexOf(" " + clazz + " ") >= 0) {cur = cur.replace(" " + clazz + " "," ");}} // only assign if different to avoid unneeded rendering.
	finalValue = value?jQuery.trim(cur):"";if(elem.className !== finalValue){elem.className = finalValue;}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value;if(typeof stateVal === "boolean" && type === "string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}return this.each(function(){if(type === "string"){ // toggle individual class names
	var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite) || [];while(className = classNames[i++]) { // check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else {self.addClass(className);}} // Toggle whole class name
	}else if(type === strundefined || type === "boolean"){if(this.className){ // store className if set
	jQuery._data(this,"__className__",this.className);} // If the element has a class name or if we're passed "false",
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	this.className = this.className || value === false?"":jQuery._data(this,"__className__") || "";}});},hasClass:function hasClass(selector){var className=" " + selector + " ",i=0,l=this.length;for(;i < l;i++) {if(this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass," ").indexOf(className) >= 0){return true;}}return false;}}); // Return jQuery for attributes-only inclusion
	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ // Handle event binding
	jQuery.fn[name] = function(data,fn){return arguments.length > 0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);},bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){ // ( namespace ) or ( selector, types [, fn] )
	return arguments.length === 1?this.off(selector,"**"):this.off(types,selector || "**",fn);}});var nonce=jQuery.now();var rquery=/\?/;var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;jQuery.parseJSON = function(data){ // Attempt to parse using the native JSON parser first
	if(window.JSON && window.JSON.parse){ // Support: Android 2.3
	// Workaround failure to string-cast null input
	return window.JSON.parse(data + "");}var requireNonComma,depth=null,str=jQuery.trim(data + ""); // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){ // Force termination if we see a misplaced comma
	if(requireNonComma && comma){depth = 0;} // Perform no more replacements after returning to outermost depth
	if(depth === 0){return token;} // Commas must not follow "[", "{", or ","
	requireNonComma = open || comma; // Determine new depth
	// array/object open ("[" or "{"): depth += true - false (increment)
	// array/object close ("]" or "}"): depth += false - true (decrement)
	// other cases ("," or primitive): depth += true - true (numeric cast)
	depth += !close - !open; // Remove this token
	return "";}))?Function("return " + str)():jQuery.error("Invalid JSON: " + data);}; // Cross-browser xml parsing
	jQuery.parseXML = function(data){var xml,tmp;if(!data || typeof data !== "string"){return null;}try{if(window.DOMParser){ // Standard
	tmp = new DOMParser();xml = tmp.parseFromString(data,"text/xml");}else { // IE
	xml = new ActiveXObject("Microsoft.XMLDOM");xml.async = "false";xml.loadXML(data);}}catch(e) {xml = undefined;}if(!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: " + data);}return xml;};var  // Document location
	ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, /* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={}, /* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"); // #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try{ajaxLocation = location.href;}catch(e) { // Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement("a");ajaxLocation.href = "";ajaxLocation = ajaxLocation.href;} // Segment location into parts
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){ // dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression !== "string"){func = dataTypeExpression;dataTypeExpression = "*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite) || [];if(jQuery.isFunction(func)){ // For each dataType in the dataTypeExpression
	while(dataType = dataTypes[i++]) { // Prepend if requested
	if(dataType.charAt(0) === "+"){dataType = dataType.slice(1) || "*";(structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
	}else {(structure[dataType] = structure[dataType] || []).push(func);}}}};} // Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure === transports;function inspect(dataType){var selected;inspected[dataType] = true;jQuery.each(structure[dataType] || [],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return !(selected = dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");} // A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions || {};for(key in src) {if(src[key] !== undefined){(flatOptions[key]?target:deep || (deep = {}))[key] = src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;} /* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes; // Remove auto dataType and get content-type in the process
	while(dataTypes[0] === "*") {dataTypes.shift();if(ct === undefined){ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");}} // Check if we're dealing with a known content-type
	if(ct){for(type in contents) {if(contents[type] && contents[type].test(ct)){dataTypes.unshift(type);break;}}} // Check to see if we have a response for the expected dataType
	if(dataTypes[0] in responses){finalDataType = dataTypes[0];}else { // Try convertible dataTypes
	for(type in responses) {if(!dataTypes[0] || s.converters[type + " " + dataTypes[0]]){finalDataType = type;break;}if(!firstDataType){firstDataType = type;}} // Or just use first one
	finalDataType = finalDataType || firstDataType;} // If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType !== dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}} /* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={}, // Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice(); // Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters) {converters[conv.toLowerCase()] = s.converters[conv];}}current = dataTypes.shift(); // Convert to each sequential dataType
	while(current) {if(s.responseFields[current]){jqXHR[s.responseFields[current]] = response;} // Apply the dataFilter if provided
	if(!prev && isSuccess && s.dataFilter){response = s.dataFilter(response,s.dataType);}prev = current;current = dataTypes.shift();if(current){ // There's only work to do if current dataType is non-auto
	if(current === "*"){current = prev; // Convert response if prev dataType is non-auto and differs from current
	}else if(prev !== "*" && prev !== current){ // Seek a direct converter
	conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair
	if(!conv){for(conv2 in converters) { // If conv2 outputs current
	tmp = conv2.split(" ");if(tmp[1] === current){ // If prev can be converted to accepted input
	conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];if(conv){ // Condense equivalence converters
	if(conv === true){conv = converters[conv2]; // Otherwise, insert the intermediate dataType
	}else if(converters[conv2] !== true){current = tmp[0];dataTypes.unshift(tmp[1]);}break;}}}} // Apply converter (if not an equivalence)
	if(conv !== true){ // Unless errors are allowed to bubble, catch and return them
	if(conv && s["throws"]){response = conv(response);}else {try{response = conv(response);}catch(e) {return {state:"parsererror",error:conv?e:"No conversion from " + prev + " to " + current};}}}}}}return {state:"success",data:response};}jQuery.extend({ // Counter for holding the number of active queries
	active:0, // Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8", /*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"}, // Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{ // Convert anything to text
	"* text":String, // Text to html (true = no transformation)
	"text html":true, // Evaluate text as a json expression
	"text json":jQuery.parseJSON, // Parse text as xml
	"text xml":jQuery.parseXML}, // For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}}, // Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings? // Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): // Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), // Main method
	ajax:function ajax(url,options){ // If url is an object, simulate pre-1.5 signature
	if(typeof url === "object"){options = url;url = undefined;} // Force options to be an object
	options = options || {};var  // Cross-domain detection vars
	parts, // Loop variable
	i, // URL without anti-cache param
	cacheURL, // Response headers as string
	responseHeadersString, // timeout handle
	timeoutTimer, // To know if global events are to be dispatched
	fireGlobals,transport, // Response headers
	responseHeaders, // Create the final options object
	s=jQuery.ajaxSetup({},options), // Callbacks context
	callbackContext=s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context && (callbackContext.nodeType || callbackContext.jquery)?jQuery(callbackContext):jQuery.event, // Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), // Status-dependent callbacks
	_statusCode=s.statusCode || {}, // Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={}, // The jqXHR state
	state=0, // Default abort message
	strAbort="canceled", // Fake xhr
	jqXHR={readyState:0, // Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state === 2){if(!responseHeaders){responseHeaders = {};while(match = rheaders.exec(responseHeadersString)) {responseHeaders[match[1].toLowerCase()] = match[2];}}match = responseHeaders[key.toLowerCase()];}return match == null?null:match;}, // Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state === 2?responseHeadersString:null;}, // Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;requestHeaders[name] = value;}return this;}, // Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType = type;}return this;}, // Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state < 2){for(code in map) { // Lazy-add the new callback in a way that preserves old ones
	_statusCode[code] = [_statusCode[code],map[code]];}}else { // Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;}, // Cancel the request
	abort:function abort(statusText){var finalText=statusText || strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}}; // Attach deferreds
	deferred.promise(jqXHR).complete = completeDeferred.add;jqXHR.success = jqXHR.done;jqXHR.error = jqXHR.fail; // Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url = ((url || s.url || ajaxLocation) + "").replace(rhash,"").replace(rprotocol,ajaxLocParts[1] + "//"); // Alias method option to type as per ticket #12004
	s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list
	s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""]; // A cross-domain request is in order when we have a protocol:host:port mismatch
	if(s.crossDomain == null){parts = rurl.exec(s.url.toLowerCase());s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:"?"80":"443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:"?"80":"443"))));} // Convert data if not already a string
	if(s.data && s.processData && typeof s.data !== "string"){s.data = jQuery.param(s.data,s.traditional);} // Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); // If request was aborted inside a prefilter, stop there
	if(state === 2){return jqXHR;} // We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals = jQuery.event && s.global; // Watch for a new set of requests
	if(fireGlobals && jQuery.active++ === 0){jQuery.event.trigger("ajaxStart");} // Uppercase the type
	s.type = s.type.toUpperCase(); // Determine if request has content
	s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL = s.url; // More options handling for requests with no content
	if(!s.hasContent){ // If data is available, append data to url
	if(s.data){cacheURL = s.url += (rquery.test(cacheURL)?"&":"?") + s.data; // #9682: remove data so that it's not used in an eventual retry
	delete s.data;} // Add anti-cache in url if needed
	if(s.cache === false){s.url = rts.test(cacheURL)? // If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_=" + nonce++): // Otherwise add one to the end
	cacheURL + (rquery.test(cacheURL)?"&":"?") + "_=" + nonce++;}} // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} // Set the correct header, if data is being sent
	if(s.data && s.hasContent && s.contentType !== false || options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} // Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0] && s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*"?", " + allTypes + "; q=0.01":""):s.accepts["*"]); // Check for headers option
	for(i in s.headers) {jqXHR.setRequestHeader(i,s.headers[i]);} // Allow custom headers/mimetypes and early abort
	if(s.beforeSend && (s.beforeSend.call(callbackContext,jqXHR,s) === false || state === 2)){ // Abort if not done already and return
	return jqXHR.abort();} // aborting is no longer a cancellation
	strAbort = "abort"; // Install callbacks on deferreds
	for(i in {success:1,error:1,complete:1}) {jqXHR[i](s[i]);} // Get transport
	transport = inspectPrefiltersOrTransports(transports,s,options,jqXHR); // If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else {jqXHR.readyState = 1; // Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} // Timeout
	if(s.async && s.timeout > 0){timeoutTimer = setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state = 1;transport.send(requestHeaders,done);}catch(e) { // Propagate exception as error if not done
	if(state < 2){done(-1,e); // Simply rethrow otherwise
	}else {throw e;}}} // Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; // Called once
	if(state === 2){return;} // State is "done" now
	state = 2; // Clear timeout if it exists
	if(timeoutTimer){clearTimeout(timeoutTimer);} // Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport = undefined; // Cache response headers
	responseHeadersString = headers || ""; // Set readyState
	jqXHR.readyState = status > 0?4:0; // Determine if successful
	isSuccess = status >= 200 && status < 300 || status === 304; // Get response data
	if(responses){response = ajaxHandleResponses(s,jqXHR,responses);} // Convert no matter what (that way responseXXX fields are always set)
	response = ajaxConvert(s,response,jqXHR,isSuccess); // If successful, handle type chaining
	if(isSuccess){ // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified = jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL] = modified;}modified = jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL] = modified;}} // if no content
	if(status === 204 || s.type === "HEAD"){statusText = "nocontent"; // if not modified
	}else if(status === 304){statusText = "notmodified"; // If we have data, let's convert it
	}else {statusText = response.state;success = response.data;error = response.error;isSuccess = !error;}}else { // We extract error from statusText
	// then normalize statusText and status for non-aborts
	error = statusText;if(status || !statusText){statusText = "error";if(status < 0){status = 0;}}} // Set data for the fake xhr object
	jqXHR.status = status;jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else {deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} // Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode = undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} // Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); // Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method] = function(url,data,callback,type){ // shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type = type || callback;callback = data;data = undefined;}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery._evalUrl = function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){ // The elements to wrap the target around
	var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstChild && elem.firstChild.nodeType === 1) {elem = elem.firstChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden = function(elem){ // Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && (elem.style && elem.style.display || jQuery.css(elem,"display")) === "none";};jQuery.expr.filters.visible = function(elem){return !jQuery.expr.filters.hidden(elem);};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){ // Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional || rbracket.test(prefix)){ // Treat each array item as a scalar.
	add(prefix,v);}else { // Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix + "[" + (typeof v === "object"?i:"") + "]",v,traditional,add);}});}else if(!traditional && jQuery.type(obj) === "object"){ // Serialize object item.
	for(name in obj) {buildParams(prefix + "[" + name + "]",obj[name],traditional,add);}}else { // Serialize scalar item.
	add(prefix,obj);}} // Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function(a,traditional){var prefix,s=[],add=function add(key,value){ // If value is a function, invoke it and return its value
	value = jQuery.isFunction(value)?value():value == null?"":value;s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);}; // Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional === undefined){traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;} // If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)){ // Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else { // If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a) {buildParams(prefix,a[prefix],traditional,add);}} // Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){ // Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; // Use .is(":disabled") so that fieldset[disabled] works
	return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val == null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return {name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}}); // Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined? // Support: IE6+
	function(){ // XHR cannot access local files, always use ActiveX for that case
	return !this.isLocal &&  // Support: IE7-8
	// oldIE XHR does not support non-RFC2616 methods (#13240)
	// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
	// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
	// Although this check for six methods instead of eight
	// since IE also does not support "trace" and "connect"
	/^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();}: // For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;var xhrId=0,xhrCallbacks={},xhrSupported=jQuery.ajaxSettings.xhr(); // Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks) {xhrCallbacks[key](undefined,true);}});} // Determine support properties
	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;xhrSupported = support.ajax = !!xhrSupported; // Create transport if the browser can provide an xhr
	if(xhrSupported){jQuery.ajaxTransport(function(options){ // Cross domain only allowed if supported through XMLHttpRequest
	if(!options.crossDomain || support.cors){var callback;return {send:function send(headers,complete){var i,xhr=options.xhr(),id=++xhrId; // Open the socket
	xhr.open(options.type,options.url,options.async,options.username,options.password); // Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields) {xhr[i] = options.xhrFields[i];}} // Override mime type if needed
	if(options.mimeType && xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);} // X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain && !headers["X-Requested-With"]){headers["X-Requested-With"] = "XMLHttpRequest";} // Set headers
	for(i in headers) { // Support: IE<9
	// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
	// request header to a null-value.
	//
	// To keep consistent with other XHR implementations, cast the value
	// to string and ignore `undefined`.
	if(headers[i] !== undefined){xhr.setRequestHeader(i,headers[i] + "");}} // Do send the request
	// This may raise an exception which is actually
	// handled in jQuery.ajax (so no try/catch here)
	xhr.send(options.hasContent && options.data || null); // Listener
	callback = function(_,isAbort){var status,statusText,responses; // Was never called and is aborted or complete
	if(callback && (isAbort || xhr.readyState === 4)){ // Clean up
	delete xhrCallbacks[id];callback = undefined;xhr.onreadystatechange = jQuery.noop; // Abort manually if needed
	if(isAbort){if(xhr.readyState !== 4){xhr.abort();}}else {responses = {};status = xhr.status; // Support: IE<10
	// Accessing binary-data responseText throws an exception
	// (#11426)
	if(typeof xhr.responseText === "string"){responses.text = xhr.responseText;} // Firefox throws an exception when accessing
	// statusText for faulty cross-domain requests
	try{statusText = xhr.statusText;}catch(e) { // We normalize with Webkit giving an empty statusText
	statusText = "";} // Filter status for non standard behaviors
	// If the request is local and we have data: assume a success
	// (success with no data won't get notified, that's the best we
	// can do given current implementations)
	if(!status && options.isLocal && !options.crossDomain){status = responses.text?200:404; // IE - #1450: sometimes returns 1223 when it should be 204
	}else if(status === 1223){status = 204;}}} // Call complete if needed
	if(responses){complete(status,statusText,responses,xhr.getAllResponseHeaders());}};if(!options.async){ // if we're in sync mode we fire the callback
	callback();}else if(xhr.readyState === 4){ // (IE6 & IE7) if it's in cache and has been
	// retrieved directly we need to fire the callback
	setTimeout(callback);}else { // Add to the list of active xhr callbacks
	xhr.onreadystatechange = xhrCallbacks[id] = callback;}},abort:function abort(){if(callback){callback(undefined,true);}}};}});} // Functions to create xhrs
	function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e) {}}function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e) {}} // Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}}); // Handle cache's special case and global
	jQuery.ajaxPrefilter("script",function(s){if(s.cache === undefined){s.cache = false;}if(s.crossDomain){s.type = "GET";s.global = false;}}); // Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){ // This transport only deals with cross domain requests
	if(s.crossDomain){var script,head=document.head || jQuery("head")[0] || document.documentElement;return {send:function send(_,callback){script = document.createElement("script");script.async = true;if(s.scriptCharset){script.charset = s.scriptCharset;}script.src = s.url; // Attach handlers for all browsers
	script.onload = script.onreadystatechange = function(_,isAbort){if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState)){ // Handle memory leak in IE
	script.onload = script.onreadystatechange = null; // Remove the script
	if(script.parentNode){script.parentNode.removeChild(script);} // Dereference the script
	script = null; // Callback if not abort
	if(!isAbort){callback(200,"success");}}}; // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
	// Use native DOM manipulation to avoid our domManip AJAX trickery
	head.insertBefore(script,head.firstChild);},abort:function abort(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/; // Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop() || jQuery.expando + "_" + nonce++;this[callback] = true;return callback;}}); // Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp !== false && (rjsonp.test(s.url)?"url":typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp || s.dataTypes[0] === "jsonp"){ // Get callback name, remembering preexisting value associated with it
	callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; // Insert callback into url or form data
	if(jsonProp){s[jsonProp] = s[jsonProp].replace(rjsonp,"$1" + callbackName);}else if(s.jsonp !== false){s.url += (rquery.test(s.url)?"&":"?") + s.jsonp + "=" + callbackName;} // Use data converter to retrieve json after script execution
	s.converters["script json"] = function(){if(!responseContainer){jQuery.error(callbackName + " was not called");}return responseContainer[0];}; // force json dataType
	s.dataTypes[0] = "json"; // Install callback
	overwritten = window[callbackName];window[callbackName] = function(){responseContainer = arguments;}; // Clean-up function (fires after converters)
	jqXHR.always(function(){ // Restore preexisting value
	window[callbackName] = overwritten; // Save back as free
	if(s[callbackName]){ // make sure that re-using the options doesn't screw things around
	s.jsonpCallback = originalSettings.jsonpCallback; // save the callback name for future use
	oldCallbacks.push(callbackName);} // Call if it was a function and we have a response
	if(responseContainer && jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer = overwritten = undefined;}); // Delegate to script
	return "script";}}); // data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function(data,context,keepScripts){if(!data || typeof data !== "string"){return null;}if(typeof context === "boolean"){keepScripts = context;context = false;}context = context || document;var parsed=rsingleTag.exec(data),scripts=!keepScripts && []; // Single tag
	if(parsed){return [context.createElement(parsed[1])];}parsed = jQuery.buildFragment([data],context,scripts);if(scripts && scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);}; // Keep a copy of the old load method
	var _load=jQuery.fn.load; /**
	 * Load a url into a page
	 */jQuery.fn.load = function(url,params,callback){if(typeof url !== "string" && _load){return _load.apply(this,arguments);}var selector,response,type,self=this,off=url.indexOf(" ");if(off >= 0){selector = jQuery.trim(url.slice(off,url.length));url = url.slice(0,off);} // If it's a function
	if(jQuery.isFunction(params)){ // We assume that it's the callback
	callback = params;params = undefined; // Otherwise, build a param string
	}else if(params && typeof params === "object"){type = "POST";} // If we have elements to modify, make the request
	if(self.length > 0){jQuery.ajax({url:url, // if "type" variable is undefined, then "GET" method will be used
	type:type,dataType:"html",data:params}).done(function(responseText){ // Save response for use in complete callback
	response = arguments;self.html(selector? // If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): // Otherwise use the full result
	responseText);}).complete(callback && function(jqXHR,status){self.each(callback,response || [jqXHR.responseText,status,jqXHR]);});}return this;}; // Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type] = function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated = function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem === fn.elem;}).length;};var docElem=window.document.documentElement; /**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType === 9?elem.defaultView || elem.parentWindow:false;}jQuery.offset = {setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={}; // set position first, in-case top/left are set even on static elem
	if(position === "static"){elem.style.position = "relative";}curOffset = curElem.offset();curCSSTop = jQuery.css(elem,"top");curCSSLeft = jQuery.css(elem,"left");calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto",[curCSSTop,curCSSLeft]) > -1; // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition = curElem.position();curTop = curPosition.top;curLeft = curPosition.left;}else {curTop = parseFloat(curCSSTop) || 0;curLeft = parseFloat(curCSSLeft) || 0;}if(jQuery.isFunction(options)){options = options.call(elem,i,curOffset);}if(options.top != null){props.top = options.top - curOffset.top + curTop;}if(options.left != null){props.left = options.left - curOffset.left + curLeft;}if("using" in options){options.using.call(elem,props);}else {curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options === undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,box={top:0,left:0},elem=this[0],doc=elem && elem.ownerDocument;if(!doc){return;}docElem = doc.documentElement; // Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;} // If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if(typeof elem.getBoundingClientRect !== strundefined){box = elem.getBoundingClientRect();}win = getWindow(doc);return {top:box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),left:box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)};},position:function position(){if(!this[0]){return;}var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0]; // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
	if(jQuery.css(elem,"position") === "fixed"){ // we assume that getBoundingClientRect is available when computed position is fixed
	offset = elem.getBoundingClientRect();}else { // Get *real* offsetParent
	offsetParent = this.offsetParent(); // Get correct offsets
	offset = this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset = offsetParent.offset();} // Add offsetParent borders
	parentOffset.top += jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left += jQuery.css(offsetParent[0],"borderLeftWidth",true);} // Subtract parent offsets and element margins
	// note: when an element has margin: auto the offsetLeft and marginLeft
	// are the same in Safari causing offset.left to incorrectly be 0
	return {top:offset.top - parentOffset.top - jQuery.css(elem,"marginTop",true),left:offset.left - parentOffset.left - jQuery.css(elem,"marginLeft",true)};},offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent || docElem;while(offsetParent && (!jQuery.nodeName(offsetParent,"html") && jQuery.css(offsetParent,"position") === "static")) {offsetParent = offsetParent.offsetParent;}return offsetParent || docElem;});}}); // Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method] = function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val === undefined){return win?prop in win?win[prop]:win.document.documentElement[method]:elem[method];}if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else {elem[method] = val;}},method,val,arguments.length,null);};}); // Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed = curCSS(elem,prop); // if curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop] + "px":computed;}});}); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner" + name,content:type,"":"outer" + name},function(defaultExtra,funcName){ // margin is only for outerHeight, outerWidth
	jQuery.fn[funcName] = function(margin,value){var chainable=arguments.length && (defaultExtra || typeof margin !== "boolean"),extra=defaultExtra || (margin === true || value === true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){ // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client" + name];} // Get document width or height
	if(elem.nodeType === 9){doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
	// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
	return Math.max(elem.body["scroll" + name],doc["scroll" + name],elem.body["offset" + name],doc["offset" + name],doc["client" + name]);}return value === undefined? // Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra): // Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});}); // The number of elements contained in the matched element set
	jQuery.fn.size = function(){return this.length;};jQuery.fn.andSelf = jQuery.fn.addBack; // Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var  // Map over jQuery in case of overwrite
	_jQuery=window.jQuery, // Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict = function(deep){if(window.$ === jQuery){window.$ = _$;}if(deep && window.jQuery === jQuery){window.jQuery = _jQuery;}return jQuery;}; // Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(typeof noGlobal === strundefined){window.jQuery = window.$ = jQuery;}return jQuery;}); // Otherwise append directly

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.4.6
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/"use strict";(function(Q,X,w){'use strict';function I(b){return function(){var a=arguments[0],c;c = "[" + (b?b + ":":"") + a + "] http://errors.angularjs.org/1.4.6/" + (b?b + "/":"") + a;for(a = 1;a < arguments.length;a++) {c = c + (1 == a?"?":"&") + "p" + (a - 1) + "=";var d=encodeURIComponent,e;e = arguments[a];e = "function" == typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined" == typeof e?"undefined":"string" != typeof e?JSON.stringify(e):e;c += d(e);}return Error(c);};}function Da(b){if(null == b || Za(b))return !1;var a="length" in Object(b) && b.length;return b.nodeType === pa && a?!0:G(b) || J(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b;}function m(b,a,c){var d,e;if(b)if(x(b))for(d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c,b[d],d,b);else if(J(b) || Da(b)){var f="object" !== typeof b;d = 0;for(e = b.length;d < e;d++) (f || d in b) && a.call(c,b[d],d,b);}else if(b.forEach && b.forEach !== m)b.forEach(a,c,b);else if(lc(b))for(d in b) a.call(c,b[d],d,b);else if("function" === typeof b.hasOwnProperty)for(d in b) b.hasOwnProperty(d) && a.call(c,b[d],d,b);else for(d in b) ta.call(b,d) && a.call(c,b[d],d,b);return b;}function mc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e < d.length;e++) a.call(c,b[d[e]],d[e]);return d;}function nc(b){return function(a,c){b(c,a);};}function Sd(){return ++nb;}function oc(b,a){a?b.$$hashKey = a:delete b.$$hashKey;}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e < f;++e) {var g=a[e];if(B(g) || x(g))for(var h=Object.keys(g),l=0,k=h.length;l < k;l++) {var n=h[l],p=g[n];c && B(p)?da(p)?b[n] = new Date(p.valueOf()):Oa(p)?b[n] = new RegExp(p):(B(b[n]) || (b[n] = J(p)?[]:{}),Mb(b[n],[p],!0)):b[n] = p;}}oc(b,d);return b;}function P(b){return Mb(b,ua.call(arguments,1),!1);}function Td(b){return Mb(b,ua.call(arguments,1),!0);}function Y(b){return parseInt(b,10);}function Nb(b,a){return P(Object.create(b),a);}function y(){}function $a(b){return b;}function qa(b){return function(){return b;};}function pc(b){return x(b.toString) && b.toString !== Object.prototype.toString;}function v(b){return "undefined" === typeof b;}function A(b){return "undefined" !== typeof b;}function B(b){return null !== b && "object" === typeof b;}function lc(b){return null !== b && "object" === typeof b && !qc(b);}function G(b){return "string" === typeof b;}function V(b){return "number" === typeof b;}function da(b){return "[object Date]" === va.call(b);}function x(b){return "function" === typeof b;}function Oa(b){return "[object RegExp]" === va.call(b);}function Za(b){return b && b.window === b;}function ab(b){return b && b.$evalAsync && b.$watch;}function bb(b){return "boolean" === typeof b;}function rc(b){return !(!b || !(b.nodeName || b.prop && b.attr && b.find));}function Ud(b){var a={};b = b.split(",");var c;for(c = 0;c < b.length;c++) a[b[c]] = !0;return a;}function wa(b){return F(b.nodeName || b[0] && b[0].nodeName);}function cb(b,a){var c=b.indexOf(a);0 <= c && b.splice(c,1);return c;}function ga(_x12,_x13,_x14,_x15){var _again=true;_function: while(_again) {var b=_x12,a=_x13,c=_x14,d=_x15;e = f = undefined;_again = false;if(Za(b) || ab(b))throw Ea("cpws");if(sc.test(va.call(a)))throw Ea("cpta");if(a){if(b === a)throw Ea("cpi");c = c || [];d = d || [];B(b) && (c.push(b),d.push(a));var e;if(J(b))for(e = a.length = 0;e < b.length;e++) a.push(ga(b[e],null,c,d));else {var f=a.$$hashKey;J(a)?a.length = 0:m(a,function(b,c){delete a[c];});if(lc(b))for(e in b) a[e] = ga(b[e],null,c,d);else if(b && "function" === typeof b.hasOwnProperty)for(e in b) b.hasOwnProperty(e) && (a[e] = ga(b[e],null,c,d));else for(e in b) ta.call(b,e) && (a[e] = ga(b[e],null,c,d));oc(a,f);}}else if((a = b,B(b))){if(c && -1 !== (f = c.indexOf(b)))return d[f];if(J(b)){_x12 = b;_x13 = [];_x14 = c;_x15 = d;_again = true;continue _function;}if(sc.test(va.call(b)))a = new b.constructor(b);else if(da(b))a = new Date(b.getTime());else if(Oa(b))a = new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex = b.lastIndex;else if(x(b.cloneNode))a = b.cloneNode(!0);else {e = Object.create(qc(b));_x12 = b;_x13 = e;_x14 = c;_x15 = d;_again = true;continue _function;}d && (c.push(b),d.push(a));}return a;}}function ja(b,a){if(J(b)){a = a || [];for(var c=0,d=b.length;c < d;c++) a[c] = b[c];}else if(B(b))for(c in (a = a || {},b)) if("$" !== c.charAt(0) || "$" !== c.charAt(1))a[c] = b[c];return a || b;}function ka(_x16,_x17){var _again2=true;_function2: while(_again2) {var b=_x16,a=_x17;c = d = undefined;_again2 = false;if(b === a)return !0;if(null === b || null === a)return !1;if(b !== b && a !== a)return !0;var c=typeof b,d;if(c == typeof a && "object" == c)if(J(b)){if(!J(a))return !1;if((c = b.length) == a.length){for(d = 0;d < c;d++) if(!ka(b[d],a[d]))return !1;return !0;}}else {if(da(b)){if(da(a)){_x16 = b.getTime();_x17 = a.getTime();_again2 = true;continue _function2;}else {return !1;}}if(Oa(b))return Oa(a)?b.toString() == a.toString():!1;if(ab(b) || ab(a) || Za(b) || Za(a) || J(a) || da(a) || Oa(a))return !1;c = ha();for(d in b) if("$" !== d.charAt(0) && !x(b[d])){if(!ka(b[d],a[d]))return !1;c[d] = !0;}for(d in a) if(!(d in c) && "$" !== d.charAt(0) && A(a[d]) && !x(a[d]))return !1;return !0;}return !1;}}function db(b,a,c){return b.concat(ua.call(a,c));}function tc(b,a){var c=2 < arguments.length?ua.call(arguments,2):[];return !x(a) || a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,db(c,arguments,0)):a.apply(b,c);}:function(){return arguments.length?a.apply(b,arguments):a.call(b);};}function Vd(b,a){var c=a;"string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1)?c = w:Za(a)?c = "$WINDOW":a && X === a?c = "$DOCUMENT":ab(a) && (c = "$SCOPE");return c;}function eb(b,a){if("undefined" === typeof b)return w;V(a) || (a = a?2:null);return JSON.stringify(b,Vd,a);}function uc(b){return G(b)?JSON.parse(b):b;}function vc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 " + b) / 6E4;return isNaN(c)?a:c;}function Ob(b,a,c){c = c?-1:1;var d=vc(a,b.getTimezoneOffset());a = b;b = c * (d - b.getTimezoneOffset());a = new Date(a.getTime());a.setMinutes(a.getMinutes() + b);return a;}function xa(b){b = C(b).clone();try{b.empty();}catch(a) {}var c=C("<div>").append(b).html();try{return b[0].nodeType === Pa?F(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return "<" + F(b);});}catch(d) {return F(c);}}function wc(b){try{return decodeURIComponent(b);}catch(a) {}}function xc(b){var a={};m((b || "").split("&"),function(b){var d,e,f;b && (e = b = b.replace(/\+/g,"%20"),d = b.indexOf("="),-1 !== d && (e = b.substring(0,d),f = b.substring(d + 1)),e = wc(e),A(e) && (f = A(f)?wc(f):!0,ta.call(a,e)?J(a[e])?a[e].push(f):a[e] = [a[e],f]:a[e] = f));});return a;}function Pb(b){var a=[];m(b,function(b,d){J(b)?m(b,function(b){a.push(la(d,!0) + (!0 === b?"":"=" + la(b,!0)));}):a.push(la(d,!0) + (!0 === b?"":"=" + la(b,!0)));});return a.length?a.join("&"):"";}function ob(b){return la(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+");}function la(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+");}function Wd(b,a){var c,d,e=Qa.length;for(d = 0;d < e;++d) if((c = Qa[d] + a,G(c = b.getAttribute(c))))return c;return null;}function Xd(b,a){var c,d,e={};m(Qa,function(a){a += "app";!c && b.hasAttribute && b.hasAttribute(a) && (c = b,d = b.getAttribute(a));});m(Qa,function(a){a += "app";var e;!c && (e = b.querySelector("[" + a.replace(":","\\:") + "]")) && (c = e,d = e.getAttribute(a));});c && (e.strictDi = null !== Wd(c,"strict-di"),a(c,d?[d]:[],e));}function yc(b,a,c){B(c) || (c = {});c = P({strictDi:!1},c);var d=function d(){b = C(b);if(b.injector()){var d=b[0] === X?"document":xa(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a = a || [];a.unshift(["$provide",function(a){a.value("$rootElement",b);}]);c.debugInfoEnabled && a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0);}]);a.unshift("ng");d = fb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a);});}]);return d;},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q && e.test(Q.name) && (c.debugInfoEnabled = !0,Q.name = Q.name.replace(e,""));if(Q && !f.test(Q.name))return d();Q.name = Q.name.replace(f,"");aa.resumeBootstrap = function(b){m(b,function(b){a.push(b);});return d();};x(aa.resumeDeferredBootstrap) && aa.resumeDeferredBootstrap();}function Yd(){Q.name = "NG_ENABLE_DEBUG_INFO!" + Q.name;Q.location.reload();}function Zd(b){b = aa.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability");}function zc(b,a){a = a || "_";return b.replace($d,function(b,d){return (d?a:"") + b.toLowerCase();});}function ae(){var b;if(!Ac){var a=pb();(ra = v(a)?Q.jQuery:a?Q[a]:w) && ra.fn.on?(C = ra,P(ra.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),b = ra.cleanData,ra.cleanData = function(a){var d;if(Qb)Qb = !1;else for(var e=0,f;null != (f = a[e]);e++) (d = ra._data(f,"events")) && d.$destroy && ra(f).triggerHandler("$destroy");b(a);}):C = R;aa.element = C;Ac = !0;}}function qb(b,a,c){if(!b)throw Ea("areq",a || "?",c || "required");return b;}function Sa(b,a,c){c && J(b) && (b = b[b.length - 1]);qb(x(b),a,"not a function, got " + (b && "object" === typeof b?b.constructor.name || "Object":typeof b));return b;}function Ta(b,a){if("hasOwnProperty" === b)throw Ea("badname",a);}function Bc(b,a,c){if(!a)return b;a = a.split(".");for(var d,e=b,f=a.length,g=0;g < f;g++) d = a[g],b && (b = (e = b)[d]);return !c && x(b)?tc(e,b):b;}function rb(b){for(var a=b[0],c=b[b.length - 1],d,e=1;a !== c && (a = a.nextSibling);e++) if(d || b[e] !== a)d || (d = C(ua.call(b,0,e))),d.push(a);return d || b;}function ha(){return Object.create(null);}function be(b){function a(a,b,c){return a[b] || (a[b] = c());}var c=I("$injector"),d=I("ng");b = a(b,"angular",Object);b.$$minErr = b.$$minErr || I;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty" === f)throw d("badname","module");g && b.hasOwnProperty(f) && (b[f] = null);return a(b,f,function(){function a(b,c,e,f){f || (f = d);return function(){f[e || "push"]([b,c,arguments]);return E;};}function b(a,c){return function(b,e){e && x(e) && (e.$$moduleName = f);d.push([a,c,arguments]);return E;};}if(!g)throw c("nomod",f);var d=[],e=[],r=[],t=a("$injector","invoke","push",e),E={_invokeQueue:d,_configBlocks:e,_runBlocks:r,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:t,run:function run(a){r.push(a);return this;}};h && t(h);return E;});};});}function ce(b){P(b,{bootstrap:yc,copy:ga,extend:P,merge:Td,equals:ka,element:C,forEach:m,injector:fb,noop:y,bind:tc,toJson:eb,fromJson:uc,identity:$a,isUndefined:v,isDefined:A,isString:G,isFunction:x,isObject:B,isNumber:V,isElement:rc,isArray:J,version:de,isDate:da,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:Zd,$$minErr:I,$$csp:Fa,reloadWithDebugInfo:Yd});Rb = be(Q);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ee});a.provider("$compile",Cc).directive({a:fe,input:Dc,textarea:Dc,form:ge,script:he,select:ie,style:je,option:ke,ngBind:le,ngBindHtml:me,ngBindTemplate:ne,ngClass:oe,ngClassEven:pe,ngClassOdd:qe,ngCloak:re,ngController:se,ngForm:te,ngHide:ue,ngIf:ve,ngInclude:we,ngInit:xe,ngNonBindable:ye,ngPluralize:ze,ngRepeat:Ae,ngShow:Be,ngStyle:Ce,ngSwitch:De,ngSwitchWhen:Ee,ngSwitchDefault:Fe,ngOptions:Ge,ngTransclude:He,ngModel:Ie,ngList:Je,ngChange:Ke,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Le,ngModelOptions:Me}).directive({ngInclude:Ne}).directive(tb).directive(Ic);a.provider({$anchorScroll:Oe,$animate:Pe,$animateCss:Qe,$$animateQueue:Re,$$AnimateRunner:Se,$browser:Te,$cacheFactory:Ue,$controller:Ve,$document:We,$exceptionHandler:Xe,$filter:Jc,$$forceReflow:Ye,$interpolate:Ze,$interval:$e,$http:af,$httpParamSerializer:bf,$httpParamSerializerJQLike:cf,$httpBackend:df,$location:ef,$log:ff,$parse:gf,$rootScope:hf,$q:jf,$$q:kf,$sce:lf,$sceDelegate:mf,$sniffer:nf,$templateCache:of,$templateRequest:pf,$$testability:qf,$timeout:rf,$window:sf,$$rAF:tf,$$jqLite:uf,$$HashMap:vf,$$cookieReader:wf});}]);}function gb(b){return b.replace(xf,function(a,b,d,e){return e?d.toUpperCase():d;}).replace(yf,"Moz$1");}function Kc(b){b = b.nodeType;return b === pa || !b || 9 === b;}function Lc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c = c || e.appendChild(a.createElement("div"));d = (zf.exec(b) || ["",""])[1].toLowerCase();d = ma[d] || ma._default;c.innerHTML = d[1] + b.replace(Af,"<$1></$2>") + d[2];for(d = d[0];d--;) c = c.lastChild;f = db(f,c.childNodes);c = e.firstChild;c.textContent = "";}else f.push(a.createTextNode(b));e.textContent = "";e.innerHTML = "";m(f,function(a){e.appendChild(a);});return e;}function R(b){if(b instanceof R)return b;var a;G(b) && (b = T(b),a = !0);if(!(this instanceof R)){if(a && "<" != b.charAt(0))throw Tb("nosel");return new R(b);}if(a){a = X;var c;b = (c = Bf.exec(b))?[a.createElement(c[1])]:(c = Lc(b,a))?c.childNodes:[];}Mc(this,b);}function Ub(b){return b.cloneNode(!0);}function ub(b,a){a || vb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d < e;d++) vb(c[d]);}function Nc(b,a,c,d){if(A(d))throw Tb("offargs");var e=(d = wb(b)) && d.events,f=d && d.handle;if(f)if(a)m(a.split(" "),function(a){if(A(c)){var d=e[a];cb(d || [],c);if(d && 0 < d.length)return;}b.removeEventListener(a,f,!1);delete e[a];});else for(a in e) "$destroy" !== a && b.removeEventListener(a,f,!1),delete e[a];}function vb(b,a){var c=b.ng339,d=c && hb[c];d && (a?delete d.data[a]:(d.handle && (d.events.$destroy && d.handle({},"$destroy"),Nc(b)),delete hb[c],b.ng339 = w));}function wb(b,a){var c=b.ng339,c=c && hb[c];a && !c && (b.ng339 = c = ++Cf,c = hb[c] = {events:{},data:{},handle:w});return c;}function Vb(b,a,c){if(Kc(b)){var d=A(c),e=!d && a && !B(a),f=!a;b = (b = wb(b,!e)) && b.data;if(d)b[a] = c;else {if(f)return b;if(e)return b && b[a];P(b,a);}}}function xb(b,a){return b.getAttribute?-1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g," ").indexOf(" " + a + " "):!1;}function yb(b,a){a && b.setAttribute && m(a.split(" "),function(a){b.setAttribute("class",T((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g," ").replace(" " + T(a) + " "," ")));});}function zb(b,a){if(a && b.setAttribute){var c=(" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a = T(a);-1 === c.indexOf(" " + a + " ") && (c += a + " ");});b.setAttribute("class",T(c));}}function Mc(b,a){if(a)if(a.nodeType)b[b.length++] = a;else {var c=a.length;if("number" === typeof c && a.window !== a){if(c)for(var d=0;d < c;d++) b[b.length++] = a[d];}else b[b.length++] = a;}}function Oc(b,a){return Ab(b,"$" + (a || "ngController") + "Controller");}function Ab(b,a,c){9 == b.nodeType && (b = b.documentElement);for(a = J(a)?a:[a];b;) {for(var d=0,e=a.length;d < e;d++) if(A(c = C.data(b,a[d])))return c;b = b.parentNode || 11 === b.nodeType && b.host;}}function Pc(b){for(ub(b,!0);b.firstChild;) b.removeChild(b.firstChild);}function Wb(b,a){a || ub(b);var c=b.parentNode;c && c.removeChild(b);}function Df(b,a){a = a || Q;if("complete" === a.document.readyState)a.setTimeout(b);else C(a).on("load",b);}function Qc(b,a){var c=Bb[a.toLowerCase()];return c && Rc[wa(b)] && c;}function Ef(b,a){var c=(function(_c){function c(_x,_x2){return _c.apply(this,arguments);}c.toString = function(){return _c.toString();};return c;})(function(c,e){c.isDefaultPrevented = function(){return c.defaultPrevented;};var f=a[e || c.type],g=f?f.length:0;if(g){if(v(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation = function(){c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);};}c.isImmediatePropagationStopped = function(){return !0 === c.immediatePropagationStopped;};1 < g && (f = ja(f));for(var l=0;l < g;l++) c.isImmediatePropagationStopped() || f[l].call(b,c);}});c.elem = b;return c;}function uf(){this.$get = function(){return P(R,{hasClass:function hasClass(b,a){b.attr && (b = b[0]);return xb(b,a);},addClass:function addClass(b,a){b.attr && (b = b[0]);return zb(b,a);},removeClass:function removeClass(b,a){b.attr && (b = b[0]);return yb(b,a);}});};}function Ga(b,a){var c=b && b.$$hashKey;if(c)return ("function" === typeof c && (c = b.$$hashKey()),c);c = typeof b;return c = "function" == c || "object" == c && null !== b?b.$$hashKey = c + ":" + (a || Sd)():c + ":" + b;}function Ua(b,a){if(a){var c=0;this.nextUid = function(){return ++c;};}m(b,this.put,this);}function Ff(b){return (b = b.toString().replace(Sc,"").match(Tc))?"function(" + (b[1] || "").replace(/[\s\r\n]+/," ") + ")":"fn";}function fb(b,a){function c(a){return function(b,c){if(B(b))m(b,nc(a));else return a(b,c);};}function d(a,b){Ta(a,"service");if(x(b) || J(b))b = r.instantiate(b);if(!b.$get)throw Ha("pget",a);return p[a + "Provider"] = b;}function e(a,b){return function(){var c=E.invoke(b,this);if(v(c))throw Ha("undef",a);return c;};}function f(a,b,c){return d(a,{$get:!1 !== c?e(a,b):b});}function g(a){qb(v(a) || J(a),"modulesToLoad","not an array");var b=[],c;m(a,function(a){function d(a){var b,c;b = 0;for(c = a.length;b < c;b++) {var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2]);}}if(!n.get(a)){n.put(a,!0);try{G(a)?(c = Rb(a),b = b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):x(a)?b.push(r.invoke(a)):J(a)?b.push(r.invoke(a)):Sa(a,"module");}catch(e) {throw (J(a) && (a = a[a.length - 1]),e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack),Ha("modulerr",a,e.stack || e.message || e));}}});return b;}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a] === l)throw Ha("cdep",a + " <- " + k.join(" <- "));return b[a];}try{return (k.unshift(a),b[a] = l,b[a] = c(a,e));}catch(f) {throw (b[a] === l && delete b[a],f);}finally {k.shift();}}function e(b,c,f,h){"string" === typeof f && (h = f,f = null);var g=[],k=fb.$$annotate(b,a,h),l,r,n;r = 0;for(l = k.length;r < l;r++) {n = k[r];if("string" !== typeof n)throw Ha("itkn",n);g.push(f && f.hasOwnProperty(n)?f[n]:d(n,h));}J(b) && (b = b[l]);return b.apply(c,g);}return {invoke:e,instantiate:function instantiate(a,b,c){var d=Object.create((J(a)?a[a.length - 1]:a).prototype || null);a = e(a,d,b,c);return B(a) || x(a)?a:d;},get:d,annotate:fb.$$annotate,has:function has(a){return p.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);}};}a = !0 === a;var l={},k=[],n=new Ua([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b);}]);}),value:c(function(a,b){return f(a,qa(b),!1);}),constant:c(function(a,b){Ta(a,"constant");p[a] = b;t[a] = b;}),decorator:function decorator(a,b){var c=r.get(a + "Provider"),d=c.$get;c.$get = function(){var a=E.invoke(d,c);return E.invoke(b,null,{$delegate:a});};}}},r=p.$injector = h(p,function(a,b){aa.isString(b) && k.push(b);throw Ha("unpr",k.join(" <- "));}),t={},E=t.$injector = h(t,function(a,b){var c=r.get(a + "Provider",b);return E.invoke(c.$get,c,w,a);});m(g(b),function(a){a && E.invoke(a);});return E;}function Oe(){var b=!0;this.disableAutoScrolling = function(){b = !1;};this.$get = ["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a" === wa(a))return (b = a,!0);});return b;}function f(b){if(b){b.scrollIntoView();var c;c = g.yOffset;x(c)?c = c():rc(c)?(c = c[0],c = "fixed" !== a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c) || (c = 0);c && (b = b.getBoundingClientRect().top,a.scrollBy(0,b - c));}else a.scrollTo(0,0);}function g(a){a = G(a)?a:c.hash();var b;a?(b = h.getElementById(a))?f(b):(b = e(h.getElementsByName(a)))?f(b):"top" === a && f(null):f(null);}var h=a.document;b && d.$watch(function(){return c.hash();},function(a,b){a === b && "" === a || Df(function(){d.$evalAsync(g);});});return g;}];}function ib(b,a){if(!b && !a)return "";if(!b)return a;if(!a)return b;J(b) && (b = b.join(" "));J(a) && (a = a.join(" "));return b + " " + a;}function Gf(b){G(b) && (b = b.split(" "));var a=ha();m(b,function(b){b.length && (a[b] = !0);});return a;}function Ia(b){return B(b)?b:{};}function Hf(b,a,c,d){function e(a){try{a.apply(null,ua.call(arguments,1));}finally {if((E--,0 === E))for(;K.length;) try{K.pop()();}catch(b) {c.error(b);}}}function f(){ia = null;g();h();}function g(){a: {try{u = n.state;break a;}catch(a) {}u = void 0;}u = v(u)?null:u;ka(u,L) && (u = L);L = u;}function h(){if(z !== l.url() || q !== u)z = l.url(),q = u,m(O,function(a){a(l.url(),u);});}var l=this,k=b.location,n=b.history,p=b.setTimeout,r=b.clearTimeout,t={};l.isMock = !1;var E=0,K=[];l.$$completeOutstandingRequest = e;l.$$incOutstandingRequestCount = function(){E++;};l.notifyWhenNoOutstandingRequests = function(a){0 === E?a():K.push(a);};var u,q,z=k.href,N=a.find("base"),ia=null;g();q = u;l.url = function(a,c,e){v(e) && (e = null);k !== b.location && (k = b.location);n !== b.history && (n = b.history);if(a){var f=q === e;if(z === a && (!d.history || f))return l;var h=z && Ja(z) === Ja(a);z = a;q = e;if(!d.history || h && f){if(!h || ia)ia = a;c?k.replace(a):h?(c = k,e = a.indexOf("#"),e = -1 === e?"":a.substr(e),c.hash = e):k.href = a;k.href !== a && (ia = a);}else n[c?"replaceState":"pushState"](e,"",a),g(),q = u;return l;}return ia || k.href.replace(/%27/g,"'");};l.state = function(){return u;};var O=[],H=!1,L=null;l.onUrlChange = function(a){if(!H){if(d.history)C(b).on("popstate",f);C(b).on("hashchange",f);H = !0;}O.push(a);return a;};l.$$applicationDestroyed = function(){C(b).off("hashchange popstate",f);};l.$$checkUrlChange = h;l.baseHref = function(){var a=N.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):"";};l.defer = function(a,b){var c;E++;c = p(function(){delete t[c];e(a);},b || 0);t[c] = !0;return c;};l.defer.cancel = function(a){return t[a]?(delete t[a],r(a),e(y),!0):!1;};}function Te(){this.$get = ["$window","$log","$sniffer","$document",function(b,a,c,d){return new Hf(b,d,a,c);}];}function Ue(){this.$get = function(){function b(b,d){function e(a){a != p && (r?r == a && (r = a.n):r = a,f(a.n,a.p),f(a,p),p = a,p.n = null);}function f(a,b){a != b && (a && (a.p = b),b && (b.n = a));}if(b in a)throw I("$cacheFactory")("iid",b);var g=0,h=P({},d,{id:b}),l={},k=d && d.capacity || Number.MAX_VALUE,n={},p=null,r=null;return a[b] = {put:function put(a,b){if(!v(b)){if(k < Number.MAX_VALUE){var c=n[a] || (n[a] = {key:a});e(c);}a in l || g++;l[a] = b;g > k && this.remove(r.key);return b;}},get:function get(a){if(k < Number.MAX_VALUE){var b=n[a];if(!b)return;e(b);}return l[a];},remove:function remove(a){if(k < Number.MAX_VALUE){var b=n[a];if(!b)return;b == p && (p = b.p);b == r && (r = b.n);f(b.n,b.p);delete n[a];}delete l[a];g--;},removeAll:function removeAll(){l = {};g = 0;n = {};p = r = null;},destroy:function destroy(){n = h = l = null;delete a[b];},info:function info(){return P({},h,{size:g});}};}var a={};b.info = function(){var b={};m(a,function(a,e){b[e] = a.info();});return b;};b.get = function(b){return a[b];};return b;};}function of(){this.$get = ["$cacheFactory",function(b){return b("templates");}];}function Cc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var h=a.match(d);if(!h)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f] = {mode:h[1][0],collection:"*" === h[2],optional:"?" === h[3],attrName:h[4] || f};});return e;}function d(a){var b=a.charAt(0);if(!b || b !== F(b))throw fa("baddir",a);if(a !== a.trim())throw fa("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Ud("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive = function r(a,f){Ta(a,"directive");G(a)?(d(a),qb(f,"directiveFactory"),e.hasOwnProperty(a) || (e[a] = [],b.factory(a + "Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,h){try{var g=b.invoke(e);x(g)?g = {compile:qa(g)}:!g.compile && g.link && (g.compile = qa(g.link));g.priority = g.priority || 0;g.index = h;g.name = g.name || a;g.require = g.require || g.controller && g.name;g.restrict = g.restrict || "EA";var k=g,l=g,r=g.name,n={isolateScope:null,bindToController:null};B(l.scope) && (!0 === l.bindToController?(n.bindToController = c(l.scope,r,!0),n.isolateScope = {}):n.isolateScope = c(l.scope,r,!1));B(l.bindToController) && (n.bindToController = c(l.bindToController,r,!0));if(B(n.bindToController)){var S=l.controller,E=l.controllerAs;if(!S)throw fa("noctrl",r);var ca;a: if(E && G(E))ca = E;else {if(G(S)){var m=Uc.exec(S);if(m){ca = m[3];break a;}}ca = void 0;}if(!ca)throw fa("noident",r);}var s=k.$$bindings = n;B(s.isolateScope) && (g.$$isolateBindings = s.isolateScope);g.$$moduleName = e.$$moduleName;f.push(g);}catch(w) {d(w);}});return f;}])),e[a].push(f)):m(a,nc(r));return this;};this.aHrefSanitizationWhitelist = function(b){return A(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist();};this.imgSrcSanitizationWhitelist = function(b){return A(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist();};var n=!0;this.debugInfoEnabled = function(a){return A(a)?(n = a,this):n;};this.$get = ["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,q,z,N,ia,O,H){function L(a,b){try{a.addClass(b);}catch(c) {}}function W(a,b,c,d,e){a instanceof C || (a = C(a));m(a,function(b,c){b.nodeType == Pa && b.nodeValue.match(/\S+/) && (a[c] = C(b).wrap("<span></span>").parent()[0]);});var f=S(a,b,a,c,d,e);W.$$addScopeClass(a);var h=null;return function(b,c,d){qb(b,"scope");d = d || {};var e=d.parentBoundTranscludeFn,g=d.transcludeControllers;d = d.futureParentElement;e && e.$$boundTransclude && (e = e.$$boundTransclude);h || (h = (d = d && d[0])?"foreignobject" !== wa(d) && d.toString().match(/SVG/)?"svg":"html":"html");d = "html" !== h?C(Xb(h,C("<div>").append(a).html())):c?Ra.clone.call(a):a;if(g)for(var k in g) d.data("$" + k + "Controller",g[k].instance);W.$$addScopeInfo(d,b);c && c(d,b);f && f(b,d,d,e);return d;};}function S(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,r,n,t,O;if(q)for(O = Array(c.length),r = 0;r < g.length;r += 3) f = g[r],O[f] = c[f];else O = c;r = 0;for(n = g.length;r < n;) if((k = O[g[r++]],c = g[r++],f = g[r++],c)){if(c.scope){if((l = a.$new(),W.$$addScopeInfo(C(k),l),t = c.$$destroyBindings))c.$$destroyBindings = null,l.$on("$destroyed",t);}else l = a;t = c.transcludeOnThisElement?ba(a,c.transclude,e):!c.templateOnThisElement && e?e:!e && b?ba(a,b):null;c(f,l,k,d,t,c);}else f && f(a,k.childNodes,w,e);}for(var g=[],k,l,r,n,q,t=0;t < a.length;t++) {k = new aa();l = ca(a[t],[],k,0 === t?d:w,e);(f = l.length?D(l,a[t],k,b,c,null,[],[],f):null) && f.scope && W.$$addScopeClass(k.$$element);k = f && f.terminal || !(r = a[t].childNodes) || !r.length?null:S(r,f?(f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude:b);if(f || k)g.push(t,f,k),n = !0,q = q || f;f = null;}return n?h:null;}function ba(a,b,c){return function(d,e,f,h,g){d || (d = a.$new(!1,g),d.$$transcluded = !0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:h});};}function ca(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case pa:na(b,ya(wa(a)),"E",d,e);for(var l,r,n,q=a.attributes,t=0,O=q && q.length;t < O;t++) {var K=!1,H=!1;l = q[t];k = l.name;r = T(l.value);l = ya(k);if(n = ja.test(l))k = k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase();});var S=l.replace(/(Start|End)$/,"");I(S) && l === S + "Start" && (K = k,H = k.substr(0,k.length - 5) + "end",k = k.substr(0,k.length - 6));l = ya(k.toLowerCase());h[l] = k;if(n || !c.hasOwnProperty(l))c[l] = r,Qc(a,l) && (c[l] = !0);V(a,b,r,l,n);na(b,l,"A",d,e,K,H);}a = a.className;B(a) && (a = a.animVal);if(G(a) && "" !== a)for(;k = g.exec(a);) l = ya(k[2]),na(b,l,"C",d,e) && (c[l] = T(k[3])),a = a.substr(k.index + k[0].length);break;case Pa:if(11 === Wa)for(;a.parentNode && a.nextSibling && a.nextSibling.nodeType === Pa;) a.nodeValue += a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);Ka(b,a.nodeValue);break;case 8:try{if(k = f.exec(a.nodeValue))l = ya(k[1]),na(b,l,"M",d,e) && (c[l] = T(k[2]));}catch(E) {}}b.sort(M);return b;}function za(a,b,c){var d=[],e=0;if(b && a.hasAttribute && a.hasAttribute(b)){do {if(!a)throw fa("uterdir",b,c);a.nodeType == pa && (a.hasAttribute(b) && e++,a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;}while(0 < e);}else d.push(a);return C(d);}function s(a,b,c){return function(d,e,f,h,g){e = za(e[0],b,c);return a(d,e,f,h,g);};}function D(a,b,d,e,f,h,g,k,r){function n(a,b,c,d){if(a){c && (a = s(a,c,d));a.require = D.require;a.directiveName = y;if(u === D || D.$$isolateScope)a = Z(a,{isolateScope:!0});g.push(a);}if(b){c && (b = s(b,c,d));b.require = D.require;b.directiveName = y;if(u === D || D.$$isolateScope)b = Z(b,{isolateScope:!0});k.push(b);}}function t(a,b,c,d){var e;if(G(b)){var f=b.match(l);b = b.substring(f[0].length);var h=f[1] || f[3],f="?" === f[2];"^^" === h?c = c.parent():e = (e = d && d[b]) && e.instance;e || (d = "$" + b + "Controller",e = h?c.inheritedData(d):c.data(d));if(!e && !f)throw fa("ctreq",b,a);}else if(J(b))for(e = [],h = 0,f = b.length;h < f;h++) e[h] = t(a,b[h],c,d);return e || null;}function O(a,b,c,d,e,f){var h=ha(),g;for(g in d) {var k=d[g],l={$scope:k === u || k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},r=k.controller;"@" == r && (r = b[k.name]);l = q(r,l,!0,k.controllerAs);h[k.name] = l;ia || a.data("$" + k.name + "Controller",l.instance);}return h;}function K(a,c,e,f,h,l){function r(a,b,c){var d;ab(a) || (c = b,b = a,a = w);ia && (d = ca);c || (c = ia?N.parent():N);return h(a,b,d,c,za);}var n,q,H,E,ca,z,N;b === e?(f = d,N = d.$$element):(N = C(e),f = new aa(N,d));u && (E = c.$new(!0));h && (z = r,z.$$boundTransclude = h);ba && (ca = O(N,f,z,ba,E,c));u && (W.$$addScopeInfo(N,E,!0,!(L && (L === u || L === u.$$originalDirective))),W.$$addScopeClass(N,!0),E.$$isolateBindings = u.$$isolateBindings,Y(c,f,E,E.$$isolateBindings,u,E));if(ca){var Va=u || S,m;Va && ca[Va.name] && (q = Va.$$bindings.bindToController,(H = ca[Va.name]) && H.identifier && q && (m = H,l.$$destroyBindings = Y(c,f,H.instance,q,Va)));for(n in ca) {H = ca[n];var D=H();D !== H.instance && (H.instance = D,N.data("$" + n + "Controller",D),H === m && (l.$$destroyBindings(),l.$$destroyBindings = Y(c,f,D,q,Va)));}}n = 0;for(l = g.length;n < l;n++) q = g[n],$(q,q.isolateScope?E:c,N,f,q.require && t(q.directiveName,q.require,N,ca),z);var za=c;u && (u.template || null === u.templateUrl) && (za = E);a && a(za,e.childNodes,w,h);for(n = k.length - 1;0 <= n;n--) q = k[n],$(q,q.isolateScope?E:c,N,f,q.require && t(q.directiveName,q.require,N,ca),z);}r = r || {};for(var H=-Number.MAX_VALUE,S=r.newScopeDirective,ba=r.controllerDirectives,u=r.newIsolateScopeDirective,L=r.templateDirective,z=r.nonTlbTranscludeDirective,N=!1,m=!1,ia=r.hasElementTranscludeDirective,v=d.$$element = C(b),D,y,M,Ka=e,na,I=0,F=a.length;I < F;I++) {D = a[I];var P=D.$$start,R=D.$$end;P && (v = za(b,P,R));M = w;if(H > D.priority)break;if(M = D.scope)D.templateUrl || (B(M)?(Q("new/isolated scope",u || S,D,v),u = D):Q("new/isolated scope",u,D,v)),S = S || D;y = D.name;!D.templateUrl && D.controller && (M = D.controller,ba = ba || ha(),Q("'" + y + "' controller",ba[y],D,v),ba[y] = D);if(M = D.transclude)N = !0,D.$$tlb || (Q("transclusion",z,D,v),z = D),"element" == M?(ia = !0,H = D.priority,M = v,v = d.$$element = C(X.createComment(" " + y + ": " + d[y] + " ")),b = v[0],U(f,ua.call(M,0),b),Ka = W(M,e,H,h && h.name,{nonTlbTranscludeDirective:z})):(M = C(Ub(b)).contents(),v.empty(),Ka = W(M,e));if(D.template)if((m = !0,Q("template",L,D,v),L = D,M = x(D.template)?D.template(v,d):D.template,M = ga(M),D.replace)){h = D;M = Sb.test(M)?Wc(Xb(D.templateNamespace,T(M))):[];b = M[0];if(1 != M.length || b.nodeType !== pa)throw fa("tplrt",y,"");U(f,v,b);F = {$attr:{}};M = ca(b,[],F);var If=a.splice(I + 1,a.length - (I + 1));u && A(M);a = a.concat(M).concat(If);Xc(d,F);F = a.length;}else v.html(M);if(D.templateUrl)m = !0,Q("template",L,D,v),L = D,D.replace && (h = D),K = Jf(a.splice(I,a.length - I),v,d,f,N && Ka,g,k,{controllerDirectives:ba,newScopeDirective:S !== D && S,newIsolateScopeDirective:u,templateDirective:L,nonTlbTranscludeDirective:z}),F = a.length;else if(D.compile)try{na = D.compile(v,d,Ka),x(na)?n(null,na,P,R):na && n(na.pre,na.post,P,R);}catch(V) {c(V,xa(v));}D.terminal && (K.terminal = !0,H = Math.max(H,D.priority));}K.scope = S && !0 === S.scope;K.transcludeOnThisElement = N;K.templateOnThisElement = m;K.transclude = Ka;r.hasElementTranscludeDirective = ia;return K;}function A(a){for(var b=0,c=a.length;b < c;b++) a[b] = Nb(a[b],{$$isolateScope:!0});}function na(b,d,f,h,g,k,l){if(d === g)return null;g = null;if(e.hasOwnProperty(d)){var n;d = a.get(d + "Directive");for(var q=0,t=d.length;q < t;q++) try{n = d[q],(v(h) || h > n.priority) && -1 != n.restrict.indexOf(f) && (k && (n = Nb(n,{$$start:k,$$end:l})),b.push(n),g = n);}catch(H) {c(H);}}return g;}function I(b){if(e.hasOwnProperty(b))for(var c=a.get(b + "Directive"),d=0,f=c.length;d < f;d++) if((b = c[d],b.multiElement))return !0;return !1;}function Xc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e?";":" ") + b[e]),a.$set(e,d,!0,c[e]));});m(b,function(b,f){"class" == f?(L(e,b),a["class"] = (a["class"]?a["class"] + " ":"") + b):"style" == f?(e.attr("style",e.attr("style") + ";" + b),a.style = (a.style?a.style + ";":"") + b):"$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b,d[f] = c[f]);});}function Jf(a,b,c,e,f,h,g,k){var l=[],r,n,q=b[0],t=a.shift(),H=Nb(t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),O=x(t.templateUrl)?t.templateUrl(b,c):t.templateUrl,E=t.templateNamespace;b.empty();d(O).then(function(d){var K,u;d = ga(d);if(t.replace){d = Sb.test(d)?Wc(Xb(E,T(d))):[];K = d[0];if(1 != d.length || K.nodeType !== pa)throw fa("tplrt",t.name,O);d = {$attr:{}};U(e,b,K);var z=ca(K,[],d);B(t.scope) && A(z);a = z.concat(a);Xc(c,d);}else K = q,b.html(d);a.unshift(H);r = D(a,K,c,f,b,t,h,g,k);m(e,function(a,c){a == K && (e[c] = b[0]);});for(n = S(b[0].childNodes,f);l.length;) {d = l.shift();u = l.shift();var N=l.shift(),W=l.shift(),z=b[0];if(!d.$$destroyed){if(u !== q){var za=u.className;k.hasElementTranscludeDirective && t.replace || (z = Ub(K));U(N,C(u),z);L(C(z),za);}u = r.transcludeOnThisElement?ba(d,r.transclude,W):W;r(n,d,z,e,u,r);}}l = null;});return function(a,b,c,d,e){a = e;b.$$destroyed || (l?l.push(b,c,d,a):(r.transcludeOnThisElement && (a = ba(b,r.transclude,e)),r(n,b,c,d,a,r)));};}function M(a,b){var c=b.priority - a.priority;return 0 !== c?c:a.name !== b.name?a.name < b.name?-1:1:a.index - b.index;}function Q(a,b,c,d){function e(a){return a?" (module: " + a + ")":"";}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,xa(d));}function Ka(a,c){var d=b(c,!0);d && a.push({priority:0,compile:function compile(a){a = a.parent();var b=!!a.length;b && W.$$addBindingClass(a);return function(a,c){var e=c.parent();b || W.$$addBindingClass(e);W.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue = a;});};}});}function Xb(a,b){a = F(a || "html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:return b;}}function R(a,b){if("srcdoc" == b)return ia.HTML;var c=wa(a);if("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return ia.RESOURCE_URL;}function V(a,c,d,e,f){var g=R(a,e);f = h[e] || f;var l=b(d,!0,g,f);if(l){if("multiple" === e && "select" === wa(a))throw fa("selmulti",xa(a));c.push({priority:100,compile:function compile(){return {pre:function pre(a,c,h){c = h.$$observers || (h.$$observers = {});if(k.test(e))throw fa("nodomevents");var r=h[e];r !== d && (l = r && b(r,!0,g,f),d = r);l && (h[e] = l(a),(c[e] || (c[e] = [])).$$inter = !0,(h.$$observers && h.$$observers[e].$$scope || a).$watch(l,function(a,b){"class" === e && a != b?h.$updateClass(a,b):h.$set(e,a);}));}};}});}}function U(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h = 0,g = a.length;h < g;h++) if(a[h] == d){a[h++] = c;g = h + e - 1;for(var k=a.length;h < k;h++,g++) g < k?a[h] = a[g]:delete a[h];a.length -= e - 1;a.context === d && (a.context = c);break;}f && f.replaceChild(c,d);a = X.createDocumentFragment();a.appendChild(d);C.hasData(d) && (C(c).data(C(d).data()),ra?(Qb = !0,ra.cleanData([d])):delete C.cache[d[C.expando]]);d = 1;for(e = b.length;d < e;d++) f = b[d],C(f).remove(),a.appendChild(f),delete b[d];b[0] = c;b.length = 1;}function Z(a,b){return P(function(){return a.apply(null,arguments);},a,b);}function $(a,b,d,e,f,h){try{a(b,d,e,f,h);}catch(g) {c(g,xa(d));}}function Y(a,c,d,e,f,h){var g;m(e,function(e,h){var k=e.attrName,l=e.optional,r,n,q,K;switch(e.mode){case "@":l || ta.call(c,k) || (d[h] = c[k] = void 0);c.$observe(k,function(a){G(a) && (d[h] = a);});c.$$observers[k].$$scope = a;G(c[k]) && (d[h] = b(c[k])(a));break;case "=":if(!ta.call(c,k)){if(l)break;c[k] = void 0;}if(l && !c[k])break;n = u(c[k]);K = n.literal?ka:function(a,b){return a === b || a !== a && b !== b;};q = n.assign || function(){r = d[h] = n(a);throw fa("nonassign",c[k],f.name);};r = d[h] = n(a);l = function(b){K(b,d[h]) || (K(b,r)?q(a,b = d[h]):d[h] = b);return r = b;};l.$stateful = !0;l = e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,n.literal);g = g || [];g.push(l);break;case "&":n = c.hasOwnProperty(k)?u(c[k]):y;if(n === y && l)break;d[h] = function(b){return n(a,b);};}});e = g?function(){for(var a=0,b=g.length;a < b;++a) g[a]();}:y;return h && e !== y?(h.$on("$destroy",e),y):e;}var aa=function aa(a,b){if(b){var c=Object.keys(b),d,e,f;d = 0;for(e = c.length;d < e;d++) f = c[d],this[f] = b[f];}else this.$attr = {};this.$$element = a;};aa.prototype = {$normalize:ya,$addClass:function $addClass(a){a && 0 < a.length && O.addClass(this.$$element,a);},$removeClass:function $removeClass(a){a && 0 < a.length && O.removeClass(this.$$element,a);},$updateClass:function $updateClass(a,b){var c=Yc(a,b);c && c.length && O.addClass(this.$$element,c);(c = Yc(b,a)) && c.length && O.removeClass(this.$$element,c);},$set:function $set(a,b,d,e){var f=Qc(this.$$element[0],a),h=Zc[a],g=a;f?(this.$$element.prop(a,b),e = f):h && (this[h] = b,g = h);this[a] = b;e?this.$attr[a] = e:(e = this.$attr[a]) || (this.$attr[a] = e = zc(a,"-"));f = wa(this.$$element);if("a" === f && "href" === a || "img" === f && "src" === a)this[a] = b = H(b,"src" === a);else if("img" === f && "srcset" === a){for(var f="",h=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length / 2),l=0;l < k;l++) var r=2 * l,f=f + H(T(h[r]),!0),f=f + (" " + T(h[r + 1]));h = T(h[2 * l]).split(/\s/);f += H(T(h[0]),!0);2 === h.length && (f += " " + T(h[1]));this[a] = b = f;}!1 !== d && (null === b || v(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a = this.$$observers) && m(a[g],function(a){try{a(b);}catch(d) {c(d);}});},$observe:function $observe(a,b){var c=this,d=c.$$observers || (c.$$observers = ha()),e=d[a] || (d[a] = []);e.push(b);z.$evalAsync(function(){e.$$inter || !c.hasOwnProperty(a) || v(c[a]) || b(c[a]);});return function(){cb(e,b);};}};var da=b.startSymbol(),ea=b.endSymbol(),ga="{{" == da || "}}" == ea?$a:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ea);},ja=/^ngAttr[A-Z]/;W.$$addBindingInfo = n?function(a,b){var c=a.data("$binding") || [];J(b)?c = c.concat(b):c.push(b);a.data("$binding",c);}:y;W.$$addBindingClass = n?function(a){L(a,"ng-binding");}:y;W.$$addScopeInfo = n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b);}:y;W.$$addScopeClass = n?function(a,b){L(a,b?"ng-isolate-scope":"ng-scope");}:y;return W;}];}
	Cc.$inject = ["b", "a"];function ya(b){return gb(b.replace(Vc,""));}function Yc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a: for(;f < d.length;f++) {for(var g=d[f],h=0;h < e.length;h++) if(g == e[h])continue a;c += (0 < c.length?" ":"") + g;}return c;}function Wc(b){b = C(b);var a=b.length;if(1 >= a)return b;for(;a--;) 8 === b[a].nodeType && Kf.call(b,a,1);return b;}function Ve(){var b={},a=!1;this.register = function(a,d){Ta(a,"controller");B(a)?P(b,a):b[a] = d;};this.allowGlobals = function(){a = !0;};this.$get = ["$injector","$window",function(c,d){function e(a,b,c,d){if(!a || !B(a.$scope))throw I("$controller")("noscp",d,b);a.$scope[b] = c;}return function(f,g,h,l){var k,n,p;h = !0 === h;l && G(l) && (p = l);if(G(f)){l = f.match(Uc);if(!l)throw Lf("ctrlfmt",f);n = l[1];p = p || l[3];f = b.hasOwnProperty(n)?b[n]:Bc(g.$scope,n,!0) || (a?Bc(d,n,!0):w);Sa(f,n,!0);}if(h)return (h = (J(f)?f[f.length - 1]:f).prototype,k = Object.create(h || null),p && e(g,p,k,n || f.name),P(function(){var a=c.invoke(f,k,g,n);a !== k && (B(a) || x(a)) && (k = a,p && e(g,p,k,n || f.name));return k;},{instance:k,identifier:p}));k = c.instantiate(f,g,n);p && e(g,p,k,n || f.name);return k;};}];}function We(){this.$get = ["$window",function(b){return C(b.document);}];}function Xe(){this.$get = ["$log",function(b){return function(a,c){b.error.apply(b,arguments);};}];}function Yb(b){return B(b)?da(b)?b.toISOString():eb(b):b;}function bf(){this.$get = function(){return function(b){if(!b)return "";var a=[];mc(b,function(b,d){null === b || v(b) || (J(b)?m(b,function(b,c){a.push(la(d) + "=" + la(Yb(b)));}):a.push(la(d) + "=" + la(Yb(b))));});return a.join("&");};};}function cf(){this.$get = function(){return function(b){function a(b,e,f){null === b || v(b) || (J(b)?m(b,function(b,c){a(b,e + "[" + (B(b)?c:"") + "]");}):B(b) && !da(b)?mc(b,function(b,c){a(b,e + (f?"":"[") + c + (f?"":"]"));}):c.push(la(e) + "=" + la(Yb(b))));}if(!b)return "";var c=[];a(b,"",!0);return c.join("&");};};}function Zb(b,a){if(G(b)){var c=b.replace(Mf,"").trim();if(c){var d=a("Content-Type");(d = d && 0 === d.indexOf($c)) || (d = (d = c.match(Nf)) && Of[d[0]].test(c));d && (b = uc(c));}}return b;}function ad(b){var a=ha(),c;G(b)?m(b.split("\n"),function(b){c = b.indexOf(":");var e=F(T(b.substr(0,c)));b = T(b.substr(c + 1));e && (a[e] = a[e]?a[e] + ", " + b:b);}):B(b) && m(b,function(b,c){var f=F(c),g=T(b);f && (a[f] = a[f]?a[f] + ", " + g:g);});return a;}function bd(b){var a;return function(c){a || (a = ad(b));return c?(c = a[F(c)],void 0 === c && (c = null),c):a;};}function cd(b,a,c,d){if(x(d))return d(b,a,c);m(d,function(d){b = d(b,a,c);});return b;}function af(){var b=this.defaults = {transformResponse:[Zb],transformRequest:[function(a){return B(a) && "[object File]" !== va.call(a) && "[object Blob]" !== va.call(a) && "[object FormData]" !== va.call(a)?eb(a):a;}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ja($b),put:ja($b),patch:ja($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync = function(b){return A(b)?(a = !!b,this):a;};var c=!0;this.useLegacyPromiseExtensions = function(a){return A(a)?(c = !!a,this):c;};var d=this.interceptors = [];this.$get = ["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,l,k){function n(a){function d(a){var b=P({},a);b.data = a.data?cd(a.data,a.headers,a.status,f.transformResponse):a.data;a = a.status;return 200 <= a && 300 > a?b:l.reject(b);}function e(a,b){var c,d={};m(a,function(a,e){x(a)?(c = a(b),null != c && (d[e] = c)):d[e] = a;});return d;}if(!aa.isObject(a))throw I("$http")("badreq",a);var f=P({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers = (function(a){var c=b.headers,d=P({},a.headers),f,h,g,c=P({},c.common,c[F(a.method)]);a: for(f in c) {h = F(f);for(g in d) if(F(g) === h)continue a;d[f] = c[f];}return e(d,ja(a));})(a);f.method = sb(f.method);f.paramSerializer = G(f.paramSerializer)?k.get(f.paramSerializer):f.paramSerializer;var h=[function(a){var c=a.headers,e=cd(a.data,bd(c),w,a.transformRequest);v(e) && m(c,function(a,b){"content-type" === F(b) && delete c[b];});v(a.withCredentials) && !v(b.withCredentials) && (a.withCredentials = b.withCredentials);return p(a,e).then(d,d);},w],g=l.when(f);for(m(E,function(a){(a.request || a.requestError) && h.unshift(a.request,a.requestError);(a.response || a.responseError) && h.push(a.response,a.responseError);});h.length;) {a = h.shift();var r=h.shift(),g=g.then(a,r);}c?(g.success = function(a){Sa(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,f);});return g;},g.error = function(a){Sa(a,"fn");g.then(null,function(b){a(b.data,b.status,b.headers,f);});return g;}):(g.success = dd("success"),g.error = dd("error"));return g;}function p(c,d){function g(b,c,d,e){function f(){k(c,b,d,e);}L && (200 <= b && 300 > b?L.put(ba,[b,c,ad(d),e]):L.remove(ba));a?h.$applyAsync(f):(f(),h.$$phase || h.$apply());}function k(a,b,d,e){b = -1 <= b?b:0;(200 <= b && 300 > b?O.resolve:O.reject)({data:a,status:b,headers:bd(d),config:c,statusText:e});}function p(a){k(a.data,a.status,ja(a.headers()),a.statusText);}function E(){var a=n.pendingRequests.indexOf(c);-1 !== a && n.pendingRequests.splice(a,1);}var O=l.defer(),H=O.promise,L,m,S=c.headers,ba=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);H.then(E,E);!c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (L = B(c.cache)?c.cache:B(b.cache)?b.cache:t);L && (m = L.get(ba),A(m)?m && x(m.then)?m.then(p,p):J(m)?k(m[1],m[0],ja(m[2]),m[3]):k(m,200,{},"OK"):L.put(ba,H));v(m) && ((m = ed(c.url)?f()[c.xsrfCookieName || b.xsrfCookieName]:w) && (S[c.xsrfHeaderName || b.xsrfHeaderName] = m),e(c.method,ba,d,g,S,c.timeout,c.withCredentials,c.responseType));return H;}function r(a,b){0 < b.length && (a += (-1 == a.indexOf("?")?"?":"&") + b);return a;}var t=g("$http");b.paramSerializer = G(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var E=[];m(d,function(a){E.unshift(G(a)?k.get(a):k.invoke(a));});n.pendingRequests = [];(function(a){m(arguments,function(a){n[a] = function(b,c){return n(P({},c || {},{method:a,url:b}));};});})("get","delete","head","jsonp");(function(a){m(arguments,function(a){n[a] = function(b,c,d){return n(P({},d || {},{method:a,url:b,data:c}));};});})("post","put","patch");n.defaults = b;return n;}];}function Pf(){return new Q.XMLHttpRequest();}function df(){this.$get = ["$browser","$window","$document",function(b,a,c){return Qf(b,Pf,b.defer,a.angular.callbacks,c[0]);}];}function Qf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type = "text/javascript";f.src = a;f.async = !0;n = function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f = null;var g=-1,t="unknown";a && ("load" !== a.type || d[b].called || (a = {type:"error"}),t = a.type,g = "error" === a.type?404:200);c && c(g,t);};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n;}return function(e,h,l,k,n,p,r,t){function E(){q && q();z && z.abort();}function K(a,d,e,f,h){A(s) && c.cancel(s);q = z = null;a(d,e,f,h);b.$$completeOutstandingRequest(y);}b.$$incOutstandingRequestCount();h = h || b.url();if("jsonp" == F(e)){var u="_" + (d.counter++).toString(36);d[u] = function(a){d[u].data = a;d[u].called = !0;};var q=f(h.replace("JSON_CALLBACK","angular.callbacks." + u),u,function(a,b){K(k,a,d[u].data,"",b);d[u] = y;});}else {var z=a();z.open(e,h,!0);m(n,function(a,b){A(a) && z.setRequestHeader(b,a);});z.onload = function(){var a=z.statusText || "",b="response" in z?z.response:z.responseText,c=1223 === z.status?204:z.status;0 === c && (c = b?200:"file" == Aa(h).protocol?404:0);K(k,c,b,z.getAllResponseHeaders(),a);};e = function(){K(k,-1,null,null,"");};z.onerror = e;z.onabort = e;r && (z.withCredentials = !0);if(t)try{z.responseType = t;}catch(N) {if("json" !== t)throw N;}z.send(v(l)?null:l);}if(0 < p)var s=c(E,p);else p && x(p.then) && p.then(E);};}function Ze(){var b="{{",a="}}";this.startSymbol = function(a){return a?(b = a,this):b;};this.endSymbol = function(b){return b?(a = b,this):a;};this.$get = ["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return "\\\\\\" + a;}function g(c){return c.replace(n,b).replace(p,a);}function h(f,h,n,p){function u(a){try{var b=a;a = n?e.getTrusted(n,b):e.valueOf(b);var c;if(p && !A(a))c = a;else if(null == a)c = "";else {switch(typeof a){case "string":break;case "number":a = "" + a;break;default:a = eb(a);}c = a;}return c;}catch(h) {d(La.interr(f,h));}}p = !!p;for(var q,m,N=0,s=[],O=[],H=f.length,L=[],W=[];N < H;) if(-1 != (q = f.indexOf(b,N)) && -1 != (m = f.indexOf(a,q + l)))N !== q && L.push(g(f.substring(N,q))),N = f.substring(q + l,m),s.push(N),O.push(c(N,u)),N = m + k,W.push(L.length),L.push("");else {N !== H && L.push(g(f.substring(N)));break;}n && 1 < L.length && La.throwNoconcat(f);if(!h || s.length){var S=function S(a){for(var b=0,c=s.length;b < c;b++) {if(p && v(a[b]))return;L[W[b]] = a[b];}return L.join("");};return P(function(a){var b=0,c=s.length,e=Array(c);try{for(;b < c;b++) e[b] = O[b](a);return S(e);}catch(h) {d(La.interr(f,h));}},{exp:f,expressions:s,$$watchDelegate:function $$watchDelegate(a,b){var c;return a.$watchGroup(O,function(d,e){var f=S(d);x(b) && b.call(this,f,d !== e?c:f,a);c = f;});}});}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),"g"),p=new RegExp(a.replace(/./g,f),"g");h.startSymbol = function(){return b;};h.endSymbol = function(){return a;};return h;}];}function $e(){this.$get = ["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=4 < arguments.length,p=n?ua.call(arguments,4):[],r=a.setInterval,t=a.clearInterval,E=0,K=A(k) && !k,u=(K?d:c).defer(),q=u.promise;l = A(l)?l:0;q.then(null,null,n?function(){e.apply(null,p);}:e);q.$$intervalId = r(function(){u.notify(E++);0 < l && E >= l && (u.resolve(E),t(q.$$intervalId),delete f[q.$$intervalId]);K || b.$apply();},h);f[q.$$intervalId] = u;return q;}var f={};e.cancel = function(b){return b && b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1;};return e;}];}function ac(b){b = b.split("/");for(var a=b.length;a--;) b[a] = ob(b[a]);return b.join("/");}function fd(b,a){var c=Aa(b);a.$$protocol = c.protocol;a.$$host = c.hostname;a.$$port = Y(c.port) || Rf[c.protocol] || null;}function gd(b,a){var c="/" !== b.charAt(0);c && (b = "/" + b);var d=Aa(b);a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search = xc(d.search);a.$$hash = decodeURIComponent(d.hash);a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);}function sa(b,a){if(0 === a.indexOf(b))return a.substr(b.length);}function Ja(b){var a=b.indexOf("#");return -1 == a?b:b.substr(0,a);}function Cb(b){return b.replace(/(#.+)|#$/,"$1");}function bc(b,a,c){this.$$html5 = !0;c = c || "";fd(b,this);this.$$parse = function(b){var c=sa(a,b);if(!G(c))throw Db("ipthprfx",b,a);gd(c,this);this.$$path || (this.$$path = "/");this.$$compose();};this.$$compose = function(){var b=Pb(this.$$search),c=this.$$hash?"#" + ob(this.$$hash):"";this.$$url = ac(this.$$path) + (b?"?" + b:"") + c;this.$$absUrl = a + this.$$url.substr(1);};this.$$parseLinkUrl = function(d,e){if(e && "#" === e[0])return (this.hash(e.slice(1)),!0);var f,g;A(f = sa(b,d))?(g = f,g = A(f = sa(c,f))?a + (sa("/",f) || f):b + g):A(f = sa(a,d))?g = a + f:a == d + "/" && (g = a);g && this.$$parse(g);return !!g;};}function cc(b,a,c){fd(b,this);this.$$parse = function(d){var e=sa(b,d) || sa(a,d),f;v(e) || "#" !== e.charAt(0)?this.$$html5?f = e:(f = "",v(e) && (b = d,this.replace())):(f = sa(c,e),v(f) && (f = e));gd(f,this);d = this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0 === f.indexOf(e) && (f = f.replace(e,""));g.exec(f) || (d = (f = g.exec(d))?f[1]:d);this.$$path = d;this.$$compose();};this.$$compose = function(){var a=Pb(this.$$search),e=this.$$hash?"#" + ob(this.$$hash):"";this.$$url = ac(this.$$path) + (a?"?" + a:"") + e;this.$$absUrl = b + (this.$$url?c + this.$$url:"");};this.$$parseLinkUrl = function(a,c){return Ja(b) == Ja(a)?(this.$$parse(a),!0):!1;};}function hd(b,a,c){this.$$html5 = !0;cc.apply(this,arguments);this.$$parseLinkUrl = function(d,e){if(e && "#" === e[0])return (this.hash(e.slice(1)),!0);var f,g;b == Ja(d)?f = d:(g = sa(a,d))?f = b + c + g:a === d + "/" && (f = a);f && this.$$parse(f);return !!f;};this.$$compose = function(){var a=Pb(this.$$search),e=this.$$hash?"#" + ob(this.$$hash):"";this.$$url = ac(this.$$path) + (a?"?" + a:"") + e;this.$$absUrl = b + c + this.$$url;};}function Eb(b){return function(){return this[b];};}function id(b,a){return function(c){if(v(c))return this[b];this[b] = a(c);this.$$compose();return this;};}function ef(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix = function(a){return A(a)?(b = a,this):b;};this.html5Mode = function(b){return bb(b)?(a.enabled = b,this):B(b)?(bb(b.enabled) && (a.enabled = b.enabled),bb(b.requireBase) && (a.requireBase = b.requireBase),bb(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks),this):a;};this.$get = ["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state = d.state();}catch(h) {throw (k.url(e),k.$$state = f,h);}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b);}var k,n;n = d.baseHref();var p=d.url(),r;if(a.enabled){if(!n && a.requireBase)throw Db("nobase");r = p.substring(0,p.indexOf("/",p.indexOf("//") + 2)) + (n || "/");n = e.history?bc:hd;}else r = Ja(p),n = cc;var t=r.substr(0,Ja(r).lastIndexOf("/") + 1);k = new n(r,t,"#" + b);k.$$parseLinkUrl(p,p);k.$$state = d.state();var E=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button){for(var e=C(b.target);"a" !== wa(e[0]);) if(e[0] === f[0] || !(e = e.parent())[0])return;var h=e.prop("href"),l=e.attr("href") || e.attr("xlink:href");B(h) && "[object SVGAnimatedString]" === h.toString() && (h = Aa(h.animVal).href);E.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h,l) || (b.preventDefault(),k.absUrl() != d.url() && (c.$apply(),g.angular["ff-684208-preventDefault"] = !0));}});Cb(k.absUrl()) != Cb(p) && d.url(k.absUrl(),!0);var K=!0;d.onUrlChange(function(a,b){v(sa(t,a))?g.location.href = a:(c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state = b;f = c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl() === a && (f?(k.$$parse(d),k.$$state = e,h(d,!1,e)):(K = !1,l(d,e)));}),c.$$phase || c.$digest());});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),g=k.$$replace,r=a !== b || k.$$html5 && e.history && f !== k.$$state;if(K || r)K = !1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl() === b && (d?(k.$$parse(a),k.$$state = f):(r && h(b,g,f === k.$$state?null:k.$$state),l(a,f)));});k.$$replace = !1;});return k;}];}function ff(){var b=!0,a=this;this.debugEnabled = function(a){return A(a)?(b = a,this):b;};this.$get = ["$window",function(c){function d(a){a instanceof Error && (a.stack?a = a.message && -1 === a.stack.indexOf(a.message)?"Error: " + a.message + "\n" + a.stack:a.stack:a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;}function e(a){var b=c.console || {},e=b[a] || b.log || y;a = !1;try{a = !!e.apply;}catch(l) {}return a?function(){var a=[];m(arguments,function(b){a.push(d(b));});return e.apply(b,a);}:function(a,b){e(a,null == b?"":b);};}return {log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:(function(){var c=e("debug");return function(){b && c.apply(a,arguments);};})()};}];}function Xa(b,a){b = B(b) && b.toString?b.toString():b;if("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)throw ea("isecfld",a);return b;}function Ba(b,a){if(b){if(b.constructor === b)throw ea("isecfn",a);if(b.window === b)throw ea("isecwindow",a);if(b.children && (b.nodeName || b.prop && b.attr && b.find))throw ea("isecdom",a);if(b === Object)throw ea("isecobj",a);}return b;}function jd(b,a){if(b){if(b.constructor === b)throw ea("isecfn",a);if(b === Sf || b === Tf || b === Uf)throw ea("isecff",a);}}function Vf(b,a){return "undefined" !== typeof b?b:a;}function kd(b,a){return "undefined" === typeof b?a:"undefined" === typeof a?b:b + a;}function U(b,a){var c,d;switch(b.type){case s.Program:c = !0;m(b.body,function(b){U(b.expression,a);c = c && b.expression.constant;});b.constant = c;break;case s.Literal:b.constant = !0;b.toWatch = [];break;case s.UnaryExpression:U(b.argument,a);b.constant = b.argument.constant;b.toWatch = b.argument.toWatch;break;case s.BinaryExpression:U(b.left,a);U(b.right,a);b.constant = b.left.constant && b.right.constant;b.toWatch = b.left.toWatch.concat(b.right.toWatch);break;case s.LogicalExpression:U(b.left,a);U(b.right,a);b.constant = b.left.constant && b.right.constant;b.toWatch = b.constant?[]:[b];break;case s.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant = b.test.constant && b.alternate.constant && b.consequent.constant;b.toWatch = b.constant?[]:[b];break;case s.Identifier:b.constant = !1;b.toWatch = [b];break;case s.MemberExpression:U(b.object,a);b.computed && U(b.property,a);b.constant = b.object.constant && (!b.computed || b.property.constant);b.toWatch = [b];break;case s.CallExpression:c = b.filter?!a(b.callee.name).$stateful:!1;d = [];m(b.arguments,function(b){U(b,a);c = c && b.constant;b.constant || d.push.apply(d,b.toWatch);});b.constant = c;b.toWatch = b.filter && !a(b.callee.name).$stateful?d:[b];break;case s.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant = b.left.constant && b.right.constant;b.toWatch = [b];break;case s.ArrayExpression:c = !0;d = [];m(b.elements,function(b){U(b,a);c = c && b.constant;b.constant || d.push.apply(d,b.toWatch);});b.constant = c;b.toWatch = d;break;case s.ObjectExpression:c = !0;d = [];m(b.properties,function(b){U(b.value,a);c = c && b.value.constant;b.value.constant || d.push.apply(d,b.value.toWatch);});b.constant = c;b.toWatch = d;break;case s.ThisExpression:b.constant = !1,b.toWatch = [];}}function ld(b){if(1 == b.length){b = b[0].expression;var a=b.toWatch;return 1 !== a.length?a:a[0] !== b?a:w;}}function md(b){return b.type === s.Identifier || b.type === s.MemberExpression;}function nd(b){if(1 === b.body.length && md(b.body[0].expression))return {type:s.AssignmentExpression,left:b.body[0].expression,right:{type:s.NGValueParameter},operator:"="};}function od(b){return 0 === b.body.length || 1 === b.body.length && (b.body[0].expression.type === s.Literal || b.body[0].expression.type === s.ArrayExpression || b.body[0].expression.type === s.ObjectExpression);}function pd(b,a){this.astBuilder = b;this.$filter = a;}function qd(b,a){this.astBuilder = b;this.$filter = a;}function Fb(b){return "constructor" == b;}function dc(b){return x(b.valueOf)?b.valueOf():Wf.call(b);}function gf(){var b=ha(),a=ha();this.$get = ["$filter",function(c){function d(a,b){return null == a || null == b?a === b:"object" === typeof a && (a = dc(a),"object" === typeof a)?!1:a === b || a !== a && b !== b;}function e(a,b,c,e,f){var h=e.inputs,g;if(1 === h.length){var k=d,h=h[0];return a.$watch(function(a){var b=h(a);d(b,k) || (g = e(a,w,w,[b]),k = b && dc(b));return g;},b,c,f);}for(var l=[],n=[],p=0,m=h.length;p < m;p++) l[p] = d,n[p] = null;return a.$watch(function(a){for(var b=!1,c=0,f=h.length;c < f;c++) {var k=h[c](a);if(b || (b = !d(k,l[c])))n[c] = k,l[c] = k && dc(k);}b && (g = e(a,w,w,n));return g;},b,c,f);}function f(a,b,c,d){var e,f;return e = a.$watch(function(a){return d(a);},function(a,c,d){f = a;x(b) && b.apply(this,arguments);A(a) && d.$$postDigest(function(){A(f) && e();});},c);}function g(a,b,c,d){function e(a){var b=!0;m(a,function(a){A(a) || (b = !1);});return b;}var f,h;return f = a.$watch(function(a){return d(a);},function(a,c,d){h = a;x(b) && b.call(this,a,c,d);e(a) && d.$$postDigest(function(){e(h) && f();});},c);}function h(a,b,c,d){var e;return e = a.$watch(function(a){return d(a);},function(a,c,d){x(b) && b.apply(this,arguments);e();},c);}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c !== g && c !== f?function(c,d,e,f){e = a(c,d,e,f);return b(e,c,d);}:function(c,d,e,f){e = a(c,d,e,f);c = b(e,c,d);return A(e)?c:e;};a.$$watchDelegate && a.$$watchDelegate !== e?c.$$watchDelegate = a.$$watchDelegate:b.$stateful || (c.$$watchDelegate = e,c.inputs = a.inputs?a.inputs:[a]);return c;}var k=Fa().noUnsafeEval,n={csp:k,expensiveChecks:!1},p={csp:k,expensiveChecks:!0};return function(d,k,E){var m,u,q;switch(typeof d){case "string":q = d = d.trim();var s=E?a:b;m = s[q];m || (":" === d.charAt(0) && ":" === d.charAt(1) && (u = !0,d = d.substring(2)),E = E?p:n,m = new ec(E),m = new fc(m,c,E).parse(d),m.constant?m.$$watchDelegate = h:u?m.$$watchDelegate = m.literal?g:f:m.inputs && (m.$$watchDelegate = e),s[q] = m);return l(m,k);case "function":return l(d,k);default:return y;}};}];}function jf(){this.$get = ["$rootScope","$exceptionHandler",function(b,a){return rd(function(a){b.$evalAsync(a);},a);}];}function kf(){this.$get = ["$browser","$exceptionHandler",function(b,a){return rd(function(a){b.defer(a);},a);}];}function rd(b,a){function c(a,b,c){function d(b){return function(c){e || (e = !0,b.call(a,c));};}var e=!1;return [d(b),d(c)];}function d(){this.$$state = {status:0};}function e(a,b){return function(c){b.call(a,c);};}function f(c){!c.processScheduled && c.pending && (c.processScheduled = !0,b(function(){var b,d,e;e = c.pending;c.processScheduled = !1;c.pending = w;for(var f=0,h=e.length;f < h;++f) {d = e[f][0];b = e[f][c.status];try{x(b)?d.resolve(b(c.value)):1 === c.status?d.resolve(c.value):d.reject(c.value);}catch(g) {d.reject(g),a(g);}}}));}function g(){this.promise = new d();this.resolve = e(this,this.resolve);this.reject = e(this,this.reject);this.notify = e(this,this.notify);}var h=I("$q",TypeError);P(d.prototype,{then:function then(a,b,c){if(v(a) && v(b) && v(c))return this;var d=new g();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d,a,b,c]);0 < this.$$state.status && f(this.$$state);return d.promise;},"catch":function _catch(a){return this.then(null,a);},"finally":function _finally(a,b){return this.then(function(b){return k(b,!0,a);},function(b){return k(b,!1,a);},b);}});P(g.prototype,{resolve:function resolve(a){this.promise.$$state.status || (a === this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a));},$$resolve:function $$resolve(b){var d,e;e = c(this,this.$$resolve,this.$$reject);try{if(B(b) || x(b))d = b && b.then;x(d)?(this.promise.$$state.status = -1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value = b,this.promise.$$state.status = 1,f(this.promise.$$state));}catch(h) {e[1](h),a(h);}},reject:function reject(a){this.promise.$$state.status || this.$$reject(a);},$$reject:function $$reject(a){this.promise.$$state.value = a;this.promise.$$state.status = 2;f(this.promise.$$state);},notify:function notify(c){var d=this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && b(function(){for(var b,e,f=0,h=d.length;f < h;f++) {e = d[f][0];b = d[f][3];try{e.notify(x(b)?b(c):c);}catch(g) {a(g);}}});}});var l=function l(a,b){var c=new g();b?c.resolve(a):c.reject(a);return c.promise;},k=function k(a,b,c){var d=null;try{x(c) && (d = c());}catch(e) {return l(e,!1);}return d && x(d.then)?d.then(function(){return l(a,b);},function(a){return l(a,!1);}):l(a,b);},n=function n(a,b,c,d){var e=new g();e.resolve(a);return e.promise.then(b,c,d);},p=function t(a){if(!x(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g();a(function(a){b.resolve(a);},function(a){b.reject(a);});return b.promise;};p.defer = function(){return new g();};p.reject = function(a){var b=new g();b.reject(a);return b.promise;};p.when = n;p.resolve = n;p.all = function(a){var b=new g(),c=0,d=J(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e) || (d[e] = a,--c || b.resolve(d));},function(a){d.hasOwnProperty(e) || b.reject(a);});});0 === c && b.resolve(d);return b.promise;};return p;}function tf(){this.$get = ["$window","$timeout",function(b,a){var c=b.requestAnimationFrame || b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b);};}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c);};};f.supported = e;return f;}];}function hf(){function b(a){function b(){this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++nb;this.$$ChildScope = null;}b.prototype = a;return b;}var a=10,c=I("$rootScope"),d=null,e=null;this.digestTtl = function(b){arguments.length && (a = b);return a;};this.$get = ["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed = !0;}function n(){this.$id = ++nb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;}function p(a){if(q.$$phase)throw c("inprog",q.$$phase);q.$$phase = a;}function r(a,b){do a.$$watchersCount += b;while(a = a.$parent);}function t(a,b,c){do a.$$listenerCount[c] -= b,0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];while(a = a.$parent);}function E(){}function s(){for(;w.length;) try{w.shift()();}catch(a) {g(a);}e = null;}function u(){null === e && (e = l.defer(function(){q.$apply(s);}));}n.prototype = {constructor:n,$new:function $new(a,c){var d;c = c || this;a?(d = new n(),d.$root = this.$root):(this.$$ChildScope || (this.$$ChildScope = b(this)),d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling = d,c.$$childTail = d):c.$$childHead = c.$$childTail = d;(a || c != this) && d.$on("$destroy",k);return d;},$watch:function $watch(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,k=g.$$watchers,l={fn:b,last:E,get:f,exp:e || a,eq:!!c};d = null;x(b) || (l.fn = y);k || (k = g.$$watchers = []);k.unshift(l);r(this,1);return function(){0 <= cb(k,l) && r(g,-1);d = null;};},$watchGroup:function $watchGroup(a,b){function c(){g = !1;k?(k = !1,b(e,e,h)):b(e,d,h);}var d=Array(a.length),e=Array(a.length),f=[],h=this,g=!1,k=!0;if(!a.length){var l=!0;h.$evalAsync(function(){l && b(e,e,h);});return function(){l = !1;};}if(1 === a.length)return this.$watch(a[0],function(a,c,f){e[0] = a;d[0] = c;b(e,a === c?e:d,f);});m(a,function(a,b){var k=h.$watch(a,function(a,f){e[b] = a;d[b] = f;g || (g = !0,h.$evalAsync(c));});f.push(k);});return function(){for(;f.length;) f.shift()();};},$watchCollection:function $watchCollection(a,b){function c(a){e = a;var b,d,h,g;if(!v(e)){if(B(e))if(Da(e))for(f !== p && (f = p,t = f.length = 0,l++),a = e.length,t !== a && (l++,f.length = t = a),b = 0;b < a;b++) g = f[b],h = e[b],d = g !== g && h !== h,d || g === h || (l++,f[b] = h);else {f !== r && (f = r = {},t = 0,l++);a = 0;for(b in e) ta.call(e,b) && (a++,h = e[b],g = f[b],b in f?(d = g !== g && h !== h,d || g === h || (l++,f[b] = h)):(t++,f[b] = h,l++));if(t > a)for(b in (l++,f)) ta.call(e,b) || (t--,delete f[b]);}else f !== e && (f = e,l++);return l;}}c.$stateful = !0;var d=this,e,f,g,k=1 < b.length,l=0,n=h(a,c),p=[],r={},q=!0,t=0;return this.$watch(n,function(){q?(q = !1,b(e,e,d)):b(e,g,d);if(k)if(B(e))if(Da(e)){g = Array(e.length);for(var a=0;a < e.length;a++) g[a] = e[a];}else for(a in (g = {},e)) ta.call(e,a) && (g[a] = e[a]);else g = e;});},$digest:function $digest(){var b,f,h,k,n,r,t=a,m,u=[],D,v;p("$digest");l.$$checkUrlChange();this === q && null !== e && (l.defer.cancel(e),s());d = null;do {r = !1;for(m = this;z.length;) {try{v = z.shift(),v.scope.$eval(v.expression,v.locals);}catch(w) {g(w);}d = null;}a: do {if(k = m.$$watchers)for(n = k.length;n--;) try{if(b = k[n])if((f = b.get(m)) !== (h = b.last) && !(b.eq?ka(f,h):"number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h)))r = !0,d = b,b.last = b.eq?ga(f,null):f,b.fn(f,h === E?f:h,m),5 > t && (D = 4 - t,u[D] || (u[D] = []),u[D].push({msg:x(b.exp)?"fn: " + (b.exp.name || b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b === d){r = !1;break a;}}catch(y) {g(y);}if(!(k = m.$$watchersCount && m.$$childHead || m !== this && m.$$nextSibling))for(;m !== this && !(k = m.$$nextSibling);) m = m.$parent;}while(m = k);if((r || z.length) && ! t--)throw (q.$$phase = null,c("infdig",a,u));}while(r || z.length);for(q.$$phase = null;N.length;) try{N.shift()();}catch(A) {g(A);}},$destroy:function $destroy(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === q && l.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount) t(this,this.$$listenerCount[b],b);a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = y;this.$on = this.$watch = this.$watchGroup = function(){return y;};this.$$listeners = {};this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;}},$eval:function $eval(a,b){return h(a)(this,b);},$evalAsync:function $evalAsync(a,b){q.$$phase || z.length || l.defer(function(){z.length && q.$digest();});z.push({scope:this,expression:a,locals:b});},$$postDigest:function $$postDigest(a){N.push(a);},$apply:function $apply(a){try{p("$apply");try{return this.$eval(a);}finally {q.$$phase = null;}}catch(b) {g(b);}finally {try{q.$digest();}catch(c) {throw (g(c),c);}}},$applyAsync:function $applyAsync(a){function b(){c.$eval(a);}var c=this;a && w.push(b);u();},$on:function $on(a,b){var c=this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d=this;do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0),d.$$listenerCount[a]++;while(d = d.$parent);var e=this;return function(){var d=c.indexOf(b);-1 !== d && (c[d] = null,t(e,1,a));};},$emit:function $emit(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function stopPropagation(){f = !0;},preventDefault:function preventDefault(){h.defaultPrevented = !0;},defaultPrevented:!1},k=db([h],arguments,1),l,n;do {d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for(n = d.length;l < n;l++) if(d[l])try{d[l].apply(null,k);}catch(p) {g(p);}else d.splice(l,1),l--,n--;if(f)return (h.currentScope = null,h);e = e.$parent;}while(e);h.currentScope = null;return h;},$broadcast:function $broadcast(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function preventDefault(){e.defaultPrevented = !0;},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=db([e],arguments,1),h,k;c = d;) {e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for(k = d.length;h < k;h++) if(d[h])try{d[h].apply(null,f);}catch(l) {g(l);}else d.splice(h,1),h--,k--;if(!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for(;c !== this && !(d = c.$$nextSibling);) c = c.$parent;}e.currentScope = null;return e;}};var q=new n(),z=q.$$asyncQueue = [],N=q.$$postDigestQueue = [],w=q.$$applyAsyncQueue = [];return q;}];}function ee(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function(a){return A(a)?(b = a,this):b;};this.imgSrcSanitizationWhitelist = function(b){return A(b)?(a = b,this):a;};this.$get = function(){return function(c,d){var e=d?a:b,f;f = Aa(c).href;return "" === f || f.match(e)?c:"unsafe:" + f;};};}function Xf(b){if("self" === b)return b;if(G(b)){if(-1 < b.indexOf("***"))throw Ca("iwcard",b);b = sd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^" + b + "$");}if(Oa(b))return new RegExp("^" + b.source + "$");throw Ca("imatcher");}function td(b){var a=[];A(b) && m(b,function(b){a.push(Xf(b));});return a;}function mf(){this.SCE_CONTEXTS = oa;var b=["self"],a=[];this.resourceUrlWhitelist = function(a){arguments.length && (b = td(a));return b;};this.resourceUrlBlacklist = function(b){arguments.length && (a = td(b));return a;};this.$get = ["$injector",function(c){function d(a,b){return "self" === a?ed(b):!!a.exec(b.href);}function e(a){var b=function b(a){this.$$unwrapTrustedValue = function(){return a;};};a && (b.prototype = new a());b.prototype.valueOf = function(){return this.$$unwrapTrustedValue();};b.prototype.toString = function(){return this.$$unwrapTrustedValue().toString();};return b;}var f=function f(a){throw Ca("unsafe");};c.has("$sanitize") && (f = c.get("$sanitize"));var g=e(),h={};h[oa.HTML] = e(g);h[oa.CSS] = e(g);h[oa.URL] = e(g);h[oa.JS] = e(g);h[oa.RESOURCE_URL] = e(h[oa.URL]);return {trustAs:function trustAs(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null === b || v(b) || "" === b)return b;if("string" !== typeof b)throw Ca("itype",a);return new c(b);},getTrusted:function getTrusted(c,e){if(null === e || v(e) || "" === e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g && e instanceof g)return e.$$unwrapTrustedValue();if(c === oa.RESOURCE_URL){var g=Aa(e.toString()),p,r,t=!1;p = 0;for(r = b.length;p < r;p++) if(d(b[p],g)){t = !0;break;}if(t)for(p = 0,r = a.length;p < r;p++) if(d(a[p],g)){t = !1;break;}if(t)return e;throw Ca("insecurl",e.toString());}if(c === oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function valueOf(a){return a instanceof g?a.$$unwrapTrustedValue():a;}};}];}function lf(){var b=!0;this.enabled = function(a){arguments.length && (b = !!a);return b;};this.$get = ["$parse","$sceDelegate",function(a,c){if(b && 8 > Wa)throw Ca("iequirks");var d=ja(oa);d.isEnabled = function(){return b;};d.trustAs = c.trustAs;d.getTrusted = c.getTrusted;d.valueOf = c.valueOf;b || (d.trustAs = d.getTrusted = function(a,b){return b;},d.valueOf = $a);d.parseAs = function(b,c){var e=a(c);return e.literal && e.constant?e:a(c,function(a){return d.getTrusted(b,a);});};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(oa,function(a,b){var c=F(b);d[gb("parse_as_" + c)] = function(b){return e(a,b);};d[gb("get_trusted_" + c)] = function(b){return f(a,b);};d[gb("trust_as_" + c)] = function(b){return g(a,b);};});return d;}];}function nf(){this.$get = ["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(F((b.navigator || {}).userAgent)) || [])[1]),e=/Boxee/i.test((b.navigator || {}).userAgent),f=a[0] || {},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body && f.body.style,k=!1,n=!1;if(l){for(var p in l) if(k = h.exec(p)){g = k[0];g = g.substr(0,1).toUpperCase() + g.substr(1);break;}g || (g = "WebkitOpacity" in l && "webkit");k = !!("transition" in l || g + "Transition" in l);n = !!("animation" in l || g + "Animation" in l);!d || k && n || (k = G(l.webkitTransition),n = G(l.webkitAnimation));}return {history:!(!b.history || !b.history.pushState || 4 > d || e),hasEvent:function hasEvent(a){if("input" === a && 11 >= Wa)return !1;if(v(c[a])){var b=f.createElement("div");c[a] = "on" + a in b;}return c[a];},csp:Fa(),vendorPrefix:g,transitions:k,animations:n,android:d};}];}function pf(){this.$get = ["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;G(f) && b.get(f) || (f = d.getTrustedResourceUrl(f));var h=a.defaults && a.defaults.transformResponse;J(h)?h = h.filter(function(a){return a !== Zb;}):h === Zb && (h = null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--;}).then(function(a){b.put(f,a.data);return a.data;},function(a){if(!g)throw fa("tpload",f,a.status,a.statusText);return c.reject(a);});}e.totalPendingRequests = 0;return e;}];}function qf(){this.$get = ["$rootScope","$browser","$location",function(b,a,c){return {findBindings:function findBindings(a,b,c){a = a.getElementsByClassName("ng-binding");var g=[];m(a,function(a){var d=aa.element(a).data("$binding");d && m(d,function(d){c?new RegExp("(^|\\s)" + sd(b) + "(\\s|\\||$)").test(d) && g.push(a):-1 != d.indexOf(b) && g.push(a);});});return g;},findModels:function findModels(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h < g.length;++h) {var l=a.querySelectorAll("[" + g[h] + "model" + (c?"=":"*=") + '"' + b + '"]');if(l.length)return l;}},getLocation:function getLocation(){return c.url();},setLocation:function setLocation(a){a !== c.url() && (c.url(a),b.$digest());},whenStable:function whenStable(b){a.notifyWhenNoOutstandingRequests(b);}};}];}function rf(){this.$get = ["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){x(f) || (k = l,l = f,f = y);var n=ua.call(arguments,3),p=A(k) && !k,r=(p?d:c).defer(),t=r.promise,m;m = a.defer(function(){try{r.resolve(f.apply(null,n));}catch(a) {r.reject(a),e(a);}finally {delete g[t.$$timeoutId];}p || b.$apply();},l);t.$$timeoutId = m;g[m] = r;return t;}var g={};f.cancel = function(b){return b && b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1;};return f;}];}function Aa(b){Wa && (Z.setAttribute("href",b),b = Z.href);Z.setAttribute("href",b);return {href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/" === Z.pathname.charAt(0)?Z.pathname:"/" + Z.pathname};}function ed(b){b = G(b)?Aa(b):b;return b.protocol === ud.protocol && b.host === ud.host;}function sf(){this.$get = qa(Q);}function vd(b){function a(a){try{return decodeURIComponent(a);}catch(b) {return a;}}var c=b[0] || {},d={},e="";return function(){var b,g,h,l,k;b = c.cookie || "";if(b !== e)for(e = b,b = e.split("; "),d = {},h = 0;h < b.length;h++) g = b[h],l = g.indexOf("="),0 < l && (k = a(g.substring(0,l)),v(d[k]) && (d[k] = a(g.substring(l + 1))));return d;};}function wf(){this.$get = vd;}function Jc(b){function a(c,d){if(B(c)){var e={};m(c,function(b,c){e[c] = a(c,b);});return e;}return b.factory(c + "Filter",d);}this.register = a;this.$get = ["$injector",function(a){return function(b){return a.get(b + "Filter");};}];a("currency",wd);a("date",xd);a("filter",Yf);a("json",Zf);a("limitTo",$f);a("lowercase",ag);a("number",yd);a("orderBy",zd);a("uppercase",bg);}function Yf(){return function(b,a,c){if(!Da(b)){if(null == b)return b;throw I("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d = !0;case "object":a = cg(a,c,d);break;default:return b;}return Array.prototype.filter.call(b,a);};}function cg(b,a,c){var d=B(b) && "$" in b;!0 === a?a = ka:x(a) || (a = function(a,b){if(v(a))return !1;if(null === a || null === b)return a === b;if(B(b) || B(a) && !pc(a))return !1;a = F("" + a);b = F("" + b);return -1 !== a.indexOf(b);});return function(e){return d && !B(e)?Ma(e,b.$,a,!1):Ma(e,b,a,c);};}function Ma(_x18,_x19,_x20,_x21,_x22){var _again3=true;_function3: while(_again3) {var b=_x18,a=_x19,c=_x20,d=_x21,e=_x22;f = g = h = undefined;_again3 = false;var f=gc(b),g=gc(a);if("string" === g && "!" === a.charAt(0))return !Ma(b,a.substring(1),c,d);if(J(b))return b.some(function(b){return Ma(b,a,c,d);});switch(f){case "object":var h;if(d){for(h in b) if("$" !== h.charAt(0) && Ma(b[h],a,c,!0))return !0;if(e){return !1;}else {_x18 = b;_x19 = a;_x20 = c;_x21 = !1;_x22 = undefined;_again3 = true;continue _function3;}}if("object" === g){for(h in a) if((e = a[h],!x(e) && !v(e) && (f = "$" === h,!Ma(f?b:b[h],e,c,f,f))))return !1;return !0;}return c(b,a);case "function":return !1;default:return c(b,a);}}}function gc(b){return null === b?"null":typeof b;}function wd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){v(d) && (d = a.CURRENCY_SYM);v(e) && (e = a.PATTERNS[1].maxFrac);return null == b?b:Ad(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d);};}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null == b?b:Ad(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d);};}function Ad(b,a,c,d,e){if(B(b))return "";var f=0 > b;b = Math.abs(b);var g=Infinity === b;if(!g && !isFinite(b))return "";var h=b + "",l="",k=!1,n=[];g && (l = "∞");if(!g && -1 !== h.indexOf("e")){var p=h.match(/([\d\.]+)e(-?)(\d+)/);p && "-" == p[2] && p[3] > e + 1?b = 0:(l = h,k = !0);}if(g || k)0 < e && 1 > b && (l = b.toFixed(e),b = parseFloat(l));else {g = (h.split(Bd)[1] || "").length;v(e) && (e = Math.min(Math.max(a.minFrac,g),a.maxFrac));b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);var g=("" + b).split(Bd),h=g[0],g=g[1] || "",p=0,r=a.lgSize,t=a.gSize;if(h.length >= r + t)for(p = h.length - r,k = 0;k < p;k++) 0 === (p - k) % t && 0 !== k && (l += c),l += h.charAt(k);for(k = p;k < h.length;k++) 0 === (h.length - k) % r && 0 !== k && (l += c),l += h.charAt(k);for(;g.length < e;) g += "0";e && "0" !== e && (l += d + g.substr(0,e));}0 === b && (f = !1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("");}function Gb(b,a,c){var d="";0 > b && (d = "-",b = -b);for(b = "" + b;b.length < a;) b = "0" + b;c && (b = b.substr(b.length - a));return d + b;}function $(b,a,c,d){c = c || 0;return function(e){e = e["get" + b]();if(0 < c || e > -c)e += c;0 === e && -12 == c && (e = 12);return Gb(e,a,d);};}function Hb(b,a){return function(c,d){var e=c["get" + b](),f=sb(a?"SHORT" + b:b);return d[f][e];};}function Cd(b){var a=new Date(b,0,1).getDay();return new Date(b,0,(4 >= a?5:12) - a);}function Dd(b){return function(a){var c=Cd(a.getFullYear());a = +new Date(a.getFullYear(),a.getMonth(),a.getDate() + (4 - a.getDay())) - +c;a = 1 + Math.round(a / 6048E5);return Gb(a,b);};}function hc(b,a){return 0 >= b.getFullYear()?a.ERAS[0]:a.ERAS[1];}function xd(b){function a(a){var b;if(b = a.match(c)){a = new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9] && (f = Y(b[9] + b[10]),g = Y(b[9] + b[11]));h.call(a,Y(b[1]),Y(b[2]) - 1,Y(b[3]));f = Y(b[4] || 0) - f;g = Y(b[5] || 0) - g;h = Y(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));l.call(a,f,g,h,b);}return a;}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e = e || "mediumDate";e = b.DATETIME_FORMATS[e] || e;G(c) && (c = dg.test(c)?Y(c):a(c));V(c) && (c = new Date(c));if(!da(c) || !isFinite(c.getTime()))return c;for(;e;) (k = eg.exec(e))?(h = db(h,k,1),e = h.pop()):(h.push(e),e = null);var n=c.getTimezoneOffset();f && (n = vc(f,c.getTimezoneOffset()),c = Ob(c,f,!0));m(h,function(a){l = fg[a];g += l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'");});return g;};}function Zf(){return function(b,a){v(a) && (a = 2);return eb(b,a);};}function $f(){return function(b,a,c){a = Infinity === Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;V(b) && (b = b.toString());if(!J(b) && !G(b))return b;c = !c || isNaN(c)?0:Y(c);c = 0 > c && c >= -b.length?b.length + c:c;return 0 <= a?b.slice(c,c + a):0 === c?b.slice(a,b.length):b.slice(Math.max(0,c + a),c);};}function zd(b){function a(a,c){c = c?-1:1;return a.map(function(a){var d=1,h=$a;if(x(a))h = a;else if(G(a)){if("+" == a.charAt(0) || "-" == a.charAt(0))d = "-" == a.charAt(0)?-1:1,a = a.substring(1);if("" !== a && (h = b(a),h.constant))var l=h(),h=function h(a){return a[l];};}return {get:h,descending:d * c};});}function c(a){switch(typeof a){case "number":case "boolean":case "string":return !0;default:return !1;}}return function(b,e,f){if(!Da(b))return b;J(e) || (e = [e]);0 === e.length && (e = ["+"]);var g=a(e,f);g.push({get:function get(){return {};},descending:f?-1:1});b = Array.prototype.map.call(b,function(a,b){return {value:a,predicateValues:g.map(function(d){var e=d.get(a);d = typeof e;if(null === e)d = "string",e = "null";else if("string" === d)e = e.toLowerCase();else if("object" === d)a: {if("function" === typeof e.valueOf && (e = e.valueOf(),c(e)))break a;if(pc(e) && (e = e.toString(),c(e)))break a;e = b;}return {value:e,type:d};})};});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d < e;++d) {var c=a.predicateValues[d],f=b.predicateValues[d],t=0;c.type === f.type?c.value !== f.value && (t = c.value < f.value?-1:1):t = c.type < f.type?-1:1;if(c = t * g[d].descending)break;}return c;});return b = b.map(function(a){return a.value;});};}function Na(b){x(b) && (b = {link:b});b.restrict = b.restrict || "AC";return qa(b);}function Ed(b,a,c,d,e){var f=this,g=[];f.$error = {};f.$$success = {};f.$pending = w;f.$name = e(a.name || a.ngForm || "")(c);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Ib;f.$rollbackViewValue = function(){m(g,function(a){a.$rollbackViewValue();});};f.$commitViewValue = function(){m(g,function(a){a.$commitViewValue();});};f.$addControl = function(a){Ta(a.$name,"input");g.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;};f.$$renameControl = function(a,b){var c=a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;};f.$removeControl = function(a){a.$name && f[a.$name] === a && delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a);});m(f.$error,function(b,c){f.$setValidity(c,null,a);});m(f.$$success,function(b,c){f.$setValidity(c,null,a);});cb(g,a);a.$$parentForm = Ib;};Fd({ctrl:this,$element:b,set:function set(a,b,c){var d=a[b];d?-1 === d.indexOf(c) && d.push(c):a[b] = [c];},unset:function unset(a,b,c){var d=a[b];d && (cb(d,c),0 === d.length && delete a[b]);},$animate:d});f.$setDirty = function(){d.removeClass(b,Ya);d.addClass(b,Jb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();};f.$setPristine = function(){d.setClass(b,Ya,Jb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;m(g,function(a){a.$setPristine();});};f.$setUntouched = function(){m(g,function(a){a.$setUntouched();});};f.$setSubmitted = function(){d.addClass(b,"ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();};}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString();});}function jb(b,a,c,d,e,f){var g=F(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h = !0;});a.on("compositionend",function(){h = !1;l();});}var l=function l(b){k && (f.defer.cancel(k),k = null);if(!h){var e=a.val();b = b && b.type;"password" === g || c.ngTrim && "false" === c.ngTrim || (e = T(e));(d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e,b);}};if(e.hasEvent("input"))a.on("input",l);else {var k,n=function n(a,b,c){k || (k = f.defer(function(){k = null;b && b.value === c || l(a);}));};a.on("keydown",function(a){var b=a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || n(a,this,this.value);});if(e.hasEvent("paste"))a.on("paste cut",n);}a.on("change",l);d.$render = function(){var b=d.$isEmpty(d.$viewValue)?"":d.$viewValue;a.val() !== b && a.val(b);};}function Kb(b,a){return function(c,d){var e,f;if(da(c))return c;if(G(c)){'"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1,c.length - 1));if(gg.test(c))return new Date(c);b.lastIndex = 0;if(e = b.exec(c))return (e.shift(),f = d?{yyyy:d.getFullYear(),MM:d.getMonth() + 1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds() / 1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c < a.length && (f[a[c]] = +b);}),new Date(f.yyyy,f.MM - 1,f.dd,f.HH,f.mm,f.ss || 0,1E3 * f.sss || 0));}return NaN;};}function kb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a && !(a.getTime && a.getTime() !== a.getTime());}function r(a){return A(a) && !da(a)?c(a) || w:a;}Gd(e,f,g,h);jb(e,f,g,h,l,k);var t=h && h.$options && h.$options.timezone,m;h.$$parserName = b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b = c(b,m),t && (b = Ob(b,t)),b):w;});h.$formatters.push(function(a){if(a && !da(a))throw lb("datefmt",a);if(p(a))return ((m = a) && t && (m = Ob(m,t,!0)),n("date")(a,d,t));m = null;return "";});if(A(g.min) || g.ngMin){var s;h.$validators.min = function(a){return !p(a) || v(s) || c(a) >= s;};g.$observe("min",function(a){s = r(a);h.$validate();});}if(A(g.max) || g.ngMax){var u;h.$validators.max = function(a){return !p(a) || v(u) || c(a) <= u;};g.$observe("max",function(a){u = r(a);h.$validate();});}};}function Gd(b,a,c,d){(d.$$hasNativeValidators = B(a[0].validity)) && d.$parsers.push(function(b){var c=a.prop("validity") || {};return c.badInput && !c.typeMismatch?w:b;});}function Hd(b,a,c,d,e){if(A(d)){b = b(d);if(!b.constant)throw lb("constexpr",c,d);return b(a);}return e;}function jc(b,a){b = "ngClass" + b;return ["$animate",function(c){function d(a,b){var c=[],d=0;a: for(;d < a.length;d++) {for(var e=a[d],n=0;n < b.length;n++) if(e == b[n])continue a;c.push(e);}return c;}function e(a){var b=[];return J(a)?(m(a,function(a){b = b.concat(e(a));}),b):G(a)?a.split(" "):B(a)?(m(a,function(a,c){a && (b = b.concat(c.split(" ")));}),b):a;}return {restrict:"AC",link:function link(f,g,h){function l(a,b){var c=g.data("$classCounts") || ha(),d=[];m(a,function(a){if(0 < b || c[a])c[a] = (c[a] || 0) + b,c[a] === +(0 < b) && d.push(a);});g.data("$classCounts",c);return d.join(" ");}function k(b){if(!0 === a || f.$index % 2 === a){var k=e(b || []);if(!n){var m=l(k,1);h.$addClass(m);}else if(!ka(b,n)){var s=e(n),m=d(k,s),k=d(s,k),m=l(m,1),k=l(k,-1);m && m.length && c.addClass(g,m);k && k.length && c.removeClass(g,k);}}n = ja(b);}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]));});"ngClass" !== b && f.$watch("$index",function(c,d){var g=c & 1;if(g !== (d & 1)){var k=e(f.$eval(h[b]));g === a?(g = l(k,1),h.$addClass(g)):(g = l(k,-1),h.$removeClass(g));}});}};}];}function Fd(b){function a(a,b){b && !f[a]?(l.addClass(e,a),f[a] = !0):!b && f[a] && (l.removeClass(e,a),f[a] = !1);}function c(b,c){b = b?"-" + zc(b,"-"):"";a(mb + b,!0 === c);a(Id + b,!1 === c);}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.$animate;f[Id] = !(f[mb] = e.hasClass(mb));d.$setValidity = function(b,e,f){v(e)?(d.$pending || (d.$pending = {}),g(d.$pending,b,f)):(d.$pending && h(d.$pending,b,f),Jd(d.$pending) && (d.$pending = w));bb(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Kd,!0),d.$valid = d.$invalid = w,c("",null)):(a(Kd,!1),d.$valid = Jd(d.$error),d.$invalid = !d.$valid,c("",d.$valid));e = d.$pending && d.$pending[b]?w:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);d.$$parentForm.$setValidity(b,e,d);};}function Jd(b){if(b)for(var a in b) if(b.hasOwnProperty(a))return !1;return !0;}var hg=/^\/(.+)\/([a-z]*)$/,F=function F(b){return G(b)?b.toLowerCase():b;},ta=Object.prototype.hasOwnProperty,sb=function sb(b){return G(b)?b.toUpperCase():b;},Wa,C,ra,ua=[].slice,Kf=[].splice,ig=[].push,va=Object.prototype.toString,qc=Object.getPrototypeOf,Ea=I("ng"),aa=Q.angular || (Q.angular = {}),Rb,nb=0;Wa = X.documentMode;y.$inject = [];$a.$inject = [];var J=Array.isArray,sc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function T(b){return G(b)?b.trim():b;},sd=function sd(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08");},Fa=function Fa(){if(!A(Fa.rules)){var b=X.querySelector("[ng-csp]") || X.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp") || b.getAttribute("data-ng-csp");Fa.rules = {noUnsafeEval:!a || -1 !== a.indexOf("no-unsafe-eval"),noInlineStyle:!a || -1 !== a.indexOf("no-inline-style")};}else {b = Fa;try{new Function(""),a = !1;}catch(c) {a = !0;}b.rules = {noUnsafeEval:a,noInlineStyle:!1};}}return Fa.rules;},pb=function pb(){if(A(pb.name_))return pb.name_;var b,a,c=Qa.length,d,e;for(a = 0;a < c;++a) if((d = Qa[a],b = X.querySelector("[" + d.replace(":","\\:") + "jq]"))){e = b.getAttribute(d + "jq");break;}return pb.name_ = e;},Qa=["ng-","data-ng-","ng:","x-ng-"],$d=/[A-Z]/g,Ac=!1,Qb,pa=1,Pa=3,de={full:"1.4.6",major:1,minor:4,dot:6,codeName:"multiplicative-elevation"};R.expando = "ng339";var hb=R.cache = {},Cf=1;R._data = function(b){return this.cache[b[this.expando]] || {};};var xf=/([\:\-\_]+(.))/g,yf=/^moz([A-Z])/,jg={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=I("jqLite"),Bf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,zf=/<([\w:]+)/,Af=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ma={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup = ma.option;ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead;ma.th = ma.td;var Ra=R.prototype = {ready:function ready(b){function a(){c || (c = !0,b());}var c=!1;"complete" === X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(Q).on("load",a));},toString:function toString(){var b=[];m(this,function(a){b.push("" + a);});return "[" + b.join(", ") + "]";},eq:function eq(b){return 0 <= b?C(this[b]):C(this[this.length + b]);},length:0,push:ig,sort:[].sort,splice:[].splice},Bb={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[F(b)] = b;});var Rc={};m("input select option textarea button form details".split(" "),function(b){Rc[b] = !0;});var Zc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};m({data:Vb,removeData:vb,hasData:function hasData(b){for(var a in hb[b.ng339]) return !0;return !1;}},function(b,a){R[a] = b;});m({data:Vb,inheritedData:Ab,scope:function scope(b){return C.data(b,"$scope") || Ab(b.parentNode || b,["$isolateScope","$scope"]);},isolateScope:function isolateScope(b){return C.data(b,"$isolateScope") || C.data(b,"$isolateScopeNoTemplate");},controller:Oc,injector:function injector(b){return Ab(b,"$injector");},removeAttr:function removeAttr(b,a){b.removeAttribute(a);},hasClass:xb,css:function css(b,a,c){a = gb(a);if(A(c))b.style[a] = c;else return b.style[a];},attr:function attr(b,a,c){var d=b.nodeType;if(d !== Pa && 2 !== d && 8 !== d)if((d = F(a),Bb[d]))if(A(c))c?(b[a] = !0,b.setAttribute(a,d)):(b[a] = !1,b.removeAttribute(d));else return b[a] || (b.attributes.getNamedItem(a) || y).specified?d:w;else if(A(c))b.setAttribute(a,c);else if(b.getAttribute)return (b = b.getAttribute(a,2),null === b?w:b);},prop:function prop(b,a,c){if(A(c))b[a] = c;else return b[a];},text:(function(){function b(a,b){if(v(b)){var d=a.nodeType;return d === pa || d === Pa?a.textContent:"";}a.textContent = b;}b.$dv = "";return b;})(),val:function val(b,a){if(v(a)){if(b.multiple && "select" === wa(b)){var c=[];m(b.options,function(a){a.selected && c.push(a.value || a.text);});return 0 === c.length?null:c;}return b.value;}b.value = a;},html:function html(b,a){if(v(a))return b.innerHTML;ub(b,!0);b.innerHTML = a;},empty:Pc},function(b,a){R.prototype[a] = function(a,d){var e,f,g=this.length;if(b !== Pc && v(2 == b.length && b !== xb && b !== Oc?a:d)){if(B(a)){for(e = 0;e < g;e++) if(b === Vb)b(this[e],a);else for(f in a) b(this[e],f,a[f]);return this;}e = b.$dv;g = v(e)?Math.min(g,1):g;for(f = 0;f < g;f++) {var h=b(this[f],a,d);e = e?e + h:h;}return e;}for(e = 0;e < g;e++) b(this[e],a,d);return this;};});m({removeData:vb,on:function a(c,d,e,f){if(A(f))throw Tb("onargs");if(Kc(c)){var g=wb(c,!0);f = g.events;var h=g.handle;h || (h = g.handle = Ef(c,f));for(var g=0 <= d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;) {d = g[l];var k=f[d];k || (f[d] = [],"mouseenter" === d || "mouseleave" === d?a(c,jg[d],function(a){var c=a.relatedTarget;c && (c === this || this.contains(c)) || h(a,d);}):"$destroy" !== d && c.addEventListener(d,h,!1),k = f[d]);k.push(e);}}},off:Nc,one:function one(a,c,d){a = C(a);a.on(c,function f(){a.off(c,d);a.off(c,f);});a.on(c,d);},replaceWith:function replaceWith(a,c){var d,e=a.parentNode;ub(a);m(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d = c;});},children:function children(a){var c=[];m(a.childNodes,function(a){a.nodeType === pa && c.push(a);});return c;},contents:function contents(a){return a.contentDocument || a.childNodes || [];},append:function append(a,c){var d=a.nodeType;if(d === pa || 11 === d){c = new R(c);for(var d=0,e=c.length;d < e;d++) a.appendChild(c[d]);}},prepend:function prepend(a,c){if(a.nodeType === pa){var d=a.firstChild;m(new R(c),function(c){a.insertBefore(c,d);});}},wrap:function wrap(a,c){c = C(c).eq(0).clone()[0];var d=a.parentNode;d && d.replaceChild(c,a);c.appendChild(a);},remove:Wb,detach:function detach(a){Wb(a,!0);},after:function after(a,c){var d=a,e=a.parentNode;c = new R(c);for(var f=0,g=c.length;f < g;f++) {var h=c[f];e.insertBefore(h,d.nextSibling);d = h;}},addClass:zb,removeClass:yb,toggleClass:function toggleClass(a,c,d){c && m(c.split(" "),function(c){var f=d;v(f) && (f = !xb(a,c));(f?zb:yb)(a,c);});},parent:function parent(a){return (a = a.parentNode) && 11 !== a.nodeType?a:null;},next:function next(a){return a.nextElementSibling;},find:function find(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[];},clone:Ub,triggerHandler:function triggerHandler(a,c,d){var e,f,g=c.type || c,h=wb(a);if(h = (h = h && h.events) && h[g])e = {preventDefault:function preventDefault(){this.defaultPrevented = !0;},isDefaultPrevented:function isDefaultPrevented(){return !0 === this.defaultPrevented;},stopImmediatePropagation:function stopImmediatePropagation(){this.immediatePropagationStopped = !0;},isImmediatePropagationStopped:function isImmediatePropagationStopped(){return !0 === this.immediatePropagationStopped;},stopPropagation:y,type:g,target:a},c.type && (e = P(e,c)),c = ja(h),f = d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped() || c.apply(a,f);});}},function(a,c){R.prototype[c] = function(c,e,f){for(var g,h=0,l=this.length;h < l;h++) v(g)?(g = a(this[h],c,e,f),A(g) && (g = C(g))):Mc(g,a(this[h],c,e,f));return A(g)?g:this;};R.prototype.bind = R.prototype.on;R.prototype.unbind = R.prototype.off;});Ua.prototype = {put:function put(a,c){this[Ga(a,this.nextUid)] = c;},get:function get(a){return this[Ga(a,this.nextUid)];},remove:function remove(a){var c=this[a = Ga(a,this.nextUid)];delete this[a];return c;}};var vf=[function(){this.$get = [function(){return Ua;}];}],Tc=/^[^\(]*\(\s*([^\)]*)\)/m,kg=/,/,lg=/^\s*(_?)(\S+?)\1\s*$/,Sc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=I("$injector");fb.$$annotate = function(a,c,d){var e;if("function" === typeof a){if(!(e = a.$inject)){e = [];if(a.length){if(c)throw (G(d) && d || (d = a.name || Ff(a)),Ha("strictdi",d));c = a.toString().replace(Sc,"");c = c.match(Tc);m(c[1].split(kg),function(a){a.replace(lg,function(a,c,d){e.push(d);});});}a.$inject = e;}}else J(a)?(c = a.length - 1,Sa(a[c],"fn"),e = a.slice(0,c)):Sa(a,"fn",!0);return e;};var Ld=I("$animate"),Se=function Se(){this.$get = ["$q","$$rAF",function(a,c){function d(){}d.all = y;d.chain = y;d.prototype = {end:y,cancel:y,resume:y,pause:y,complete:y,then:function then(d,f){return a(function(a){c(function(){a();});}).then(d,f);}};return d;}];},Re=function Re(){var a=new Ua(),c=[];this.$get = ["$$AnimateRunner","$rootScope",function(d,e){function f(a,c,d){var e=!1;c && (c = G(c)?c.split(" "):J(c)?c:[],m(c,function(c){c && (e = !0,a[c] = d);}));return e;}function g(){m(c,function(c){var d=a.get(c);if(d){var e=Gf(c.attr("class")),f="",g="";m(d,function(a,c){a !== !!e[c] && (a?f += (f.length?" ":"") + c:g += (g.length?" ":"") + c);});m(c,function(a){f && zb(a,f);g && yb(a,g);});a.remove(c);}});c.length = 0;}return {enabled:y,on:y,off:y,pin:y,push:function push(h,l,k,n){n && n();k = k || {};k.from && h.css(k.from);k.to && h.css(k.to);if(k.addClass || k.removeClass)if((l = k.addClass,n = k.removeClass,k = a.get(h) || {},l = f(k,l,!0),n = f(k,n,!1),l || n))a.put(h,k),c.push(h),1 === c.length && e.$$postDigest(g);return new d();}};}];},Pe=["$provide",function(a){var c=this;this.$$registeredAnimations = Object.create(null);this.register = function(d,e){if(d && "." !== d.charAt(0))throw Ld("notcsel",d);var f=d + "-animation";c.$$registeredAnimations[d.substr(1)] = f;a.factory(f,e);};this.classNameFilter = function(a){if(1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp?a:null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Ld("nongcls","ng-animate");return this.$$classNameFilter;};this.$get = ["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a: {for(l = 0;l < e.length;l++) {var k=e[l];if(1 === k.nodeType){l = k;break a;}}l = void 0;}!l || l.parentNode || l.previousElementSibling || (e = null);}e?e.after(a):d.prepend(a);}return {on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function cancel(a){a.end && a.end();},enter:function enter(f,g,h,l){g = g && C(g);h = h && C(h);g = g || h.parent();c(f,g,h);return a.push(f,"enter",Ia(l));},move:function move(f,g,h,l){g = g && C(g);h = h && C(h);g = g || h.parent();c(f,g,h);return a.push(f,"move",Ia(l));},leave:function leave(c,e){return a.push(c,"leave",Ia(e),function(){c.remove();});},addClass:function addClass(c,e,h){h = Ia(h);h.addClass = ib(h.addclass,e);return a.push(c,"addClass",h);},removeClass:function removeClass(c,e,h){h = Ia(h);h.removeClass = ib(h.removeClass,e);return a.push(c,"removeClass",h);},setClass:function setClass(c,e,h,l){l = Ia(l);l.addClass = ib(l.addClass,e);l.removeClass = ib(l.removeClass,h);return a.push(c,"setClass",l);},animate:function animate(c,e,h,l,k){k = Ia(k);k.from = k.from?P(k.from,e):e;k.to = k.to?P(k.to,h):h;k.tempClasses = ib(k.tempClasses,l || "ng-inline-animate");return a.push(c,"animate",k);}};}];}],Qe=function Qe(){this.$get = ["$$rAF","$q",function(a,c){var d=function d(){};d.prototype = {done:function done(a){this.defer && this.defer[!0 === a?"reject":"resolve"]();},end:function end(){this.done();},cancel:function cancel(){this.done(!0);},getPromise:function getPromise(){this.defer || (this.defer = c.defer());return this.defer.promise;},then:function then(a,c){return this.getPromise().then(a,c);},"catch":function _catch(a){return this.getPromise()["catch"](a);},"finally":function _finally(a){return this.getPromise()["finally"](a);}};return function(c,f){function g(){a(function(){f.addClass && (c.addClass(f.addClass),f.addClass = null);f.removeClass && (c.removeClass(f.removeClass),f.removeClass = null);f.to && (c.css(f.to),f.to = null);h || l.done();h = !0;});return l;}f.from && (c.css(f.from),f.from = null);var h,l=new d();return {start:g,end:g};};}];},fa=I("$compile");Cc.$inject = ["$provide","$$sanitizeUriProvider"];var Vc=/^((?:x|data)[\:\-_])/i,Lf=I("$controller"),Uc=/^(\S+)(\s+as\s+(\w+))?$/,Ye=function Ye(){this.$get = ["$document",function(a){return function(c){c?!c.nodeType && c instanceof C && (c = c[0]):c = a[0].body;return c.offsetWidth + 1;};}];},$c="application/json",$b={"Content-Type":$c + ";charset=utf-8"},Nf=/^\[|^\{(?!\{)/,Of={"[":/]$/,"{":/}$/},Mf=/^\)\]\}',?\n/,mg=I("$http"),dd=function dd(a){return function(){throw mg("legacy",a);};},La=aa.$interpolateMinErr = I("$interpolate");La.throwNoconcat = function(a){throw La("noconcat",a);};La.interr = function(a,c){return La("interr",a,c.toString());};var ng=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Rf={http:80,https:443,ftp:21},Db=I("$location"),og={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function url(a){if(v(a))return this.$$url;var c=ng.exec(a);(c[1] || "" === a) && this.path(decodeURIComponent(c[1]));(c[2] || c[1] || "" === a) && this.search(c[3] || "");this.hash(c[5] || "");return this;},protocol:Eb("$$protocol"),host:Eb("$$host"),port:Eb("$$port"),path:id("$$path",function(a){a = null !== a?a.toString():"";return "/" == a.charAt(0)?a:"/" + a;}),search:function search(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a) || V(a))a = a.toString(),this.$$search = xc(a);else if(B(a))a = ga(a,{}),m(a,function(c,e){null == c && delete a[e];}),this.$$search = a;else throw Db("isrcharg");break;default:v(c) || null === c?delete this.$$search[a]:this.$$search[a] = c;}this.$$compose();return this;},hash:id("$$hash",function(a){return null !== a?a.toString():"";}),replace:function replace(){this.$$replace = !0;return this;}};m([hd,cc,bc],function(a){a.prototype = Object.create(og);a.prototype.state = function(c){if(!arguments.length)return this.$$state;if(a !== bc || !this.$$html5)throw Db("nostate");this.$$state = v(c)?null:c;return this;};});var ea=I("$parse"),Sf=Function.prototype.call,Tf=Function.prototype.apply,Uf=Function.prototype.bind,Lb=ha();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a] = !0;});var pg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},ec=function ec(a){this.options = a;};ec.prototype = {constructor:ec,lex:function lex(a){this.text = a;this.index = 0;for(this.tokens = [];this.index < this.text.length;) if((a = this.text.charAt(this.index),'"' === a || "'" === a))this.readString(a);else if(this.isNumber(a) || "." === a && this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else {var c=a + this.peek(),d=c + this.peek(2),e=Lb[c],f=Lb[d];Lb[a] || e || f?(a = f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index += a.length):this.throwError("Unexpected next character ",this.index,this.index + 1);}return this.tokens;},is:function is(a,c){return -1 !== c.indexOf(a);},peek:function peek(a){a = a || 1;return this.index + a < this.text.length?this.text.charAt(this.index + a):!1;},isNumber:function isNumber(a){return "0" <= a && "9" >= a && "string" === typeof a;},isWhitespace:function isWhitespace(a){return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || " " === a;},isIdent:function isIdent(a){return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;},isExpOperator:function isExpOperator(a){return "-" === a || "+" === a || this.isNumber(a);},throwError:function throwError(a,c,d){d = d || this.index;c = A(c)?"s " + c + "-" + this.index + " [" + this.text.substring(c,d) + "]":" " + d;throw ea("lexerr",a,c,this.text);},readNumber:function readNumber(){for(var a="",c=this.index;this.index < this.text.length;) {var d=F(this.text.charAt(this.index));if("." == d || this.isNumber(d))a += d;else {var e=this.peek();if("e" == d && this.isExpOperator(e))a += d;else if(this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d;else if(!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))break;else this.throwError("Invalid exponent");}this.index++;}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)});},readIdent:function readIdent(){for(var a=this.index;this.index < this.text.length;) {var c=this.text.charAt(this.index);if(!this.isIdent(c) && !this.isNumber(c))break;this.index++;}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0});},readString:function readString(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index < this.text.length;) {var g=this.text.charAt(this.index),e=e + g;if(f)"u" === g?(f = this.text.substring(this.index + 1,this.index + 5),f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"),this.index += 4,d += String.fromCharCode(parseInt(f,16))):d += pg[g] || g,f = !1;else if("\\" === g)f = !0;else {if(g === a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return;}d += g;}this.index++;}this.throwError("Unterminated quote",c);}};var s=function s(a,c){this.lexer = a;this.options = c;};s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.NGValueParameter = "NGValueParameter";s.prototype = {ast:function ast(a){this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token",this.tokens[0]);return a;},program:function program(){for(var a=[];;) if((0 < this.tokens.length && !this.peek("}",")",";","]") && a.push(this.expressionStatement()),!this.expect(";")))return {type:s.Program,body:a};},expressionStatement:function expressionStatement(){return {type:s.ExpressionStatement,expression:this.filterChain()};},filterChain:function filterChain(){for(var a=this.expression();this.expect("|");) a = this.filter(a);return a;},expression:function expression(){return this.assignment();},assignment:function assignment(){var a=this.ternary();this.expect("=") && (a = {type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a;},ternary:function ternary(){var a=this.logicalOR(),c,d;return this.expect("?") && (c = this.expression(),this.consume(":"))?(d = this.expression(),{type:s.ConditionalExpression,test:a,alternate:c,consequent:d}):a;},logicalOR:function logicalOR(){for(var a=this.logicalAND();this.expect("||");) a = {type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a;},logicalAND:function logicalAND(){for(var a=this.equality();this.expect("&&");) a = {type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a;},equality:function equality(){for(var a=this.relational(),c;c = this.expect("==","!=","===","!==");) a = {type:s.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a;},relational:function relational(){for(var a=this.additive(),c;c = this.expect("<",">","<=",">=");) a = {type:s.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a;},additive:function additive(){for(var a=this.multiplicative(),c;c = this.expect("+","-");) a = {type:s.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a;},multiplicative:function multiplicative(){for(var a=this.unary(),c;c = this.expect("*","/","%");) a = {type:s.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a;},unary:function unary(){var a;return (a = this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary();},primary:function primary(){var a;this.expect("(")?(a = this.filterChain(),this.consume(")")):this.expect("[")?a = this.arrayDeclaration():this.expect("{")?a = this.object():this.constants.hasOwnProperty(this.peek().text)?a = ga(this.constants[this.consume().text]):this.peek().identifier?a = this.identifier():this.peek().constant?a = this.constant():this.throwError("not a primary expression",this.peek());for(var c;c = this.expect("(","[",".");) "(" === c.text?(a = {type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"[" === c.text?(a = {type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"." === c.text?a = {type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a;},filter:function filter(a){a = [a];for(var c={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");) a.push(this.expression());return c;},parseArguments:function parseArguments(){var a=[];if(")" !== this.peekToken().text){do a.push(this.expression());while(this.expect(","));}return a;},identifier:function identifier(){var a=this.consume();a.identifier || this.throwError("is not a valid identifier",a);return {type:s.Identifier,name:a.text};},constant:function constant(){return {type:s.Literal,value:this.consume().value};},arrayDeclaration:function arrayDeclaration(){var a=[];if("]" !== this.peekToken().text){do {if(this.peek("]"))break;a.push(this.expression());}while(this.expect(","));}this.consume("]");return {type:s.ArrayExpression,elements:a};},object:function object(){var a=[],c;if("}" !== this.peekToken().text){do {if(this.peek("}"))break;c = {type:s.Property,kind:"init"};this.peek().constant?c.key = this.constant():this.peek().identifier?c.key = this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value = this.expression();a.push(c);}while(this.expect(","));}this.consume("}");return {type:s.ObjectExpression,properties:a};},throwError:function throwError(a,c){throw ea("syntax",c.text,a,c.index + 1,this.text,this.text.substring(c.index));},consume:function consume(a){if(0 === this.tokens.length)throw ea("ueoe",this.text);var c=this.expect(a);c || this.throwError("is unexpected, expecting [" + a + "]",this.peek());return c;},peekToken:function peekToken(){if(0 === this.tokens.length)throw ea("ueoe",this.text);return this.tokens[0];},peek:function peek(a,c,d,e){return this.peekAhead(0,a,c,d,e);},peekAhead:function peekAhead(a,c,d,e,f){if(this.tokens.length > a){a = this.tokens[a];var g=a.text;if(g === c || g === d || g === e || g === f || !(c || d || e || f))return a;}return !1;},expect:function expect(a,c,d,e){return (a = this.peek(a,c,d,e))?(this.tokens.shift(),a):!1;},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:w},"this":{type:s.ThisExpression}}};pd.prototype = {compile:function compile(a,c){var d=this,e=this.astBuilder.ast(a);this.state = {nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage = "assign";if(g = nd(e))this.state.computing = "assign",f = this.nextId(),this.recurse(g,f),this.return_(f),f = "fn.assign=" + this.generateFunction("assign","s,v,l");g = ld(e.body);d.stage = "inputs";m(g,function(a,c){var e="fn" + c;d.state[e] = {vars:[],body:[],own:{}};d.state.computing = e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId = c;});this.state.computing = "fn";this.stage = "main";this.recurse(e);f = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn","s,l,a,i") + f + this.watchFns() + "return fn;";f = new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f)(this.$filter,Xa,Ba,jd,Vf,kd,a);this.state = this.stage = w;f.literal = od(e);f.constant = e.constant;return f;},USE:"use",STRICT:"strict",watchFns:function watchFns(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var " + c + "=" + d.generateFunction(c,"s"));});c.length && a.push("fn.inputs=[" + c.join(",") + "];");return a.join("");},generateFunction:function generateFunction(a,c){return "function(" + c + "){" + this.varsPrefix(a) + this.body(a) + "};";},filterPrefix:function filterPrefix(){var a=[],c=this;m(this.state.filters,function(d,e){a.push(d + "=$filter(" + c.escape(e) + ")");});return a.length?"var " + a.join(",") + ";":"";},varsPrefix:function varsPrefix(a){return this.state[a].vars.length?"var " + this.state[a].vars.join(",") + ";":"";},body:function body(a){return this.state[a].body.join("");},recurse:function recurse(a,c,d,e,f,g){var h,l,k=this,n,p;e = e || y;if(!g && A(a.watchId))c = c || this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case s.Program:m(a.body,function(c,d){k.recurse(c.expression,w,w,function(a){l = a;});d !== a.body.length - 1?k.current().body.push(l,";"):k.return_(l);});break;case s.Literal:p = this.escape(a.value);this.assign(c,p);e(p);break;case s.UnaryExpression:this.recurse(a.argument,w,w,function(a){l = a;});p = a.operator + "(" + this.ifDefined(l,0) + ")";this.assign(c,p);e(p);break;case s.BinaryExpression:this.recurse(a.left,w,w,function(a){h = a;});this.recurse(a.right,w,w,function(a){l = a;});p = "+" === a.operator?this.plus(h,l):"-" === a.operator?this.ifDefined(h,0) + a.operator + this.ifDefined(l,0):"(" + h + ")" + a.operator + "(" + l + ")";this.assign(c,p);e(p);break;case s.LogicalExpression:c = c || this.nextId();k.recurse(a.left,c);k.if_("&&" === a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case s.ConditionalExpression:c = c || this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case s.Identifier:c = c || this.nextId();d && (d.context = "inputs" === k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name) + "?l:s"),d.computed = !1,d.name = a.name);Xa(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs" === k.stage || "s",function(){f && 1 !== f && k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name));});},c && k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks || Fb(a.name)) && k.addEnsureSafeObject(c);e(c);break;case s.MemberExpression:h = d && (d.context = this.nextId()) || this.nextId();c = c || this.nextId();k.recurse(a.object,h,w,function(){k.if_(k.notNull(h),function(){if(a.computed)l = k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f && 1 !== f && k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),p = k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,p),d && (d.computed = !0,d.name = l);else {Xa(a.property.name);f && 1 !== f && k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));p = k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks || Fb(a.property.name))p = k.ensureSafeObject(p);k.assign(c,p);d && (d.computed = !1,d.name = a.property.name);}},function(){k.assign(c,"undefined");});e(c);},!!f);break;case s.CallExpression:c = c || this.nextId();a.filter?(l = k.filter(a.callee.name),n = [],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c);}),p = l + "(" + n.join(",") + ")",k.assign(c,p),e(c)):(l = k.nextId(),h = {},n = [],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),w,function(a){n.push(k.ensureSafeObject(a));});});h.name?(k.state.expensiveChecks || k.addEnsureSafeObject(h.context),p = k.member(h.context,h.name,h.computed) + "(" + n.join(",") + ")"):p = l + "(" + n.join(",") + ")";p = k.ensureSafeObject(p);k.assign(c,p);},function(){k.assign(c,"undefined");});e(c);}));break;case s.AssignmentExpression:l = this.nextId();h = {};if(!md(a.left))throw ea("lval");this.recurse(a.left,w,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));p = k.member(h.context,h.name,h.computed) + a.operator + l;k.assign(c,p);e(c || p);});},1);break;case s.ArrayExpression:n = [];m(a.elements,function(a){k.recurse(a,k.nextId(),w,function(a){n.push(a);});});p = "[" + n.join(",") + "]";this.assign(c,p);e(p);break;case s.ObjectExpression:n = [];m(a.properties,function(a){k.recurse(a.value,k.nextId(),w,function(c){n.push(k.escape(a.key.type === s.Identifier?a.key.name:"" + a.key.value) + ":" + c);});});p = "{" + n.join(",") + "}";this.assign(c,p);e(p);break;case s.ThisExpression:this.assign(c,"s");e("s");break;case s.NGValueParameter:this.assign(c,"v"),e("v");}},getHasOwnProperty:function getHasOwnProperty(a,c){var d=a + "." + c,e=this.current().own;e.hasOwnProperty(d) || (e[d] = this.nextId(!1,a + "&&(" + this.escape(c) + " in " + a + ")"));return e[d];},assign:function assign(a,c){if(a)return (this.current().body.push(a,"=",c,";"),a);},filter:function filter(a){this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];},ifDefined:function ifDefined(a,c){return "ifDefined(" + a + "," + this.escape(c) + ")";},plus:function plus(a,c){return "plus(" + a + "," + c + ")";},return_:function return_(a){this.current().body.push("return ",a,";");},if_:function if_(a,c,d){if(!0 === a)c();else {var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d && (e.push("else{"),d(),e.push("}"));}},not:function not(a){return "!(" + a + ")";},notNull:function notNull(a){return a + "!=null";},nonComputedMember:function nonComputedMember(a,c){return a + "." + c;},computedMember:function computedMember(a,c){return a + "[" + c + "]";},member:function member(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c);},addEnsureSafeObject:function addEnsureSafeObject(a){this.current().body.push(this.ensureSafeObject(a),";");},addEnsureSafeMemberName:function addEnsureSafeMemberName(a){this.current().body.push(this.ensureSafeMemberName(a),";");},addEnsureSafeFunction:function addEnsureSafeFunction(a){this.current().body.push(this.ensureSafeFunction(a),";");},ensureSafeObject:function ensureSafeObject(a){return "ensureSafeObject(" + a + ",text)";},ensureSafeMemberName:function ensureSafeMemberName(a){return "ensureSafeMemberName(" + a + ",text)";},ensureSafeFunction:function ensureSafeFunction(a){return "ensureSafeFunction(" + a + ",text)";},lazyRecurse:function lazyRecurse(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g);};},lazyAssign:function lazyAssign(a,c){var d=this;return function(){d.assign(a,c);};},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function stringEscapeFn(a){return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);},escape:function escape(a){if(G(a))return "'" + a.replace(this.stringEscapeRegex,this.stringEscapeFn) + "'";if(V(a))return a.toString();if(!0 === a)return "true";if(!1 === a)return "false";if(null === a)return "null";if("undefined" === typeof a)return "undefined";throw ea("esc");},nextId:function nextId(a,c){var d="v" + this.state.nextId++;a || this.current().vars.push(d + (c?"=" + c:""));return d;},current:function current(){return this.state[this.state.computing];}};qd.prototype = {compile:function compile(a,c){var d=this,e=this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = c;U(e,d.$filter);var f,g;if(f = nd(e))g = this.recurse(f);f = ld(e.body);var h;f && (h = [],m(f,function(a,c){var e=d.recurse(a);a.input = e;h.push(e);a.watchId = c;}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression));});f = 0 === e.body.length?function(){}:1 === e.body.length?l[0]:function(a,c){var d;m(l,function(e){d = e(a,c);});return d;};g && (f.assign = function(a,c,d){return g(a,d,c);});h && (f.inputs = h);f.literal = od(e);f.constant = e.constant;return f;},recurse:function recurse(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,c);case s.UnaryExpression:return (f = this.recurse(a.argument),this["unary" + a.operator](f,c));case s.BinaryExpression:return (e = this.recurse(a.left),f = this.recurse(a.right),this["binary" + a.operator](e,f,c));case s.LogicalExpression:return (e = this.recurse(a.left),f = this.recurse(a.right),this["binary" + a.operator](e,f,c));case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case s.Identifier:return (Xa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks || Fb(a.name),c,d,g.expression));case s.MemberExpression:return (e = this.recurse(a.object,!1,!!d),a.computed || (Xa(a.property.name,g.expression),f = a.property.name),a.computed && (f = this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,g.expensiveChecks,c,d,g.expression));case s.CallExpression:return (h = [],m(a.arguments,function(a){h.push(g.recurse(a));}),a.filter && (f = this.$filter(a.callee.name)),a.filter || (f = this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var r=[],m=0;m < h.length;++m) r.push(h[m](a,d,e,g));a = f.apply(w,r,g);return c?{context:w,name:w,value:a}:a;}:function(a,d,e,p){var r=f(a,d,e,p),m;if(null != r.value){Ba(r.context,g.expression);jd(r.value,g.expression);m = [];for(var s=0;s < h.length;++s) m.push(Ba(h[s](a,d,e,p),g.expression));m = Ba(r.value.apply(r.context,m),g.expression);}return c?{value:m}:m;});case s.AssignmentExpression:return (e = this.recurse(a.left,!0,1),f = this.recurse(a.right),function(a,d,h,p){var r=e(a,d,h,p);a = f(a,d,h,p);Ba(r.value,g.expression);r.context[r.name] = a;return c?{value:a}:a;});case s.ArrayExpression:return (h = [],m(a.elements,function(a){h.push(g.recurse(a));}),function(a,d,e,f){for(var g=[],m=0;m < h.length;++m) g.push(h[m](a,d,e,f));return c?{value:g}:g;});case s.ObjectExpression:return (h = [],m(a.properties,function(a){h.push({key:a.key.type === s.Identifier?a.key.name:"" + a.key.value,value:g.recurse(a.value)});}),function(a,d,e,f){for(var g={},m=0;m < h.length;++m) g[h[m].key] = h[m].value(a,d,e,f);return c?{value:g}:g;});case s.ThisExpression:return function(a){return c?{value:a}:a;};case s.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e;};}},"unary+":function unary(a,c){return function(d,e,f,g){d = a(d,e,f,g);d = A(d)?+d:0;return c?{value:d}:d;};},"unary-":function unary(a,c){return function(d,e,f,g){d = a(d,e,f,g);d = A(d)?-d:0;return c?{value:d}:d;};},"unary!":function unary(a,c){return function(d,e,f,g){d = !a(d,e,f,g);return c?{value:d}:d;};},"binary+":function binary(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e = c(e,f,g,h);l = kd(l,e);return d?{value:l}:l;};},"binary-":function binary(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e = c(e,f,g,h);l = (A(l)?l:0) - (A(e)?e:0);return d?{value:l}:l;};},"binary*":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) * c(e,f,g,h);return d?{value:e}:e;};},"binary/":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) / c(e,f,g,h);return d?{value:e}:e;};},"binary%":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) % c(e,f,g,h);return d?{value:e}:e;};},"binary===":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) === c(e,f,g,h);return d?{value:e}:e;};},"binary!==":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) !== c(e,f,g,h);return d?{value:e}:e;};},"binary==":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) == c(e,f,g,h);return d?{value:e}:e;};},"binary!=":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) != c(e,f,g,h);return d?{value:e}:e;};},"binary<":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) < c(e,f,g,h);return d?{value:e}:e;};},"binary>":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) > c(e,f,g,h);return d?{value:e}:e;};},"binary<=":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) <= c(e,f,g,h);return d?{value:e}:e;};},"binary>=":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) >= c(e,f,g,h);return d?{value:e}:e;};},"binary&&":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) && c(e,f,g,h);return d?{value:e}:e;};},"binary||":function binary(a,c,d){return function(e,f,g,h){e = a(e,f,g,h) || c(e,f,g,h);return d?{value:e}:e;};},"ternary?:":function ternary(a,c,d,e){return function(f,g,h,l){f = a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f;};},value:function value(a,c){return function(){return c?{context:w,name:w,value:a}:a;};},identifier:function identifier(a,c,d,e,f){return function(g,h,l,k){g = h && a in h?h:g;e && 1 !== e && g && !g[a] && (g[a] = {});h = g?g[a]:w;c && Ba(h,f);return d?{context:g,name:a,value:h}:h;};},computedMember:function computedMember(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),p,m;null != n && (p = c(g,h,l,k),Xa(p,f),e && 1 !== e && n && !n[p] && (n[p] = {}),m = n[p],Ba(m,f));return d?{context:n,name:p,value:m}:m;};},nonComputedMember:function nonComputedMember(a,c,d,e,f,g){return function(h,l,k,n){h = a(h,l,k,n);f && 1 !== f && h && !h[c] && (h[c] = {});l = null != h?h[c]:w;(d || Fb(c)) && Ba(l,g);return e?{context:h,name:c,value:l}:l;};},inputs:function inputs(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f);};}};var fc=function fc(a,c,d){this.lexer = a;this.$filter = c;this.options = d;this.ast = new s(this.lexer);this.astCompiler = d.csp?new qd(this.ast,c):new pd(this.ast,c);};fc.prototype = {constructor:fc,parse:function parse(a){return this.astCompiler.compile(a,this.options.expensiveChecks);}};ha();ha();var Wf=Object.prototype.valueOf,Ca=I("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},fa=I("$compile"),Z=X.createElement("a"),ud=Aa(Q.location.href);vd.$inject = ["$document"];Jc.$inject = ["$provide"];wd.$inject = ["$locale"];yd.$inject = ["$locale"];var Bd=".",fg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:(function(_a){function a(_x3,_x4){return _a.apply(this,arguments);}a.toString = function(){return _a.toString();};return a;})(function(a,c){return 12 > a.getHours()?c.AMPMS[0]:c.AMPMS[1];}),Z:function Z(a,c,d){a = -1 * d;return a = (0 <= a?"+":"") + (Gb(Math[0 < a?"floor":"ceil"](a / 60),2) + Gb(Math.abs(a % 60),2));},ww:Dd(2),w:Dd(1),G:hc,GG:hc,GGG:hc,GGGG:function GGGG(a,c){return 0 >= a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1];}},eg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,dg=/^\-?\d+$/;xd.$inject = ["$locale"];var ag=qa(F),bg=qa(sb);zd.$inject = ["$parse"];var fe=qa({restrict:"E",compile:function compile(a,c){if(!c.href && !c.xlinkHref)return function(a,c){if("a" === c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]" === va.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f) || a.preventDefault();});}};}}),tb={};m(Bb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a);});}if("multiple" != a){var e=ya("ng-" + c),f=d;"checked" === a && (f = function(a,c,f){f.ngModel !== f[e] && d(a,c,f);});tb[e] = function(){return {restrict:"A",priority:100,link:f};};}});m(Zc,function(a,c){tb[c] = function(){return {priority:100,link:function link(a,e,f){if("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(hg))){f.$set("ngPattern",new RegExp(e[1],e[2]));return;}a.$watch(f[c],function(a){f.$set(c,a);});}};};});m(["src","srcset","href"],function(a){var c=ya("ng-" + a);tb[c] = function(){return {priority:99,link:function link(d,e,f){var g=a,h=a;"href" === a && "[object SVGAnimatedString]" === va.call(e.prop("href")) && (h = "xlinkHref",f.$attr[h] = "xlink:href",g = null);f.$observe(c,function(c){c?(f.$set(h,c),Wa && g && e.prop(g,f[h])):"href" === a && f.$set(h,null);});}};};});var Ib={$addControl:y,$$renameControl:function $$renameControl(a,c){a.$name = c;},$removeControl:y,$setValidity:y,$setDirty:y,$setPristine:y,$setSubmitted:y};Ed.$inject = ["$element","$attrs","$scope","$animate","$interpolate"];var Md=function Md(a){return ["$timeout","$parse",function(c,d){function e(a){return "" === a?d('this[""]').assign:d(a).assign || y;}return {name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Ed,compile:function compile(d,g){d.addClass(Ya).addClass(mb);var h=g.name?"name":a && g.ngForm?"ngForm":!1;return {pre:function pre(a,d,f,g){var m=g[0];if(!("action" in f)){var t=function t(c){a.$apply(function(){m.$commitViewValue();m.$setSubmitted();});c.preventDefault();};d[0].addEventListener("submit",t,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",t,!1);},0,!1);});}(g[1] || m.$$parentForm).$addControl(m);var s=h?e(m.$name):y;h && (s(a,m),f.$observe(h,function(c){m.$name !== c && (s(a,w),m.$$parentForm.$$renameControl(m,c),s = e(m.$name),s(a,m));}));d.on("$destroy",function(){m.$$parentForm.$removeControl(m);s(a,w);P(m,Ib);});}};}};}];},ge=Md(),te=Md(!0),gg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,qg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,rg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,sg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Nd=/^(\d{4})-(\d{2})-(\d{2})$/,Od=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Pd=/^(\d{4})-(\d\d)$/,Qd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Rd={text:function text(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e);},date:kb("date",Nd,Kb(Nd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Od,Kb(Od,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Qd,Kb(Qd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",kc,function(a,c){if(da(a))return a;if(G(a)){kc.lastIndex = 0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d = 0,h=0,l=0,k=Cd(e),f=7 * (f - 1);c && (d = c.getHours(),g = c.getMinutes(),h = c.getSeconds(),l = c.getMilliseconds());return new Date(e,0,k.getDate() + f,d,g,h,l);}}return NaN;},"yyyy-Www"),month:kb("month",Pd,Kb(Pd,["yyyy","MM"]),"yyyy-MM"),number:function number(a,c,d,e,f,g){Gd(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName = "number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:sg.test(a)?parseFloat(a):w;});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw lb("numfmt",a);a = a.toString();}return a;});if(A(d.min) || d.ngMin){var h;e.$validators.min = function(a){return e.$isEmpty(a) || v(h) || a >= h;};d.$observe("min",function(a){A(a) && !V(a) && (a = parseFloat(a,10));h = V(a) && !isNaN(a)?a:w;e.$validate();});}if(A(d.max) || d.ngMax){var l;e.$validators.max = function(a){return e.$isEmpty(a) || v(l) || a <= l;};d.$observe("max",function(a){A(a) && !V(a) && (a = parseFloat(a,10));l = V(a) && !isNaN(a)?a:w;e.$validate();});}},url:function url(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e);e.$$parserName = "url";e.$validators.url = function(a,c){var d=a || c;return e.$isEmpty(d) || qg.test(d);};},email:function email(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e);e.$$parserName = "email";e.$validators.email = function(a,c){var d=a || c;return e.$isEmpty(d) || rg.test(d);};},radio:function radio(a,c,d,e){v(d.name) && c.attr("name",++nb);c.on("click",function(a){c[0].checked && e.$setViewValue(d.value,a && a.type);});e.$render = function(){c[0].checked = d.value == e.$viewValue;};d.$observe("value",e.$render);},checkbox:function checkbox(a,c,d,e,f,g,h,l){var k=Hd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Hd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a && a.type);});e.$render = function(){c[0].checked = e.$viewValue;};e.$isEmpty = function(a){return !1 === a;};e.$formatters.push(function(a){return ka(a,k);});e.$parsers.push(function(a){return a?k:n;});},hidden:y,button:y,submit:y,reset:y,file:y},Dc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return {restrict:"E",require:["?ngModel"],link:{pre:function pre(f,g,h,l){l[0] && (Rd[F(h.type)] || Rd.text)(f,g,h,l[0],c,a,d,e);}}};}],tg=/^(true|false|\d+)$/,Le=function Le(){return {restrict:"A",priority:100,compile:function compile(a,c){return tg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue));}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a);});};}};},le=["$compile",function(a){return {restrict:"AC",compile:function compile(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e = e[0];c.$watch(f.ngBind,function(a){e.textContent = v(a)?"":a;});};}};}],ne=["$interpolate","$compile",function(a,c){return {compile:function compile(d){c.$$addBindingClass(d);return function(d,f,g){d = a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f = f[0];g.$observe("ngBindTemplate",function(a){f.textContent = v(a)?"":a;});};}};}],me=["$sce","$parse","$compile",function(a,c,d){return {restrict:"A",compile:function compile(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return (a || "").toString();});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c)) || "");});};}};}],Ke=qa({restrict:"A",require:"ngModel",link:function link(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange);});}}),oe=jc("",!0),qe=jc("Odd",0),pe=jc("Even",1),re=Na({compile:function compile(a,c){c.$set("ngCloak",w);a.removeClass("ng-cloak");}}),se=[function(){return {restrict:"A",scope:!0,controller:"@",priority:500};}],Ic={},ug={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-" + a);Ic[c] = ["$parse","$rootScope",function(d,e){return {restrict:"A",compile:function compile(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function f(){h(c,{$event:d});};ug[a] && e.$$phase?c.$evalAsync(f):c.$apply(f);});};}};}];});var ve=["$animate",function(a){return {multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function link(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l || g(function(c,f){l = f;c[c.length++] = X.createComment(" end ngIf: " + e.ngIf + " ");h = {clone:c};a.enter(c,d.parent(),d);}):(k && (k.remove(),k = null),l && (l.$destroy(),l = null),h && (k = rb(h.clone),a.leave(k).then(function(){k = null;}),h = null));});}};}],we=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return {restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:aa.noop,compile:function compile(e,f){var g=f.ngInclude || f.src,h=f.onload || "",l=f.autoscroll;return function(e,f,m,r,t){var s=0,v,u,q,z=function z(){u && (u.remove(),u = null);v && (v.$destroy(),v = null);q && (d.leave(q).then(function(){u = null;}),u = q,q = null);};e.$watch(g,function(g){var m=function m(){!A(l) || l && !e.$eval(l) || c();},p=++s;g?(a(g,!0).then(function(a){if(p === s){var c=e.$new();r.template = a;a = t(c,function(a){z();d.enter(a,null,f).then(m);});v = c;q = a;v.$emit("$includeContentLoaded",g);e.$eval(h);}},function(){p === s && (z(),e.$emit("$includeContentError",g));}),e.$emit("$includeContentRequested",g)):(z(),r.template = null);});};}};}],Ne=["$compile",function(a){return {restrict:"ECA",priority:-400,require:"ngInclude",link:function link(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(f.template,X).childNodes)(c,function(a){d.append(a);},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c));}};}],xe=Na({priority:450,compile:function compile(){return {pre:function pre(a,c,d){a.$eval(d.ngInit);}};}}),Je=function Je(){return {restrict:"A",priority:100,require:"ngModel",link:function link(a,c,d,e){var f=c.attr(d.$attr.ngList) || ", ",g="false" !== d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!v(a)){var c=[];a && m(a.split(h),function(a){a && c.push(g?T(a):a);});return c;}});e.$formatters.push(function(a){return J(a)?a.join(f):w;});e.$isEmpty = function(a){return !a || !a.length;};}};},mb="ng-valid",Id="ng-invalid",Ya="ng-pristine",Jb="ng-dirty",Kd="ng-pending",lb=I("ngModel"),vg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = w;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = w;this.$name = n(d.name || "",!1)(a);this.$$parentForm = Ib;var p=f(d.ngModel),r=p.assign,t=p,s=r,K=null,u,q=this;this.$$setOptions = function(a){if((q.$options = a) && a.getterSetter){var c=f(d.ngModel + "()"),h=f(d.ngModel + "($$$p)");t = function(a){var d=p(a);x(d) && (d = c(a));return d;};s = function(a,c){x(p(a))?h(a,{$$$p:q.$modelValue}):r(a,q.$modelValue);};}else if(!p.assign)throw lb("nonassign",d.ngModel,xa(e));};this.$render = y;this.$isEmpty = function(a){return v(a) || "" === a || null === a || a !== a;};var z=0;Fd({ctrl:this,$element:e,set:function set(a,c){a[c] = !0;},unset:function unset(a,c){delete a[c];},$animate:g});this.$setPristine = function(){q.$dirty = !1;q.$pristine = !0;g.removeClass(e,Jb);g.addClass(e,Ya);};this.$setDirty = function(){q.$dirty = !0;q.$pristine = !1;g.removeClass(e,Ya);g.addClass(e,Jb);q.$$parentForm.$setDirty();};this.$setUntouched = function(){q.$touched = !1;q.$untouched = !0;g.setClass(e,"ng-untouched","ng-touched");};this.$setTouched = function(){q.$touched = !0;q.$untouched = !1;g.setClass(e,"ng-touched","ng-untouched");};this.$rollbackViewValue = function(){h.cancel(K);q.$viewValue = q.$$lastCommittedViewValue;q.$render();};this.$validate = function(){if(!V(q.$modelValue) || !isNaN(q.$modelValue)){var a=q.$$rawModelValue,c=q.$valid,d=q.$modelValue,e=q.$options && q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(f){e || c === f || (q.$modelValue = f?a:w,q.$modelValue !== d && q.$$writeModelToScope());});}};this.$$runValidators = function(a,c,d){function e(){var d=!0;m(q.$validators,function(e,f){var g=e(a,c);d = d && g;h(f,g);});return d?!0:(m(q.$asyncValidators,function(a,c){h(c,null);}),!1);}function f(){var d=[],e=!0;m(q.$asyncValidators,function(f,g){var k=f(a,c);if(!k || !x(k.then))throw lb("$asyncValidators",k);h(g,w);d.push(k.then(function(){h(g,!0);},function(a){e = !1;h(g,!1);}));});d.length?k.all(d).then(function(){g(e);},y):g(!0);}function h(a,c){l === z && q.$setValidity(a,c);}function g(a){l === z && d(a);}z++;var l=z;(function(){var a=q.$$parserName || "parse";if(v(u))h(a,null);else return (u || (m(q.$validators,function(a,c){h(c,null);}),m(q.$asyncValidators,function(a,c){h(c,null);})),h(a,u),u);return !0;})()?e()?f():g(!1):g(!1);};this.$commitViewValue = function(){var a=q.$viewValue;h.cancel(K);if(q.$$lastCommittedViewValue !== a || "" === a && q.$$hasNativeValidators)q.$$lastCommittedViewValue = a,q.$pristine && this.$setDirty(),this.$$parseAndValidate();};this.$$parseAndValidate = function(){var c=q.$$lastCommittedViewValue;if(u = v(c)?w:!0)for(var d=0;d < q.$parsers.length;d++) if((c = q.$parsers[d](c),v(c))){u = !1;break;}V(q.$modelValue) && isNaN(q.$modelValue) && (q.$modelValue = t(a));var e=q.$modelValue,f=q.$options && q.$options.allowInvalid;q.$$rawModelValue = c;f && (q.$modelValue = c,q.$modelValue !== e && q.$$writeModelToScope());q.$$runValidators(c,q.$$lastCommittedViewValue,function(a){f || (q.$modelValue = a?c:w,q.$modelValue !== e && q.$$writeModelToScope());});};this.$$writeModelToScope = function(){s(a,q.$modelValue);m(q.$viewChangeListeners,function(a){try{a();}catch(d) {c(d);}});};this.$setViewValue = function(a,c){q.$viewValue = a;q.$options && !q.$options.updateOnDefault || q.$$debounceViewValueCommit(c);};this.$$debounceViewValueCommit = function(c){var d=0,e=q.$options;e && A(e.debounce) && (e = e.debounce,V(e)?d = e:V(e[c])?d = e[c]:V(e["default"]) && (d = e["default"]));h.cancel(K);d?K = h(function(){q.$commitViewValue();},d):l.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue();});};a.$watch(function(){var c=t(a);if(c !== q.$modelValue && (q.$modelValue === q.$modelValue || c === c)){q.$modelValue = q.$$rawModelValue = c;u = w;for(var d=q.$formatters,e=d.length,f=c;e--;) f = d[e](f);q.$viewValue !== f && (q.$viewValue = q.$$lastCommittedViewValue = f,q.$render(),q.$$runValidators(c,f,y));}return c;});}],Ie=["$rootScope",function(a){return {restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:vg,priority:1,compile:function compile(c){c.addClass(Ya).addClass("ng-untouched").addClass(mb);return {pre:function pre(a,c,f,g){var h=g[0];c = g[1] || h.$$parentForm;h.$$setOptions(g[2] && g[2].$options);c.$addControl(h);f.$observe("name",function(a){h.$name !== a && h.$$parentForm.$$renameControl(h,a);});a.$on("$destroy",function(){h.$$parentForm.$removeControl(h);});},post:function post(c,e,f,g){var h=g[0];if(h.$options && h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a && a.type);});e.on("blur",function(e){h.$touched || (a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched));});}};}};}],wg=/(\s+|^)default(\s+|$)/,Me=function Me(){return {restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options = ga(a.$eval(c.ngModelOptions));A(this.$options.updateOn)?(this.$options.updateOnDefault = !1,this.$options.updateOn = T(this.$options.updateOn.replace(wg,function(){d.$options.updateOnDefault = !0;return " ";}))):this.$options.updateOnDefault = !0;}]};},ye=Na({terminal:!0,priority:1E3}),xg=I("ngOptions"),yg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ge=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,h){this.selectValue = a;this.viewValue = c;this.label = d;this.group = e;this.disabled = h;}function n(a){var c;if(!s && Da(a))c = a;else {c = [];for(var d in a) a.hasOwnProperty(d) && "$" !== d.charAt(0) && c.push(d);}return c;}var m=a.match(yg);if(!m)throw xg("iexp",a,xa(d));var r=m[5] || m[7],s=m[6];a = / as /.test(m[0]) && m[1];var v=m[9];d = c(m[2]?m[1]:r);var w=a && c(a) || d,u=v && c(v),q=v?function(a,c){return u(e,c);}:function(a){return Ga(a);},z=function z(a,c){return q(a,x(a,c));},y=c(m[2] || m[1]),A=c(m[3] || ""),O=c(m[4] || ""),H=c(m[8]),C={},x=s?function(a,c){C[s] = c;C[r] = a;return C;}:function(a){C[r] = a;return C;};return {trackBy:v,getTrackByValue:z,getWatchables:c(H,function(a){var c=[];a = a || [];for(var d=n(a),f=d.length,h=0;h < f;h++) {var g=a === d?h:d[h],k=x(a[g],g),g=q(a[g],k);c.push(g);if(m[2] || m[1])g = y(e,k),c.push(g);m[4] && (k = O(e,k),c.push(k));}return c;}),getOptions:function getOptions(){for(var a=[],c={},d=H(e) || [],h=n(d),g=h.length,m=0;m < g;m++) {var p=d === h?m:h[m],r=x(d[p],p),s=w(e,r),p=q(s,r),t=y(e,r),u=A(e,r),r=O(e,r),s=new f(p,s,t,u,r);a.push(s);c[p] = s;}return {items:a,selectValueMap:c,getOptionFromViewValue:function getOptionFromViewValue(a){return c[z(a)];},getViewValueFromOption:function getViewValueFromOption(a){return v?aa.copy(a.viewValue):a.viewValue;}};}};}var e=X.createElement("option"),f=X.createElement("optgroup");return {restrict:"A",terminal:!0,require:["select","?ngModel"],link:function link(c,h,l,k){function n(a,c){a.element = c;c.disabled = a.disabled;a.value !== c.value && (c.value = a.selectValue);a.label !== c.label && (c.label = a.label,c.textContent = a.label);}function p(a,c,d,e){c && F(c.nodeName) === d?d = c:(d = e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d;}function r(a){for(var c;a;) c = a.nextSibling,Wb(a),a = c;}function s(a){var c=q && q[0],d=H && H[0];if(c || d)for(;a && (a === c || a === d);) a = a.nextSibling;return a;}function v(){var a=x && u.readValue();x = B.getOptions();var c={},d=h[0].firstChild;O && h.prepend(q);d = s(d);x.items.forEach(function(a){var g,k;a.group?(g = c[a.group],g || (g = p(h[0],d,"optgroup",f),d = g.nextSibling,g.label = a.group,g = c[a.group] = {groupElement:g,currentOptionElement:g.firstChild}),k = p(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement = k.nextSibling):(k = p(h[0],d,"option",e),n(a,k),d = k.nextSibling);});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement);});r(d);w.$render();if(!w.$isEmpty(a)){var g=u.readValue();(B.trackBy?ka(a,g):a === g) || (w.$setViewValue(g),w.$render());}}var w=k[1];if(w){var u=k[0];k = l.multiple;for(var q,z=0,y=h.children(),A=y.length;z < A;z++) if("" === y[z].value){q = y.eq(z);break;}var O=!!q,H=C(e.cloneNode(!1));H.val("?");var x,B=d(l.ngOptions,h,c);k?(w.$isEmpty = function(a){return !a || 0 === a.length;},u.writeValue = function(a){x.items.forEach(function(a){a.element.selected = !1;});a && a.forEach(function(a){(a = x.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0);});},u.readValue = function(){var a=h.val() || [],c=[];m(a,function(a){(a = x.selectValueMap[a]) && !a.disabled && c.push(x.getViewValueFromOption(a));});return c;},B.trackBy && c.$watchCollection(function(){if(J(w.$viewValue))return w.$viewValue.map(function(a){return B.getTrackByValue(a);});},function(){w.$render();})):(u.writeValue = function(a){var c=x.getOptionFromViewValue(a);c && !c.disabled?h[0].value !== c.selectValue && (H.remove(),O || q.remove(),h[0].value = c.selectValue,c.element.selected = !0,c.element.setAttribute("selected","selected")):null === a || O?(H.remove(),O || h.prepend(q),h.val(""),q.prop("selected",!0),q.attr("selected",!0)):(O || q.remove(),h.prepend(H),h.val("?"),H.prop("selected",!0),H.attr("selected",!0));},u.readValue = function(){var a=x.selectValueMap[h.val()];return a && !a.disabled?(O || q.remove(),H.remove(),x.getViewValueFromOption(a)):null;},B.trackBy && c.$watch(function(){return B.getTrackByValue(w.$viewValue);},function(){w.$render();}));O?(q.remove(),a(q)(c),q.removeClass("ng-scope")):q = C(e.cloneNode(!1));v();c.$watchCollection(B.getWatchables,v);}}};}],ze=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return {link:function link(g,h,l){function k(a){h.text(a || "");}var n=l.count,p=l.$attr.when && h.attr(l.$attr.when),r=l.offset || 0,s=g.$eval(p) || {},w={},A=c.startSymbol(),u=c.endSymbol(),q=A + n + "-" + r + u,z=aa.noop,x;m(l,function(a,c){var d=f.exec(c);d && (d = (d[1]?"-":"") + F(d[2]),s[d] = h.attr(l.$attr[c]));});m(s,function(a,d){w[d] = c(a.replace(e,q));});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f || e in s || (e = a.pluralCat(e - r));e === x || f && V(x) && isNaN(x) || (z(),f = w[e],v(f)?(null != c && d.debug("ngPluralize: no rule defined for '" + e + "' in " + p),z = y,k()):z = g.$watch(f,k),x = e);});}};}],Ae=["$parse","$animate",function(a,c){var d=I("ngRepeat"),e=(function(_e){function e(_x5,_x6,_x7,_x8,_x9,_x10,_x11){return _e.apply(this,arguments);}e.toString = function(){return _e.toString();};return e;})(function(a,c,d,e,k,m,p){a[d] = e;k && (a[k] = m);a.$index = c;a.$first = 0 === c;a.$last = c === p - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (c & 1));});return {restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function compile(f,g){var h=g.ngRepeat,l=X.createComment(" end ngRepeat: " + h + " "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],r=k[3],s=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var v=k[3] || k[1],y=k[2];if(r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var u,q,z,A,x={$id:Ga};s?u = a(s):(z = function(a,c){return Ga(c);},A = function(a){return a;});return function(a,f,g,k,n){u && (q = function(c,d,e){y && (x[y] = c);x[v] = d;x.$index = e;return u(a,x);});var s=ha();a.$watchCollection(p,function(g){var k,p,t=f[0],u,x=ha(),B,G,J,M,I,F,L;r && (a[r] = g);if(Da(g))I = g,p = q || z;else for(L in (p = q || A,I = [],g)) ta.call(g,L) && "$" !== L.charAt(0) && I.push(L);B = I.length;L = Array(B);for(k = 0;k < B;k++) if((G = g === I?k:I[k],J = g[G],M = p(G,J,k),s[M]))F = s[M],delete s[M],x[M] = F,L[k] = F;else {if(x[M])throw (m(L,function(a){a && a.scope && (s[a.id] = a);}),d("dupes",h,M,J));L[k] = {id:M,scope:w,clone:w};x[M] = !0;}for(u in s) {F = s[u];M = rb(F.clone);c.leave(M);if(M[0].parentNode)for(k = 0,p = M.length;k < p;k++) M[k].$$NG_REMOVED = !0;F.scope.$destroy();}for(k = 0;k < B;k++) if((G = g === I?k:I[k],J = g[G],F = L[k],F.scope)){u = t;do u = u.nextSibling;while(u && u.$$NG_REMOVED);F.clone[0] != u && c.move(rb(F.clone),null,C(t));t = F.clone[F.clone.length - 1];e(F.scope,k,v,J,y,G,B);}else n(function(a,d){F.scope = d;var f=l.cloneNode(!1);a[a.length++] = f;c.enter(a,null,C(t));t = f;F.clone = a;x[F.id] = F;e(F.scope,k,v,J,y,G,B);});s = x;});};}};}],Be=["$animate",function(a){return {restrict:"A",multiElement:!0,link:function link(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"});});}};}],ue=["$animate",function(a){return {restrict:"A",multiElement:!0,link:function link(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"});});}};}],Ce=Na(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d && a !== d && m(d,function(a,d){c.css(d,"");});a && c.css(a);},!0);}),De=["$animate",function(a){return {require:"ngSwitch",controller:["$scope",function(){this.cases = {};}],link:function link(c,d,e,f){var g=[],h=[],l=[],k=[],n=function n(a,c){return function(){a.splice(c,1);};};c.$watch(e.ngSwitch || e.on,function(c){var d,e;d = 0;for(e = l.length;d < e;++d) a.cancel(l[d]);d = l.length = 0;for(e = k.length;d < e;++d) {var s=rb(h[d].clone);k[d].$destroy();(l[d] = a.leave(s)).then(n(l,d));}h.length = 0;k.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++] = X.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f);});});});}};}],Ee=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function link(a,c,d,e,f){e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];e.cases["!" + d.ngSwitchWhen].push({transclude:f,element:c});}}),Fe=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function link(a,c,d,e,f){e.cases["?"] = e.cases["?"] || [];e.cases["?"].push({transclude:f,element:c});}}),He=Na({restrict:"EAC",link:function link(a,c,d,e,f){if(!f)throw I("ngTransclude")("orphan",xa(c));f(function(a){c.empty();c.append(a);});}}),he=["$templateCache",function(a){return {restrict:"E",terminal:!0,compile:function compile(c,d){"text/ng-template" == d.type && a.put(d.id,c[0].text);}};}],zg={$setViewValue:y,$render:y},Ag=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ua();e.ngModelCtrl = zg;e.unknownOption = C(X.createElement("option"));e.renderUnknownOption = function(c){c = "? " + Ga(c) + " ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c);};c.$on("$destroy",function(){e.renderUnknownOption = y;});e.removeUnknownOption = function(){e.unknownOption.parent() && e.unknownOption.remove();};e.readValue = function(){e.removeUnknownOption();return a.val();};e.writeValue = function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),"" === c && e.emptyOption.prop("selected",!0)):null == c && e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c);};e.addOption = function(a,c){Ta(a,'"option value"');"" === a && (e.emptyOption = c);var d=f.get(a) || 0;f.put(a,d + 1);};e.removeOption = function(a){var c=f.get(a);c && (1 === c?(f.remove(a),"" === a && (e.emptyOption = w)):f.put(a,c - 1));};e.hasOption = function(a){return !!f.get(a);};}],ie=function ie(){return {restrict:"E",require:["select","?ngModel"],controller:Ag,link:function link(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl = f;f.$render = function(){g.writeValue(f.$viewValue);};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue());});});if(d.multiple){g.readValue = function(){var a=[];m(c.find("option"),function(c){c.selected && a.push(c.value);});return a;};g.writeValue = function(a){var d=new Ua(a);m(c.find("option"),function(a){a.selected = A(d.get(a.value));});};var h,l=NaN;a.$watch(function(){l !== f.$viewValue || ka(h,f.$viewValue) || (h = ja(f.$viewValue),f.$render());l = f.$viewValue;});f.$isEmpty = function(a){return !a || 0 === a.length;};}}}};},ke=["$interpolate",function(a){return {restrict:"E",priority:100,compile:function compile(c,d){if(A(d.value))var e=a(d.value,!0);else {var f=a(c.text(),!0);f || d.$set("value",c.text());}return function(a,c,d){function k(a){p.addOption(a,c);p.ngModelCtrl.$render();c[0].hasAttribute("selected") && (c[0].selected = !0);}var m=c.parent(),p=m.data("$selectController") || m.parent().data("$selectController");if(p && p.ngModelCtrl){if(e){var r;d.$observe("value",function(a){A(r) && p.removeOption(r);r = a;k(a);});}else f?a.$watch(f,function(a,c){d.$set("value",a);c !== a && p.removeOption(c);k(a);}):k(d.value);c.on("$destroy",function(){p.removeOption(d.value);p.ngModelCtrl.$render();});}};}};}],je=qa({restrict:"E",terminal:!1}),Fc=function Fc(){return {restrict:"A",require:"?ngModel",link:function link(a,c,d,e){e && (d.required = !0,e.$validators.required = function(a,c){return !d.required || !e.$isEmpty(c);},d.$observe("required",function(){e.$validate();}));}};},Ec=function Ec(){return {restrict:"A",require:"?ngModel",link:function link(a,c,d,e){if(e){var f,g=d.ngPattern || d.pattern;d.$observe("pattern",function(a){G(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if(a && !a.test)throw I("ngPattern")("noregexp",g,a,xa(c));f = a || w;e.$validate();});e.$validators.pattern = function(a,c){return e.$isEmpty(c) || v(f) || f.test(c);};}}};},Hc=function Hc(){return {restrict:"A",require:"?ngModel",link:function link(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a = Y(a);f = isNaN(a)?-1:a;e.$validate();});e.$validators.maxlength = function(a,c){return 0 > f || e.$isEmpty(c) || c.length <= f;};}}};},Gc=function Gc(){return {restrict:"A",require:"?ngModel",link:function link(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f = Y(a) || 0;e.$validate();});e.$validators.minlength = function(a,c){return e.$isEmpty(c) || c.length >= f;};}}};};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ae(),ce(aa),aa.module("ngLocale",[],["$provide",function(a){function c(a){a += "";var c=a.indexOf(".");return -1 == c?0:a.length - c - 1;}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",pluralCat:function pluralCat(a,e){var f=a | 0,g=e;w === g && (g = Math.min(c(a),3));Math.pow(10,g);return 1 == f && 0 == g?"one":"other";}});}]),C(X).ready(function(){Xd(X,yc);}));})(window,document);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'); //# sourceMappingURL=angular.min.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.2.15
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */ /* commonjs package manager support (eg componentjs) */"use strict";if(typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){module.exports = 'ui.router';}(function(window,angular,undefined){ /*jshint globalstrict:true*/ /*global angular:false*/'use strict';var isDefined=angular.isDefined,isFunction=angular.isFunction,isString=angular.isString,isObject=angular.isObject,isArray=angular.isArray,forEach=angular.forEach,extend=angular.extend,copy=angular.copy;function inherit(parent,extra){return extend(new (extend(function(){},{prototype:parent}))(),extra);}function merge(dst){forEach(arguments,function(obj){if(obj !== dst){forEach(obj,function(value,key){if(!dst.hasOwnProperty(key))dst[key] = value;});}});return dst;} /**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */function ancestors(first,second){var path=[];for(var n in first.path) {if(first.path[n] !== second.path[n])break;path.push(first.path[n]);}return path;} /**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */function objectKeys(object){if(Object.keys){return Object.keys(object);}var result=[];forEach(object,function(val,key){result.push(key);});return result;} /**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */function indexOf(array,value){if(Array.prototype.indexOf){return array.indexOf(value,Number(arguments[2]) || 0);}var len=array.length >>> 0,from=Number(arguments[2]) || 0;from = from < 0?Math.ceil(from):Math.floor(from);if(from < 0)from += len;for(;from < len;from++) {if(from in array && array[from] === value)return from;}return -1;} /**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */function inheritParams(currentParams,newParams,$current,$to){var parents=ancestors($current,$to),parentParams,inherited={},inheritList=[];for(var i in parents) {if(!parents[i].params)continue;parentParams = objectKeys(parents[i].params);if(!parentParams.length)continue;for(var j in parentParams) {if(indexOf(inheritList,parentParams[j]) >= 0)continue;inheritList.push(parentParams[j]);inherited[parentParams[j]] = currentParams[parentParams[j]];}}return extend({},inherited,newParams);} /**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */function equalForKeys(a,b,keys){if(!keys){keys = [];for(var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	}for(var i=0;i < keys.length;i++) {var k=keys[i];if(a[k] != b[k])return false; // Not '===', values aren't necessarily normalized
	}return true;} /**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */function filterByKeys(keys,values){var filtered={};forEach(keys,function(name){filtered[name] = values[name];});return filtered;} // like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array,propName){var result={};forEach(array,function(item){result[item[propName]] = item;});return result;} // extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj){var copy={};var keys=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));forEach(keys,function(key){if(key in obj)copy[key] = obj[key];});return copy;} // extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj){var copy={};var keys=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var key in obj) {if(indexOf(keys,key) == -1)copy[key] = obj[key];}return copy;}function pluck(collection,key){var result=isArray(collection)?[]:{};forEach(collection,function(val,i){result[i] = isFunction(key)?key(val):val[key];});return result;}function filter(collection,callback){var array=isArray(collection);var result=array?[]:{};forEach(collection,function(val,i){if(callback(val,i)){result[array?result.length:i] = val;}});return result;}function map(collection,callback){var result=isArray(collection)?[]:{};forEach(collection,function(val,i){result[i] = callback(val,i);});return result;} /**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */angular.module('ui.router.util',['ng']); /**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */angular.module('ui.router.router',['ui.router.util']); /**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */angular.module('ui.router.state',['ui.router.router','ui.router.util']); /**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */angular.module('ui.router',['ui.router.state']);angular.module('ui.router.compat',['ui.router']); /**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */$Resolve.$inject = ['$q','$injector'];function $Resolve($q,$injector){var VISIT_IN_PROGRESS=1,VISIT_DONE=2,NOTHING={},NO_DEPENDENCIES=[],NO_LOCALS=NOTHING,NO_PARENT=extend($q.when(NOTHING),{$$promises:NOTHING,$$values:NOTHING}); /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */this.study = function(invocables){if(!isObject(invocables))throw new Error("'invocables' must be an object");var invocableKeys=objectKeys(invocables || {}); // Perform a topological sort of invocables to build an ordered plan
	var plan=[],cycle=[],visited={};function visit(value,key){if(visited[key] === VISIT_DONE)return;cycle.push(key);if(visited[key] === VISIT_IN_PROGRESS){cycle.splice(0,indexOf(cycle,key));throw new Error("Cyclic dependency: " + cycle.join(" -> "));}visited[key] = VISIT_IN_PROGRESS;if(isString(value)){plan.push(key,[function(){return $injector.get(value);}],NO_DEPENDENCIES);}else {var params=$injector.annotate(value);forEach(params,function(param){if(param !== key && invocables.hasOwnProperty(param))visit(invocables[param],param);});plan.push(key,value,params);}cycle.pop();visited[key] = VISIT_DONE;}forEach(invocables,visit);invocables = cycle = visited = null; // plan is all that's required
	function isResolve(value){return isObject(value) && value.then && value.$$promises;}return function(locals,parent,self){if(isResolve(locals) && self === undefined){self = parent;parent = locals;locals = null;}if(!locals)locals = NO_LOCALS;else if(!isObject(locals)){throw new Error("'locals' must be an object");}if(!parent)parent = NO_PARENT;else if(!isResolve(parent)){throw new Error("'parent' must be a promise returned by $resolve.resolve()");} // To complete the overall resolution, we have to wait for the parent
	// promise and for the promise for each invokable in our plan.
	var resolution=$q.defer(),result=resolution.promise,promises=result.$$promises = {},values=extend({},locals),wait=1 + plan.length / 3,merged=false;function done(){ // Merge parent values we haven't got yet and publish our own $$values
	if(! --wait){if(!merged)merge(values,parent.$$values);result.$$values = values;result.$$promises = result.$$promises || true; // keep for isResolve()
	delete result.$$inheritedValues;resolution.resolve(values);}}function fail(reason){result.$$failure = reason;resolution.reject(reason);} // Short-circuit if parent has already failed
	if(isDefined(parent.$$failure)){fail(parent.$$failure);return result;}if(parent.$$inheritedValues){merge(values,omit(parent.$$inheritedValues,invocableKeys));} // Merge parent values if the parent has already resolved, or merge
	// parent promises and wait if the parent resolve is still in progress.
	extend(promises,parent.$$promises);if(parent.$$values){merged = merge(values,omit(parent.$$values,invocableKeys));result.$$inheritedValues = omit(parent.$$values,invocableKeys);done();}else {if(parent.$$inheritedValues){result.$$inheritedValues = omit(parent.$$inheritedValues,invocableKeys);}parent.then(done,fail);} // Process each invocable in the plan, but ignore any where a local of the same name exists.
	for(var i=0,ii=plan.length;i < ii;i += 3) {if(locals.hasOwnProperty(plan[i]))done();else invoke(plan[i],plan[i + 1],plan[i + 2]);}function invoke(key,invocable,params){ // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	var invocation=$q.defer(),waitParams=0;function onfailure(reason){invocation.reject(reason);fail(reason);} // Wait for any parameter that we have a promise for (either from parent or from this
	// resolve; in that case study() will have made sure it's ordered before us in the plan).
	forEach(params,function(dep){if(promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)){waitParams++;promises[dep].then(function(result){values[dep] = result;if(! --waitParams)proceed();},onfailure);}});if(!waitParams)proceed();function proceed(){if(isDefined(result.$$failure))return;try{invocation.resolve($injector.invoke(invocable,self,values));invocation.promise.then(function(result){values[key] = result;done();},onfailure);}catch(e) {onfailure(e);}} // Publish promise synchronously; invocations further down in the plan may depend on it.
	promises[key] = invocation.promise;}return result;};}; /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */this.resolve = function(invocables,locals,parent,self){return this.study(invocables)(locals,parent,self);};}angular.module('ui.router.util').service('$resolve',$Resolve); /**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */$TemplateFactory.$inject = ['$http','$templateCache','$injector'];function $TemplateFactory($http,$templateCache,$injector){ /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */this.fromConfig = function(config,params,locals){return isDefined(config.template)?this.fromString(config.template,params):isDefined(config.templateUrl)?this.fromUrl(config.templateUrl,params):isDefined(config.templateProvider)?this.fromProvider(config.templateProvider,params,locals):null;}; /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */this.fromString = function(template,params){return isFunction(template)?template(params):template;}; /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */this.fromUrl = function(url,params){if(isFunction(url))url = url(params);if(url == null)return null;else return $http.get(url,{cache:$templateCache,headers:{Accept:'text/html'}}).then(function(response){return response.data;});}; /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */this.fromProvider = function(provider,params,locals){return $injector.invoke(provider,null,locals || {params:params});};}angular.module('ui.router.util').service('$templateFactory',$TemplateFactory);var $$UMFP; // reference to $UrlMatcherFactoryProvider
	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */function UrlMatcher(pattern,config,parentMatcher){config = extend({params:{}},isObject(config)?config:{}); // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	//   '*' name
	//   ':' name
	//   '{' name '}'
	//   '{' name ':' regexp '}'
	// The regular expression is somewhat complicated due to the need to allow curly braces
	// inside the regular expression. The placeholder regexp breaks down as follows:
	//    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	//    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	//    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	//    [^{}\\]+                       - anything other than curly braces or backslash
	//    \\.                            - a backslash escape
	//    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	var placeholder=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,searchPlaceholder=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,compiled='^',last=0,m,segments=this.segments = [],parentParams=parentMatcher?parentMatcher.params:{},params=this.params = parentMatcher?parentMatcher.params.$$new():new $$UMFP.ParamSet(),paramNames=[];function addParameter(id,type,config,location){paramNames.push(id);if(parentParams[id])return parentParams[id];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(id))throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");if(params[id])throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");params[id] = new $$UMFP.Param(id,type,config,location);return params[id];}function quoteRegExp(string,pattern,squash,optional){var surroundPattern=['',''],result=string.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!pattern)return result;switch(squash){case false:surroundPattern = ['(',')' + (optional?"?":"")];break;case true:surroundPattern = ['?(',')?'];break;default:surroundPattern = ['(' + squash + "|",')?'];break;}return result + surroundPattern[0] + pattern + surroundPattern[1];}this.source = pattern; // Split into static segments separated by path parameter placeholders.
	// The number of segments is always 1 more than the number of parameters.
	function matchDetails(m,isSearch){var id,regexp,segment,type,cfg,arrayMode;id = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	cfg = config.params[id];segment = pattern.substring(last,m.index);regexp = isSearch?m[4]:m[4] || (m[1] == '*'?'.*':null);type = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"),{pattern:new RegExp(regexp,config.caseInsensitive?'i':undefined)});return {id:id,regexp:regexp,segment:segment,type:type,cfg:cfg};}var p,param,segment;while(m = placeholder.exec(pattern)) {p = matchDetails(m,false);if(p.segment.indexOf('?') >= 0)break; // we're into the search part
	param = addParameter(p.id,p.type,p.cfg,"path");compiled += quoteRegExp(p.segment,param.type.pattern.source,param.squash,param.isOptional);segments.push(p.segment);last = placeholder.lastIndex;}segment = pattern.substring(last); // Find any search parameter names and remove them from the last segment
	var i=segment.indexOf('?');if(i >= 0){var search=this.sourceSearch = segment.substring(i);segment = segment.substring(0,i);this.sourcePath = pattern.substring(0,last + i);if(search.length > 0){last = 0;while(m = searchPlaceholder.exec(search)) {p = matchDetails(m,true);param = addParameter(p.id,p.type,p.cfg,"search");last = placeholder.lastIndex; // check if ?&
	}}}else {this.sourcePath = pattern;this.sourceSearch = '';}compiled += quoteRegExp(segment) + (config.strict === false?'\/?':'') + '$';segments.push(segment);this.regexp = new RegExp(compiled,config.caseInsensitive?'i':undefined);this.prefix = segments[0];this.$$paramNames = paramNames;} /**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */UrlMatcher.prototype.concat = function(pattern,config){ // Because order of search parameters is irrelevant, we can add our own search
	// parameters to the end of the new pattern. Parse the new pattern by itself
	// and then join the bits together, but it's much easier to do this on a string level.
	var defaultConfig={caseInsensitive:$$UMFP.caseInsensitive(),strict:$$UMFP.strictMode(),squash:$$UMFP.defaultSquashPolicy()};return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch,extend(defaultConfig,config),this);};UrlMatcher.prototype.toString = function(){return this.source;}; /**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */UrlMatcher.prototype.exec = function(path,searchParams){var m=this.regexp.exec(path);if(!m)return null;searchParams = searchParams || {};var paramNames=this.parameters(),nTotal=paramNames.length,nPath=this.segments.length - 1,values={},i,j,cfg,paramName;if(nPath !== m.length - 1)throw new Error("Unbalanced capture group in route '" + this.source + "'");function decodePathArray(string){function reverseString(str){return str.split("").reverse().join("");}function unquoteDashes(str){return str.replace(/\\-/g,"-");}var split=reverseString(string).split(/-(?!\\)/);var allReversed=map(split,reverseString);return map(allReversed,unquoteDashes).reverse();}for(i = 0;i < nPath;i++) {paramName = paramNames[i];var param=this.params[paramName];var paramVal=m[i + 1]; // if the param value matches a pre-replace pair, replace the value before decoding.
	for(j = 0;j < param.replace;j++) {if(param.replace[j].from === paramVal)paramVal = param.replace[j].to;}if(paramVal && param.array === true)paramVal = decodePathArray(paramVal);values[paramName] = param.value(paramVal);}for(; /**/i < nTotal;i++) {paramName = paramNames[i];values[paramName] = this.params[paramName].value(searchParams[paramName]);}return values;}; /**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 *
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */UrlMatcher.prototype.parameters = function(param){if(!isDefined(param))return this.$$paramNames;return this.params[param] || null;}; /**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validate
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */UrlMatcher.prototype.validates = function(params){return this.params.$$validates(params);}; /**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */UrlMatcher.prototype.format = function(values){values = values || {};var segments=this.segments,params=this.parameters(),paramset=this.params;if(!this.validates(values))return null;var i,search=false,nPath=segments.length - 1,nTotal=params.length,result=segments[0];function encodeDashes(str){ // Replace dashes with encoded "\-"
	return encodeURIComponent(str).replace(/-/g,function(c){return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase();});}for(i = 0;i < nTotal;i++) {var isPathParam=i < nPath;var name=params[i],param=paramset[name],value=param.value(values[name]);var isDefaultValue=param.isOptional && param.type.equals(param.value(),value);var squash=isDefaultValue?param.squash:false;var encoded=param.type.encode(value);if(isPathParam){var nextSegment=segments[i + 1];if(squash === false){if(encoded != null){if(isArray(encoded)){result += map(encoded,encodeDashes).join("-");}else {result += encodeURIComponent(encoded);}}result += nextSegment;}else if(squash === true){var capture=result.match(/\/$/)?/\/?(.*)/:/(.*)/;result += nextSegment.match(capture)[1];}else if(isString(squash)){result += squash + nextSegment;}}else {if(encoded == null || isDefaultValue && squash !== false)continue;if(!isArray(encoded))encoded = [encoded];encoded = map(encoded,encodeURIComponent).join('&' + name + '=');result += (search?'&':'?') + (name + '=' + encoded);search = true;}}return result;}; /**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */function Type(config){extend(this,config);} /**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */Type.prototype.is = function(val,key){return true;}; /**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */Type.prototype.encode = function(val,key){return val;}; /**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */Type.prototype.decode = function(val,key){return val;}; /**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */Type.prototype.equals = function(a,b){return a == b;};Type.prototype.$subPattern = function(){var sub=this.pattern.toString();return sub.substr(1,sub.length - 2);};Type.prototype.pattern = /.*/;Type.prototype.toString = function(){return "{Type:" + this.name + "}";}; /** Given an encoded string, or a decoded object, returns a decoded object */Type.prototype.$normalize = function(val){return this.is(val)?val:this.decode(val);}; /*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */Type.prototype.$asArray = function(mode,isSearch){if(!mode)return this;if(mode === "auto" && !isSearch)throw new Error("'auto' array mode is for query parameters only");function ArrayType(type,mode){function bindTo(type,callbackName){return function(){return type[callbackName].apply(type,arguments);};} // Wrap non-array value as array
	function arrayWrap(val){return isArray(val)?val:isDefined(val)?[val]:[];} // Unwrap array value for "auto" mode. Return undefined for empty array.
	function arrayUnwrap(val){switch(val.length){case 0:return undefined;case 1:return mode === "auto"?val[0]:val;default:return val;}}function falsey(val){return !val;} // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	function arrayHandler(callback,allTruthyMode){return function handleArray(val){val = arrayWrap(val);var result=map(val,callback);if(allTruthyMode === true)return filter(result,falsey).length === 0;return arrayUnwrap(result);};} // Wraps type (.equals) functions to operate on each value of an array
	function arrayEqualsHandler(callback){return function handleArray(val1,val2){var left=arrayWrap(val1),right=arrayWrap(val2);if(left.length !== right.length)return false;for(var i=0;i < left.length;i++) {if(!callback(left[i],right[i]))return false;}return true;};}this.encode = arrayHandler(bindTo(type,'encode'));this.decode = arrayHandler(bindTo(type,'decode'));this.is = arrayHandler(bindTo(type,'is'),true);this.equals = arrayEqualsHandler(bindTo(type,'equals'));this.pattern = type.pattern;this.$normalize = arrayHandler(bindTo(type,'$normalize'));this.name = type.name;this.$arrayMode = mode;}return new ArrayType(this,mode);}; /**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */function $UrlMatcherFactory(){$$UMFP = this;var isCaseInsensitive=false,isStrictMode=true,defaultSquashPolicy=false;function valToString(val){return val != null?val.toString().replace(/\//g,"%2F"):val;}function valFromString(val){return val != null?val.toString().replace(/%2F/g,"/"):val;}var $types={},enqueue=true,typeQueue=[],injector,defaultTypes={string:{encode:valToString,decode:valFromString, // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
	// In 0.2.x, string params are optional by default for backwards compat
	is:function is(val){return val == null || !isDefined(val) || typeof val === "string";},pattern:/[^/]*/},int:{encode:valToString,decode:function decode(val){return parseInt(val,10);},is:function is(val){return isDefined(val) && this.decode(val.toString()) === val;},pattern:/\d+/},bool:{encode:function encode(val){return val?1:0;},decode:function decode(val){return parseInt(val,10) !== 0;},is:function is(val){return val === true || val === false;},pattern:/0|1/},date:{encode:function encode(val){if(!this.is(val))return undefined;return [val.getFullYear(),('0' + (val.getMonth() + 1)).slice(-2),('0' + val.getDate()).slice(-2)].join("-");},decode:function decode(val){if(this.is(val))return val;var match=this.capture.exec(val);return match?new Date(match[1],match[2] - 1,match[3]):undefined;},is:function is(val){return val instanceof Date && !isNaN(val.valueOf());},equals:function equals(a,b){return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:angular.toJson,decode:angular.fromJson,is:angular.isObject,equals:angular.equals,pattern:/[^/]*/},any:{ // does not encode/decode
	encode:angular.identity,decode:angular.identity,equals:angular.equals,pattern:/.*/}};function getDefaultConfig(){return {strict:isStrictMode,caseInsensitive:isCaseInsensitive};}function isInjectable(value){return isFunction(value) || isArray(value) && isFunction(value[value.length - 1]);} /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */$UrlMatcherFactory.$$getDefaultValue = function(config){if(!isInjectable(config.value))return config.value;if(!injector)throw new Error("Injectable functions cannot be called at configuration time");return injector.invoke(config.value);}; /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */this.caseInsensitive = function(value){if(isDefined(value))isCaseInsensitive = value;return isCaseInsensitive;}; /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */this.strictMode = function(value){if(isDefined(value))isStrictMode = value;return isStrictMode;}; /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */this.defaultSquashPolicy = function(value){if(!isDefined(value))return defaultSquashPolicy;if(value !== true && value !== false && !isString(value))throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");defaultSquashPolicy = value;return value;}; /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */this.compile = function(pattern,config){return new UrlMatcher(pattern,extend(getDefaultConfig(),config));}; /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */this.isMatcher = function(o){if(!isObject(o))return false;var result=true;forEach(UrlMatcher.prototype,function(val,name){if(isFunction(val)){result = result && (isDefined(o[name]) && isFunction(o[name]));}});return result;}; /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */this.type = function(name,definition,definitionFn){if(!isDefined(definition))return $types[name];if($types.hasOwnProperty(name))throw new Error("A type named '" + name + "' has already been defined.");$types[name] = new Type(extend({name:name},definition));if(definitionFn){typeQueue.push({name:name,def:definitionFn});if(!enqueue)flushTypeQueue();}return this;}; // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	function flushTypeQueue(){while(typeQueue.length) {var type=typeQueue.shift();if(type.pattern)throw new Error("You cannot override a type's .pattern at runtime.");angular.extend($types[type.name],injector.invoke(type.def));}} // Register default types. Store them in the prototype of $types.
	forEach(defaultTypes,function(type,name){$types[name] = new Type(extend({name:name},type));});$types = inherit($types,{}); /* No need to document $get, since it returns this */this.$get = ['$injector',function($injector){injector = $injector;enqueue = false;flushTypeQueue();forEach(defaultTypes,function(type,name){if(!$types[name])$types[name] = new Type(type);});return this;}];this.Param = function Param(id,type,config,location){var self=this;config = unwrapShorthand(config);type = getType(config,type,location);var arrayMode=getArrayMode();type = arrayMode?type.$asArray(arrayMode,location === "search"):type;if(type.name === "string" && !arrayMode && location === "path" && config.value === undefined)config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	var isOptional=config.value !== undefined;var squash=getSquashPolicy(config,isOptional);var replace=getReplace(config,arrayMode,isOptional,squash);function unwrapShorthand(config){var keys=isObject(config)?objectKeys(config):[];var isShorthand=indexOf(keys,"value") === -1 && indexOf(keys,"type") === -1 && indexOf(keys,"squash") === -1 && indexOf(keys,"array") === -1;if(isShorthand)config = {value:config};config.$$fn = isInjectable(config.value)?config.value:function(){return config.value;};return config;}function getType(config,urlType,location){if(config.type && urlType)throw new Error("Param '" + id + "' has two type configurations.");if(urlType)return urlType;if(!config.type)return location === "config"?$types.any:$types.string;return config.type instanceof Type?config.type:new Type(config.type);} // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	function getArrayMode(){var arrayDefaults={array:location === "search"?"auto":false};var arrayParamNomenclature=id.match(/\[\]$/)?{array:true}:{};return extend(arrayDefaults,arrayParamNomenclature,config).array;} /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */function getSquashPolicy(config,isOptional){var squash=config.squash;if(!isOptional || squash === false)return false;if(!isDefined(squash) || squash == null)return defaultSquashPolicy;if(squash === true || isString(squash))return squash;throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");}function getReplace(config,arrayMode,isOptional,squash){var replace,configuredKeys,defaultPolicy=[{from:"",to:isOptional || arrayMode?undefined:""},{from:null,to:isOptional || arrayMode?undefined:""}];replace = isArray(config.replace)?config.replace:[];if(isString(squash))replace.push({from:squash,to:undefined});configuredKeys = map(replace,function(item){return item.from;});return filter(defaultPolicy,function(item){return indexOf(configuredKeys,item.from) === -1;}).concat(replace);} /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */function $$getDefaultValue(){if(!injector)throw new Error("Injectable functions cannot be called at configuration time");var defaultValue=injector.invoke(config.$$fn);if(defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");return defaultValue;} /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */function $value(value){function hasReplaceVal(val){return function(obj){return obj.from === val;};}function $replace(value){var replacement=map(filter(self.replace,hasReplaceVal(value)),function(obj){return obj.to;});return replacement.length?replacement[0]:value;}value = $replace(value);return !isDefined(value)?$$getDefaultValue():self.type.$normalize(value);}function toString(){return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}";}extend(this,{id:id,type:type,location:location,array:arrayMode,squash:squash,replace:replace,isOptional:isOptional,value:$value,dynamic:undefined,config:config,toString:toString});};function ParamSet(params){extend(this,params || {});}ParamSet.prototype = {$$new:function $$new(){return inherit(this,extend(new ParamSet(),{$$parent:this}));},$$keys:function $$keys(){var keys=[],chain=[],parent=this,ignore=objectKeys(ParamSet.prototype);while(parent) {chain.push(parent);parent = parent.$$parent;}chain.reverse();forEach(chain,function(paramset){forEach(objectKeys(paramset),function(key){if(indexOf(keys,key) === -1 && indexOf(ignore,key) === -1)keys.push(key);});});return keys;},$$values:function $$values(paramValues){var values={},self=this;forEach(self.$$keys(),function(key){values[key] = self[key].value(paramValues && paramValues[key]);});return values;},$$equals:function $$equals(paramValues1,paramValues2){var equal=true,self=this;forEach(self.$$keys(),function(key){var left=paramValues1 && paramValues1[key],right=paramValues2 && paramValues2[key];if(!self[key].type.equals(left,right))equal = false;});return equal;},$$validates:function $$validate(paramValues){var keys=this.$$keys(),i,param,rawVal,normalized,encoded;for(i = 0;i < keys.length;i++) {param = this[keys[i]];rawVal = paramValues[keys[i]];if((rawVal === undefined || rawVal === null) && param.isOptional)break; // There was no parameter value, but the param is optional
	normalized = param.type.$normalize(rawVal);if(!param.type.is(normalized))return false; // The value was not of the correct Type, and could not be decoded to the correct Type
	encoded = param.type.encode(normalized);if(angular.isString(encoded) && !param.type.pattern.exec(encoded))return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
	}return true;},$$parent:undefined};this.ParamSet = ParamSet;} // Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory',$UrlMatcherFactory);angular.module('ui.router.util').run(['$urlMatcherFactory',function($urlMatcherFactory){}]); /**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */$UrlRouterProvider.$inject = ['$locationProvider','$urlMatcherFactoryProvider'];function $UrlRouterProvider($locationProvider,$urlMatcherFactory){var rules=[],otherwise=null,interceptDeferred=false,listener; // Returns a string that is a prefix of all strings matching the RegExp
	function regExpPrefix(re){var prefix=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);return prefix != null?prefix[1].replace(/\\(.)/g,"$1"):'';} // Interpolates matched values into a String.replace()-style pattern
	function interpolate(pattern,match){return pattern.replace(/\$(\$|\d{1,2})/,function(m,what){return match[what === '$'?0:Number(what)];});} /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {object} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */this.rule = function(rule){if(!isFunction(rule))throw new Error("'rule' must be a function");rules.push(rule);return this;}; /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */this.otherwise = function(rule){if(isString(rule)){var redirect=rule;rule = function(){return redirect;};}else if(!isFunction(rule))throw new Error("'rule' must be a function");otherwise = rule;return this;};function handleIfMatch($injector,handler,match){if(!match)return false;var result=$injector.invoke(handler,handler,{$match:match});return isDefined(result)?result:true;} /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. if handle is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|object} handler The path you want to redirect your user to.
	   */this.when = function(what,handler){var redirect,handlerIsString=isString(handler);if(isString(what))what = $urlMatcherFactory.compile(what);if(!handlerIsString && !isFunction(handler) && !isArray(handler))throw new Error("invalid 'handler' in when()");var strategies={matcher:function matcher(what,handler){if(handlerIsString){redirect = $urlMatcherFactory.compile(handler);handler = ['$match',function($match){return redirect.format($match);}];}return extend(function($injector,$location){return handleIfMatch($injector,handler,what.exec($location.path(),$location.search()));},{prefix:isString(what.prefix)?what.prefix:''});},regex:function regex(what,handler){if(what.global || what.sticky)throw new Error("when() RegExp must not be global or sticky");if(handlerIsString){redirect = handler;handler = ['$match',function($match){return interpolate(redirect,$match);}];}return extend(function($injector,$location){return handleIfMatch($injector,handler,what.exec($location.path()));},{prefix:regExpPrefix(what)});}};var check={matcher:$urlMatcherFactory.isMatcher(what),regex:what instanceof RegExp};for(var n in check) {if(check[n])return this.rule(strategies[n](what,handler));}throw new Error("invalid 'what' in when()");}; /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */this.deferIntercept = function(defer){if(defer === undefined)defer = true;interceptDeferred = defer;}; /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */this.$get = $get;$get.$inject = ['$location','$rootScope','$injector','$browser'];function $get($location,$rootScope,$injector,$browser){var baseHref=$browser.baseHref(),location=$location.url(),lastPushedUrl;function appendBasePath(url,isHtml5,absolute){if(baseHref === '/')return url;if(isHtml5)return baseHref.slice(0,-1) + url;if(absolute)return baseHref.slice(1) + url;return url;} // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	function update(evt){if(evt && evt.defaultPrevented)return;var ignoreUpdate=lastPushedUrl && $location.url() === lastPushedUrl;lastPushedUrl = undefined; // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
	//if (ignoreUpdate) return true;
	function check(rule){var handled=rule($injector,$location);if(!handled)return false;if(isString(handled))$location.replace().url(handled);return true;}var n=rules.length,i;for(i = 0;i < n;i++) {if(check(rules[i]))return;} // always check otherwise last to allow dynamic updates to the set of rules
	if(otherwise)check(otherwise);}function _listen(){listener = listener || $rootScope.$on('$locationChangeSuccess',update);return listener;}if(!interceptDeferred)_listen();return { /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */sync:function sync(){update();},listen:function listen(){return _listen();},update:function update(read){if(read){location = $location.url();return;}if($location.url() === location)return;$location.url(location);$location.replace();},push:function push(urlMatcher,params,options){var url=urlMatcher.format(params || {}); // Handle the special hash param, if needed
	if(url !== null && params && params['#']){url += '#' + params['#'];}$location.url(url);lastPushedUrl = options && options.$$avoidResync?$location.url():undefined;if(options && options.replace)$location.replace();}, /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */href:function href(urlMatcher,params,options){if(!urlMatcher.validates(params))return null;var isHtml5=$locationProvider.html5Mode();if(angular.isObject(isHtml5)){isHtml5 = isHtml5.enabled;}var url=urlMatcher.format(params);options = options || {};if(!isHtml5 && url !== null){url = "#" + $locationProvider.hashPrefix() + url;} // Handle special hash param, if needed
	if(url !== null && params && params['#']){url += '#' + params['#'];}url = appendBasePath(url,isHtml5,options.absolute);if(!options.absolute || !url){return url;}var slash=!isHtml5 && url?'/':'',port=$location.port();port = port === 80 || port === 443?'':':' + port;return [$location.protocol(),'://',$location.host(),port,slash,url].join('');}};}}angular.module('ui.router.router').provider('$urlRouter',$UrlRouterProvider); /**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */$StateProvider.$inject = ['$urlRouterProvider','$urlMatcherFactoryProvider'];function $StateProvider($urlRouterProvider,$urlMatcherFactory){var root,states={},$state,queue={},abstractKey='abstract'; // Builds state properties from definition passed to registerState()
	var stateBuilder={ // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	// state.children = [];
	// if (parent) parent.children.push(state);
	parent:function parent(state){if(isDefined(state.parent) && state.parent)return findState(state.parent); // regex matches any valid composite state name
	// would match "contact.list" but not "contacts"
	var compositeName=/^(.+)\.[^.]+$/.exec(state.name);return compositeName?findState(compositeName[1]):root;}, // inherit 'data' from parent and override by own values (if any)
	data:function data(state){if(state.parent && state.parent.data){state.data = state.self.data = extend({},state.parent.data,state.data);}return state.data;}, // Build a URLMatcher if necessary, either via a relative or absolute URL
	url:function url(state){var url=state.url,config={params:state.params || {}};if(isString(url)){if(url.charAt(0) == '^')return $urlMatcherFactory.compile(url.substring(1),config);return (state.parent.navigable || root).url.concat(url,config);}if(!url || $urlMatcherFactory.isMatcher(url))return url;throw new Error("Invalid url '" + url + "' in state '" + state + "'");}, // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	navigable:function navigable(state){return state.url?state:state.parent?state.parent.navigable:null;}, // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	ownParams:function ownParams(state){var params=state.url && state.url.params || new $$UMFP.ParamSet();forEach(state.params || {},function(config,id){if(!params[id])params[id] = new $$UMFP.Param(id,null,config,"config");});return params;}, // Derive parameters for this state and ensure they're a super-set of parent's parameters
	params:function params(state){return state.parent && state.parent.params?extend(state.parent.params.$$new(),state.ownParams):new $$UMFP.ParamSet();}, // If there is no explicit multi-view configuration, make one up so we don't have
	// to handle both cases in the view directive later. Note that having an explicit
	// 'views' property will mean the default unnamed view properties are ignored. This
	// is also a good time to resolve view names to absolute names, so everything is a
	// straight lookup at link time.
	views:function views(state){var views={};forEach(isDefined(state.views)?state.views:{'':state},function(view,name){if(name.indexOf('@') < 0)name += '@' + state.parent.name;views[name] = view;});return views;}, // Keep a full path from the root down to this state as this is needed for state activation.
	path:function path(state){return state.parent?state.parent.path.concat(state):[]; // exclude root from path
	}, // Speed up $state.contains() as it's used a lot
	includes:function includes(state){var includes=state.parent?extend({},state.parent.includes):{};includes[state.name] = true;return includes;},$delegates:{}};function isRelative(stateName){return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;}function findState(stateOrName,base){if(!stateOrName)return undefined;var isStr=isString(stateOrName),name=isStr?stateOrName:stateOrName.name,path=isRelative(name);if(path){if(!base)throw new Error("No reference point given for path '" + name + "'");base = findState(base);var rel=name.split("."),i=0,pathLength=rel.length,current=base;for(;i < pathLength;i++) {if(rel[i] === "" && i === 0){current = base;continue;}if(rel[i] === "^"){if(!current.parent)throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");current = current.parent;continue;}break;}rel = rel.slice(i).join(".");name = current.name + (current.name && rel?".":"") + rel;}var state=states[name];if(state && (isStr || !isStr && (state === stateOrName || state.self === stateOrName))){return state;}return undefined;}function queueState(parentName,state){if(!queue[parentName]){queue[parentName] = [];}queue[parentName].push(state);}function flushQueuedChildren(parentName){var queued=queue[parentName] || [];while(queued.length) {registerState(queued.shift());}}function registerState(state){ // Wrap a new object around the state so we can store our private details easily.
	state = inherit(state,{self:state,resolve:state.resolve || {},toString:function toString(){return this.name;}});var name=state.name;if(!isString(name) || name.indexOf('@') >= 0)throw new Error("State must have a valid name");if(states.hasOwnProperty(name))throw new Error("State '" + name + "'' is already defined"); // Get parent name
	var parentName=name.indexOf('.') !== -1?name.substring(0,name.lastIndexOf('.')):isString(state.parent)?state.parent:isObject(state.parent) && isString(state.parent.name)?state.parent.name:''; // If parent is not registered yet, add state to queue and register later
	if(parentName && !states[parentName]){return queueState(parentName,state.self);}for(var key in stateBuilder) {if(isFunction(stateBuilder[key]))state[key] = stateBuilder[key](state,stateBuilder.$delegates[key]);}states[name] = state; // Register the state in the global state list and with $urlRouter if necessary.
	if(!state[abstractKey] && state.url){$urlRouterProvider.when(state.url,['$match','$stateParams',function($match,$stateParams){if($state.$current.navigable != state || !equalForKeys($match,$stateParams)){$state.transitionTo(state,$match,{inherit:true,location:false});}}]);} // Register any queued children
	flushQueuedChildren(name);return state;} // Checks text to see if it looks like a glob.
	function isGlob(text){return text.indexOf('*') > -1;} // Returns true if glob matches current $state name.
	function doesStateMatchGlob(glob){var globSegments=glob.split('.'),segments=$state.$current.name.split('.'); //match single stars
	for(var i=0,l=globSegments.length;i < l;i++) {if(globSegments[i] === '*'){segments[i] = '*';}} //match greedy starts
	if(globSegments[0] === '**'){segments = segments.slice(indexOf(segments,globSegments[1]));segments.unshift('**');} //match greedy ends
	if(globSegments[globSegments.length - 1] === '**'){segments.splice(indexOf(segments,globSegments[globSegments.length - 2]) + 1,Number.MAX_VALUE);segments.push('**');}if(globSegments.length != segments.length){return false;}return segments.join('') === globSegments.join('');} // Implicit root state that is always active
	root = registerState({name:'',url:'^',views:null,'abstract':true});root.navigable = null; /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */this.decorator = decorator;function decorator(name,func){ /*jshint validthis: true */if(isString(name) && !isDefined(func)){return stateBuilder[name];}if(!isFunction(func) || !isString(name)){return this;}if(stateBuilder[name] && !stateBuilder.$delegates[name]){stateBuilder.$delegates[name] = stateBuilder[name];}stateBuilder[name] = func;return this;} /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {string|object=} stateConfig.parent
	   * <a id='parent'></a>
	   * Optionally specifies the parent state of this state.
	   *
	   * <pre>parent: 'parentState'</pre>
	   * <pre>parent: parentState // JS variable</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
	   *   more details on acceptable patterns )
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   * </pre>
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */this.state = state;function state(name,definition){ /*jshint validthis: true */if(isObject(name))definition = name;else definition.name = name;registerState(definition);return this;} /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */this.$get = $get;$get.$inject = ['$rootScope','$q','$view','$injector','$resolve','$stateParams','$urlRouter','$location','$urlMatcherFactory'];function $get($rootScope,$q,$view,$injector,$resolve,$stateParams,$urlRouter,$location,$urlMatcherFactory){var TransitionSuperseded=$q.reject(new Error('transition superseded'));var TransitionPrevented=$q.reject(new Error('transition prevented'));var TransitionAborted=$q.reject(new Error('transition aborted'));var TransitionFailed=$q.reject(new Error('transition failed')); // Handles the case where a state which is the target of a transition is not found, and the user
	// can optionally retry or defer the transition
	function handleRedirect(redirect,state,params,options){ /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */var evt=$rootScope.$broadcast('$stateNotFound',redirect,state,params);if(evt.defaultPrevented){$urlRouter.update();return TransitionAborted;}if(!evt.retry){return null;} // Allow the handler to return a promise to defer state lookup retry
	if(options.$retry){$urlRouter.update();return TransitionFailed;}var retryTransition=$state.transition = $q.when(evt.retry);retryTransition.then(function(){if(retryTransition !== $state.transition)return TransitionSuperseded;redirect.options.$retry = true;return $state.transitionTo(redirect.to,redirect.toParams,redirect.options);},function(){return TransitionAborted;});$urlRouter.update();return retryTransition;}root.locals = {resolve:null,globals:{$stateParams:{}}};$state = {params:{},current:root.self,$current:root,transition:null}; /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
	     * //and current state is 'contacts.detail.item'
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>

	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */$state.reload = function reload(state){return $state.transitionTo($state.current,$stateParams,{reload:state || true,inherit:false,notify:true});}; /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */$state.go = function go(to,params,options){return $state.transitionTo(to,params,extend({inherit:true,relative:$state.$current},options));}; /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *    if String, then will reload the state with the name given in reload, and any children.
	     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */$state.transitionTo = function transitionTo(to,toParams,options){toParams = toParams || {};options = extend({location:true,inherit:false,relative:null,notify:true,reload:false,$retry:false},options || {});var from=$state.$current,fromParams=$state.params,fromPath=from.path;var evt,toState=findState(to,options.relative); // Store the hash param for later (since it will be stripped out by various methods)
	var hash=toParams['#'];if(!isDefined(toState)){var redirect={to:to,toParams:toParams,options:options};var redirectResult=handleRedirect(redirect,from.self,fromParams,options);if(redirectResult){return redirectResult;} // Always retry once if the $stateNotFound was not prevented
	// (handles either redirect changed or state lazy-definition)
	to = redirect.to;toParams = redirect.toParams;options = redirect.options;toState = findState(to,options.relative);if(!isDefined(toState)){if(!options.relative)throw new Error("No such state '" + to + "'");throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");}}if(toState[abstractKey])throw new Error("Cannot transition to abstract state '" + to + "'");if(options.inherit)toParams = inheritParams($stateParams,toParams || {},$state.$current,toState);if(!toState.params.$$validates(toParams))return TransitionFailed;toParams = toState.params.$$values(toParams);to = toState;var toPath=to.path; // Starting from the root of the path, keep all levels that haven't changed
	var keep=0,state=toPath[keep],locals=root.locals,toLocals=[];if(!options.reload){while(state && state === fromPath[keep] && state.ownParams.$$equals(toParams,fromParams)) {locals = toLocals[keep] = state.locals;keep++;state = toPath[keep];}}else if(isString(options.reload) || isObject(options.reload)){if(isObject(options.reload) && !options.reload.name){throw new Error('Invalid reload state object');}var reloadState=options.reload === true?fromPath[0]:findState(options.reload);if(options.reload && !reloadState){throw new Error("No such reload state '" + (isString(options.reload)?options.reload:options.reload.name) + "'");}while(state && state === fromPath[keep] && state !== reloadState) {locals = toLocals[keep] = state.locals;keep++;state = toPath[keep];}} // If we're going to the same state and all locals are kept, we've got nothing to do.
	// But clear 'transition', as we still want to cancel any other pending transitions.
	// TODO: We may not want to bump 'transition' if we're called from a location change
	// that we've initiated ourselves, because we might accidentally abort a legitimate
	// transition initiated from code?
	if(shouldSkipReload(to,toParams,from,fromParams,locals,options)){if(hash)toParams['#'] = hash;$state.params = toParams;copy($state.params,$stateParams);if(options.location && to.navigable && to.navigable.url){$urlRouter.push(to.navigable.url,toParams,{$$avoidResync:true,replace:options.location === 'replace'});$urlRouter.update(true);}$state.transition = null;return $q.when($state.current);} // Filter parameters before we pass them to event handlers etc.
	toParams = filterByKeys(to.params.$$keys(),toParams || {}); // Broadcast start event and cancel the transition if requested
	if(options.notify){ /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */if($rootScope.$broadcast('$stateChangeStart',to.self,toParams,from.self,fromParams).defaultPrevented){$rootScope.$broadcast('$stateChangeCancel',to.self,toParams,from.self,fromParams);$urlRouter.update();return TransitionPrevented;}} // Resolve locals for the remaining states, but don't update any global state just
	// yet -- if anything fails to resolve the current state needs to remain untouched.
	// We also set up an inheritance chain for the locals here. This allows the view directive
	// to quickly look up the correct definition for each view in the current state. Even
	// though we create the locals object itself outside resolveState(), it is initially
	// empty and gets filled asynchronously. We need to keep track of the promise for the
	// (fully resolved) current locals, and pass this down the chain.
	var resolved=$q.when(locals);for(var l=keep;l < toPath.length;l++,state = toPath[l]) {locals = toLocals[l] = inherit(locals);resolved = resolveState(state,toParams,state === to,resolved,locals,options);} // Once everything is resolved, we are ready to perform the actual transition
	// and return a promise for the new state. We also keep track of what the
	// current promise is, so that we can detect overlapping transitions and
	// keep only the outcome of the last transition.
	var transition=$state.transition = resolved.then(function(){var l,entering,exiting;if($state.transition !== transition)return TransitionSuperseded; // Exit 'from' states not kept
	for(l = fromPath.length - 1;l >= keep;l--) {exiting = fromPath[l];if(exiting.self.onExit){$injector.invoke(exiting.self.onExit,exiting.self,exiting.locals.globals);}exiting.locals = null;} // Enter 'to' states not kept
	for(l = keep;l < toPath.length;l++) {entering = toPath[l];entering.locals = toLocals[l];if(entering.self.onEnter){$injector.invoke(entering.self.onEnter,entering.self,entering.locals.globals);}} // Re-add the saved hash before we start returning things
	if(hash)toParams['#'] = hash; // Run it again, to catch any transitions in callbacks
	if($state.transition !== transition)return TransitionSuperseded; // Update globals in $state
	$state.$current = to;$state.current = to.self;$state.params = toParams;copy($state.params,$stateParams);$state.transition = null;if(options.location && to.navigable){$urlRouter.push(to.navigable.url,to.navigable.locals.globals.$stateParams,{$$avoidResync:true,replace:options.location === 'replace'});}if(options.notify){ /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */$rootScope.$broadcast('$stateChangeSuccess',to.self,toParams,from.self,fromParams);}$urlRouter.update(true);return $state.current;},function(error){if($state.transition !== transition)return TransitionSuperseded;$state.transition = null; /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */evt = $rootScope.$broadcast('$stateChangeError',to.self,toParams,from.self,fromParams,error);if(!evt.defaultPrevented){$urlRouter.update();}return $q.reject(error);});return transition;}; /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */$state.is = function is(stateOrName,params,options){options = extend({relative:$state.$current},options || {});var state=findState(stateOrName,options.relative);if(!isDefined(state)){return undefined;}if($state.$current !== state){return false;}return params?equalForKeys(state.params.$$values(params),$stateParams):true;}; /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */$state.includes = function includes(stateOrName,params,options){options = extend({relative:$state.$current},options || {});if(isString(stateOrName) && isGlob(stateOrName)){if(!doesStateMatchGlob(stateOrName)){return false;}stateOrName = $state.$current.name;}var state=findState(stateOrName,options.relative);if(!isDefined(state)){return undefined;}if(!isDefined($state.$current.includes[state.name])){return false;}return params?equalForKeys(state.params.$$values(params),$stateParams,objectKeys(params)):true;}; /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */$state.href = function href(stateOrName,params,options){options = extend({lossy:true,inherit:true,absolute:false,relative:$state.$current},options || {});var state=findState(stateOrName,options.relative);if(!isDefined(state))return null;if(options.inherit)params = inheritParams($stateParams,params || {},$state.$current,state);var nav=state && options.lossy?state.navigable:state;if(!nav || nav.url === undefined || nav.url === null){return null;}return $urlRouter.href(nav.url,filterByKeys(state.params.$$keys().concat('#'),params || {}),{absolute:options.absolute});}; /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */$state.get = function(stateOrName,context){if(arguments.length === 0)return map(objectKeys(states),function(name){return states[name].self;});var state=findState(stateOrName,context || $state.$current);return state && state.self?state.self:null;};function resolveState(state,params,paramsAreFiltered,inherited,dst,options){ // Make a restricted $stateParams with only the parameters that apply to this state if
	// necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	// we also need $stateParams to be available for any $injector calls we make during the
	// dependency resolution process.
	var $stateParams=paramsAreFiltered?params:filterByKeys(state.params.$$keys(),params);var locals={$stateParams:$stateParams}; // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	// We're also including $stateParams in this; that way the parameters are restricted
	// to the set that should be visible to the state, and are independent of when we update
	// the global $state and $stateParams values.
	dst.resolve = $resolve.resolve(state.resolve,locals,dst.resolve,state);var promises=[dst.resolve.then(function(globals){dst.globals = globals;})];if(inherited)promises.push(inherited);function resolveViews(){var viewsPromises=[]; // Resolve template and dependencies for all views.
	forEach(state.views,function(view,name){var injectables=view.resolve && view.resolve !== state.resolve?view.resolve:{};injectables.$template = [function(){return $view.load(name,{view:view,locals:dst.globals,params:$stateParams,notify:options.notify}) || '';}];viewsPromises.push($resolve.resolve(injectables,dst.globals,dst.resolve,state).then(function(result){ // References to the controller (only instantiated at link time)
	if(isFunction(view.controllerProvider) || isArray(view.controllerProvider)){var injectLocals=angular.extend({},injectables,dst.globals);result.$$controller = $injector.invoke(view.controllerProvider,null,injectLocals);}else {result.$$controller = view.controller;} // Provide access to the state itself for internal use
	result.$$state = state;result.$$controllerAs = view.controllerAs;dst[name] = result;}));});return $q.all(viewsPromises).then(function(){return dst.globals;});} // Wait for all the promises and then return the activation object
	return $q.all(promises).then(resolveViews).then(function(values){return dst;});}return $state;}function shouldSkipReload(to,toParams,from,fromParams,locals,options){ // Return true if there are no differences in non-search (path/object) params, false if there are differences
	function nonSearchParamsEqual(fromAndToState,fromParams,toParams){ // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
	function notSearchParam(key){return fromAndToState.params[key].location != "search";}var nonQueryParamKeys=fromAndToState.params.$$keys().filter(notSearchParam);var nonQueryParams=pick.apply({},[fromAndToState.params].concat(nonQueryParamKeys));var nonQueryParamSet=new $$UMFP.ParamSet(nonQueryParams);return nonQueryParamSet.$$equals(fromParams,toParams);} // If reload was not explicitly requested
	// and we're transitioning to the same state we're already in
	// and    the locals didn't change
	//     or they changed in a way that doesn't merit reloading
	//        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
	// Then return true.
	if(!options.reload && to === from && (locals === from.locals || to.self.reloadOnSearch === false && nonSearchParamsEqual(from,fromParams,toParams))){return true;}}}angular.module('ui.router.state').value('$stateParams',{}).provider('$state',$StateProvider);$ViewProvider.$inject = [];function $ViewProvider(){this.$get = $get; /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */$get.$inject = ['$rootScope','$templateFactory'];function $get($rootScope,$templateFactory){return { // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	/**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */load:function load(name,options){var result,defaults={template:null,controller:null,view:null,locals:null,notify:true,async:true,params:{}};options = extend(defaults,options);if(options.view){result = $templateFactory.fromConfig(options.view,options.params,options.locals);}if(result && options.notify){ /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$viewContentLoading
	         * @eventOf ui.router.state.$view
	         * @eventType broadcast on root scope
	         * @description
	         *
	         * Fired once the view **begins loading**, *before* the DOM is rendered.
	         *
	         * @param {Object} event Event object.
	         * @param {Object} viewConfig The view config properties (template, controller, etc).
	         *
	         * @example
	         *
	         * <pre>
	         * $scope.$on('$viewContentLoading',
	         * function(event, viewConfig){
	         *     // Access to all the view config properties.
	         *     // and one special property 'targetView'
	         *     // viewConfig.targetView
	         * });
	         * </pre>
	         */$rootScope.$broadcast('$viewContentLoading',options);}return result;}};}}angular.module('ui.router.state').provider('$view',$ViewProvider); /**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */function $ViewScrollProvider(){var useAnchorScroll=false; /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */this.useAnchorScroll = function(){useAnchorScroll = true;}; /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */this.$get = ['$anchorScroll','$timeout',function($anchorScroll,$timeout){if(useAnchorScroll){return $anchorScroll;}return function($element){return $timeout(function(){$element[0].scrollIntoView();},0,false);};}];}angular.module('ui.router.state').provider('$uiViewScroll',$ViewScrollProvider); /**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 * 
	 * @example
	 * A view can be unnamed or named. 
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div> 
	 * 
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a 
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div> 
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 * 
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * But typically you'll only use the views property if you name your view or have more than one view 
	 * in the same template. There's not really a compelling reason to name a view if its the only one, 
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre> 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div> 
	 * <div ui-view="data"></div> 
	 * </pre>
	 * 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 */$ViewDirective.$inject = ['$state','$injector','$uiViewScroll','$interpolate'];function $ViewDirective($state,$injector,$uiViewScroll,$interpolate){function getService(){return $injector.has?function(service){return $injector.has(service)?$injector.get(service):null;}:function(service){try{return $injector.get(service);}catch(e) {return null;}};}var service=getService(),$animator=service('$animator'),$animate=service('$animate'); // Returns a set of DOM manipulation functions based on which Angular version
	// it should use
	function getRenderer(attrs,scope){var statics=function statics(){return {enter:function enter(element,target,cb){target.after(element);cb();},leave:function leave(element,cb){element.remove();cb();}};};if($animate){return {enter:function enter(element,target,cb){var promise=$animate.enter(element,null,target,cb);if(promise && promise.then)promise.then(cb);},leave:function leave(element,cb){var promise=$animate.leave(element,cb);if(promise && promise.then)promise.then(cb);}};}if($animator){var animate=$animator && $animator(scope,attrs);return {enter:function enter(element,target,cb){animate.enter(element,null,target);cb();},leave:function leave(element,cb){animate.leave(element);cb();}};}return statics();}var directive={restrict:'ECA',terminal:true,priority:400,transclude:'element',compile:function compile(tElement,tAttrs,$transclude){return function(scope,$element,attrs){var previousEl,currentEl,currentScope,latestLocals,onloadExp=attrs.onload || '',autoScrollExp=attrs.autoscroll,renderer=getRenderer(attrs,scope);scope.$on('$stateChangeSuccess',function(){updateView(false);});scope.$on('$viewContentLoading',function(){updateView(false);});updateView(true);function cleanupLastView(){if(previousEl){previousEl.remove();previousEl = null;}if(currentScope){currentScope.$destroy();currentScope = null;}if(currentEl){renderer.leave(currentEl,function(){previousEl = null;});previousEl = currentEl;currentEl = null;}}function updateView(firstTime){var newScope,name=getUiViewName(scope,attrs,$element,$interpolate),previousLocals=name && $state.$current && $state.$current.locals[name];if(!firstTime && previousLocals === latestLocals)return; // nothing to do
	newScope = scope.$new();latestLocals = $state.$current.locals[name];var clone=$transclude(newScope,function(clone){renderer.enter(clone,$element,function onUiViewEnter(){if(currentScope){currentScope.$emit('$viewContentAnimationEnded');}if(angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)){$uiViewScroll(clone);}});cleanupLastView();});currentEl = clone;currentScope = newScope; /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description           *
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           */currentScope.$emit('$viewContentLoaded');currentScope.$eval(onloadExp);}};}};return directive;}$ViewDirectiveFill.$inject = ['$compile','$controller','$state','$interpolate'];function $ViewDirectiveFill($compile,$controller,$state,$interpolate){return {restrict:'ECA',priority:-400,compile:function compile(tElement){var initial=tElement.html();return function(scope,$element,attrs){var current=$state.$current,name=getUiViewName(scope,attrs,$element,$interpolate),locals=current && current.locals[name];if(!locals){return;}$element.data('$uiView',{name:name,state:locals.$$state});$element.html(locals.$template?locals.$template:initial);var link=$compile($element.contents());if(locals.$$controller){locals.$scope = scope;locals.$element = $element;var controller=$controller(locals.$$controller,locals);if(locals.$$controllerAs){scope[locals.$$controllerAs] = controller;}$element.data('$ngControllerController',controller);$element.children().data('$ngControllerController',controller);}link(scope);};}};} /**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */function getUiViewName(scope,attrs,element,$interpolate){var name=$interpolate(attrs.uiView || attrs.name || '')(scope);var inherited=element.inheritedData('$uiView');return name.indexOf('@') >= 0?name:name + '@' + (inherited?inherited.state.name:'');}angular.module('ui.router.state').directive('uiView',$ViewDirective);angular.module('ui.router.state').directive('uiView',$ViewDirectiveFill);function parseStateRef(ref,current){var preparsed=ref.match(/^\s*({[^}]*})\s*$/),parsed;if(preparsed)ref = current + '(' + preparsed[1] + ')';parsed = ref.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!parsed || parsed.length !== 4)throw new Error("Invalid state ref '" + ref + "'");return {state:parsed[1],paramExpr:parsed[3] || null};}function stateContext(el){var stateData=el.parent().inheritedData('$uiView');if(stateData && stateData.state && stateData.state.name){return stateData.state;}} /**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
	 * URL, the directive will automatically generate & update the `href` attribute via 
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
	 * the link will trigger a state transition with optional parameters. 
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative 
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the 
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 * 
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
	 */$StateRefDirective.$inject = ['$state','$timeout'];function $StateRefDirective($state,$timeout){var allowedOptions=['location','inherit','reload','absolute'];return {restrict:'A',require:['?^uiSrefActive','?^uiSrefActiveEq'],link:function link(scope,element,attrs,uiSrefActive){var ref=parseStateRef(attrs.uiSref,$state.current.name);var params=null,url=null,base=stateContext(element) || $state.$current; // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	var hrefKind=Object.prototype.toString.call(element.prop('href')) === '[object SVGAnimatedString]'?'xlink:href':'href';var newHref=null,isAnchor=element.prop("tagName").toUpperCase() === "A";var isForm=element[0].nodeName === "FORM";var attr=isForm?"action":hrefKind,nav=true;var options={relative:base,inherit:true};var optionsOverride=scope.$eval(attrs.uiSrefOpts) || {};angular.forEach(allowedOptions,function(option){if(option in optionsOverride){options[option] = optionsOverride[option];}});var update=function update(newVal){if(newVal)params = angular.copy(newVal);if(!nav)return;newHref = $state.href(ref.state,params,options);var activeDirective=uiSrefActive[1] || uiSrefActive[0];if(activeDirective){activeDirective.$$addStateInfo(ref.state,params);}if(newHref === null){nav = false;return false;}attrs.$set(attr,newHref);};if(ref.paramExpr){scope.$watch(ref.paramExpr,function(newVal,oldVal){if(newVal !== params)update(newVal);},true);params = angular.copy(scope.$eval(ref.paramExpr));}update();if(isForm)return;element.bind("click",function(e){var button=e.which || e.button;if(!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target'))){ // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	var transition=$timeout(function(){$state.go(ref.state,params,options);});e.preventDefault(); // if the state has no URL, ignore one preventDefault from the <a> directive.
	var ignorePreventDefaultCount=isAnchor && !newHref?1:0;e.preventDefault = function(){if(ignorePreventDefaultCount-- <= 0)$timeout.cancel(transition);};}});}};} /**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 */ /**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */$StateRefActiveDirective.$inject = ['$state','$stateParams','$interpolate'];function $StateRefActiveDirective($state,$stateParams,$interpolate){return {restrict:"A",controller:['$scope','$element','$attrs',function($scope,$element,$attrs){var states=[],activeClass; // There probably isn't much point in $observing this
	// uiSrefActive and uiSrefActiveEq share the same directive object with some
	// slight difference in logic routing
	activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '',false)($scope); // Allow uiSref to communicate with uiSrefActive[Equals]
	this.$$addStateInfo = function(newState,newParams){var state=$state.get(newState,stateContext($element));states.push({state:state || {name:newState},params:newParams});update();};$scope.$on('$stateChangeSuccess',update); // Update route state
	function update(){if(anyMatch()){$element.addClass(activeClass);}else {$element.removeClass(activeClass);}}function anyMatch(){for(var i=0;i < states.length;i++) {if(isMatch(states[i].state,states[i].params)){return true;}}return false;}function isMatch(state,params){if(typeof $attrs.uiSrefActiveEq !== 'undefined'){return $state.is(state.name,params);}else {return $state.includes(state.name,params);}}}]};}angular.module('ui.router.state').directive('uiSref',$StateRefDirective).directive('uiSrefActive',$StateRefActiveDirective).directive('uiSrefActiveEq',$StateRefActiveDirective); /**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */$IsStateFilter.$inject = ['$state'];function $IsStateFilter($state){var isFilter=function isFilter(state){return $state.is(state);};isFilter.$stateful = true;return isFilter;} /**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */$IncludedByStateFilter.$inject = ['$state'];function $IncludedByStateFilter($state){var includesFilter=function includesFilter(state){return $state.includes(state);};includesFilter.$stateful = true;return includesFilter;}angular.module('ui.router.state').filter('isState',$IsStateFilter).filter('includedByState',$IncludedByStateFilter);})(window,window.angular);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// importy
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _controllersMainController = __webpack_require__(6);

	var _controllersMainController2 = _interopRequireDefault(_controllersMainController);

	var _routesRoutesModule = __webpack_require__(7);

	var _routesRoutesModule2 = _interopRequireDefault(_routesRoutesModule);

	// deklaracja modułów i dependancy
	var moduleName = 'MonsterModule';
	var deps = ['ui.router', _routesRoutesModule2['default']];

	angular.module(moduleName, deps).controller('MainController', _controllersMainController2['default']); //Register end

	exports['default'] = moduleName;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var MainController =
	/*@ngInject*/
	["$scope", "$state", function MainController($scope, $state) {
	    _classCallCheck(this, MainController);

	    console.log('Start');
	    console.log($state);
	    $state.go('login');
	}];

	exports['default'] = MainController;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// importy
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _controllersLoginController = __webpack_require__(8);

	var _controllersLoginController2 = _interopRequireDefault(_controllersLoginController);

	var _Router = __webpack_require__(9);

	var _Router2 = _interopRequireDefault(_Router);

	// deklaracja modułów i dependancy
	var moduleName = 'RoutesModule';
	var deps = ['ui.router'];

	angular.module(moduleName, deps).controller('LoginController', _controllersLoginController2['default']).config(_Router2['default']); //Register end

	exports['default'] = moduleName;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginController =
	/*@ngInject*/
	["$scope", "$state", function LoginController($scope, $state) {
	    _classCallCheck(this, LoginController);

	    $scope.login = {};
	}];

	exports["default"] = LoginController;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _templatesLoginHtml = __webpack_require__(10);

	var _templatesLoginHtml2 = _interopRequireDefault(_templatesLoginHtml);

	var _controllersLoginController = __webpack_require__(8);

	var _controllersLoginController2 = _interopRequireDefault(_controllersLoginController);

	var Router = /*@ngInject*/["$urlRouterProvider", "$stateProvider", function Router($urlRouterProvider, $stateProvider) {
	    $stateProvider.state('intro', {
	        views: {
	            'monster': {
	                template: IntroTemplate,
	                controller: IntroController
	            }
	        }
	    }).state('login', {
	        views: {
	            'monster': {
	                template: _templatesLoginHtml2['default'],
	                controller: _controllersLoginController2['default']
	            }
	        }
	    }); // End of states.
	}];

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group input-group-lg\">\n    <span class=\"input-group-addon\" id=\"sizing-addon1\">Login:</span>\n    <input ng-model=\"login.username\" type=\"text\" class=\"form-control\" placeholder=\"Username\">\n</div>\n<div class=\"input-group input-group-lg\">\n    <span class=\"input-group-addon\" id=\"sizing-addon1\">Password:</span>\n    <input ng-model=\"login.password\" type=\"text\" class=\"form-control\" placeholder=\"Password\">\n</div>\n"

/***/ },
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	/*!
	 * Bootstrap v3.3.5 (http://getbootstrap.com)
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under the MIT license
	 */
	'use strict';

	if (typeof jQuery === 'undefined') {
	  throw new Error('Bootstrap\'s JavaScript requires jQuery');
	}

	+(function ($) {
	  'use strict';
	  var version = $.fn.jquery.split(' ')[0].split('.');
	  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {
	    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher');
	  }
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.5
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap');

	    var transEndEventNames = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] };
	      }
	    }

	    return false; // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false;
	    var $el = this;
	    $(this).one('bsTransitionEnd', function () {
	      called = true;
	    });
	    var callback = function callback() {
	      if (!called) $($el).trigger($.support.transition.end);
	    };
	    setTimeout(callback, duration);
	    return this;
	  };

	  $(function () {
	    $.support.transition = transitionEnd();

	    if (!$.support.transition) return;

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function handle(e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
	      }
	    };
	  });
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.5
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]';
	  var Alert = function Alert(el) {
	    $(el).on('click', dismiss, this.close);
	  };

	  Alert.VERSION = '3.3.5';

	  Alert.TRANSITION_DURATION = 150;

	  Alert.prototype.close = function (e) {
	    var $this = $(this);
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = $(selector);

	    if (e) e.preventDefault();

	    if (!$parent.length) {
	      $parent = $this.closest('.alert');
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'));

	    if (e.isDefaultPrevented()) return;

	    $parent.removeClass('in');

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove();
	    }

	    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
	  };

	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.alert');

	      if (!data) $this.data('bs.alert', data = new Alert(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.alert;

	  $.fn.alert = Plugin;
	  $.fn.alert.Constructor = Alert;

	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old;
	    return this;
	  };

	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: button.js v3.3.5
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function Button(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Button.DEFAULTS, options);
	    this.isLoading = false;
	  };

	  Button.VERSION = '3.3.5';

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  };

	  Button.prototype.setState = function (state) {
	    var d = 'disabled';
	    var $el = this.$element;
	    var val = $el.is('input') ? 'val' : 'html';
	    var data = $el.data();

	    state += 'Text';

	    if (data.resetText == null) $el.data('resetText', $el[val]());

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state]);

	      if (state == 'loadingText') {
	        this.isLoading = true;
	        $el.addClass(d).attr(d, d);
	      } else if (this.isLoading) {
	        this.isLoading = false;
	        $el.removeClass(d).removeAttr(d);
	      }
	    }, this), 0);
	  };

	  Button.prototype.toggle = function () {
	    var changed = true;
	    var $parent = this.$element.closest('[data-toggle="buttons"]');

	    if ($parent.length) {
	      var $input = this.$element.find('input');
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false;
	        $parent.find('.active').removeClass('active');
	        this.$element.addClass('active');
	      } else if ($input.prop('type') == 'checkbox') {
	        if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
	        this.$element.toggleClass('active');
	      }
	      $input.prop('checked', this.$element.hasClass('active'));
	      if (changed) $input.trigger('change');
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
	      this.$element.toggleClass('active');
	    }
	  };

	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.button');
	      var options = typeof option == 'object' && option;

	      if (!data) $this.data('bs.button', data = new Button(this, options));

	      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
	    });
	  }

	  var old = $.fn.button;

	  $.fn.button = Plugin;
	  $.fn.button.Constructor = Button;

	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old;
	    return this;
	  };

	  // BUTTON DATA-API
	  // ===============

	  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    var $btn = $(e.target);
	    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
	    Plugin.call($btn, 'toggle');
	    if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault();
	  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
	  });
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.5
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function Carousel(element, options) {
	    this.$element = $(element);
	    this.$indicators = this.$element.find('.carousel-indicators');
	    this.options = options;
	    this.paused = null;
	    this.sliding = null;
	    this.interval = null;
	    this.$active = null;
	    this.$items = null;

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
	  };

	  Carousel.VERSION = '3.3.5';

	  Carousel.TRANSITION_DURATION = 600;

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  };

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return;
	    switch (e.which) {
	      case 37:
	        this.prev();break;
	      case 39:
	        this.next();break;
	      default:
	        return;
	    }

	    e.preventDefault();
	  };

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false);

	    this.interval && clearInterval(this.interval);

	    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

	    return this;
	  };

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item');
	    return this.$items.index(item || this.$active);
	  };

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active);
	    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
	    if (willWrap && !this.options.wrap) return active;
	    var delta = direction == 'prev' ? -1 : 1;
	    var itemIndex = (activeIndex + delta) % this.$items.length;
	    return this.$items.eq(itemIndex);
	  };

	  Carousel.prototype.to = function (pos) {
	    var that = this;
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

	    if (pos > this.$items.length - 1 || pos < 0) return;

	    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
	      that.to(pos);
	    }); // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle();

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
	  };

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true);

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end);
	      this.cycle(true);
	    }

	    this.interval = clearInterval(this.interval);

	    return this;
	  };

	  Carousel.prototype.next = function () {
	    if (this.sliding) return;
	    return this.slide('next');
	  };

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return;
	    return this.slide('prev');
	  };

	  Carousel.prototype.slide = function (type, next) {
	    var $active = this.$element.find('.item.active');
	    var $next = next || this.getItemForDirection(type, $active);
	    var isCycling = this.interval;
	    var direction = type == 'next' ? 'left' : 'right';
	    var that = this;

	    if ($next.hasClass('active')) return this.sliding = false;

	    var relatedTarget = $next[0];
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    });
	    this.$element.trigger(slideEvent);
	    if (slideEvent.isDefaultPrevented()) return;

	    this.sliding = true;

	    isCycling && this.pause();

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active');
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
	      $nextIndicator && $nextIndicator.addClass('active');
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type);
	      $next[0].offsetWidth; // force reflow
	      $active.addClass(direction);
	      $next.addClass(direction);
	      $active.one('bsTransitionEnd', function () {
	        $next.removeClass([type, direction].join(' ')).addClass('active');
	        $active.removeClass(['active', direction].join(' '));
	        that.sliding = false;
	        setTimeout(function () {
	          that.$element.trigger(slidEvent);
	        }, 0);
	      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
	    } else {
	      $active.removeClass('active');
	      $next.addClass('active');
	      this.sliding = false;
	      this.$element.trigger(slidEvent);
	    }

	    isCycling && this.cycle();

	    return this;
	  };

	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.carousel');
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option);
	      var action = typeof option == 'string' ? option : options.slide;

	      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
	      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
	    });
	  }

	  var old = $.fn.carousel;

	  $.fn.carousel = Plugin;
	  $.fn.carousel.Constructor = Carousel;

	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old;
	    return this;
	  };

	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function clickHandler(e) {
	    var href;
	    var $this = $(this);
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    if (!$target.hasClass('carousel')) return;
	    var options = $.extend({}, $target.data(), $this.data());
	    var slideIndex = $this.attr('data-slide-to');
	    if (slideIndex) options.interval = false;

	    Plugin.call($target, options);

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex);
	    }

	    e.preventDefault();
	  };

	  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this);
	      Plugin.call($carousel, $carousel.data());
	    });
	  });
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.5
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function Collapse(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Collapse.DEFAULTS, options);
	    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
	    this.transitioning = null;

	    if (this.options.parent) {
	      this.$parent = this.getParent();
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
	    }

	    if (this.options.toggle) this.toggle();
	  };

	  Collapse.VERSION = '3.3.5';

	  Collapse.TRANSITION_DURATION = 350;

	  Collapse.DEFAULTS = {
	    toggle: true
	  };

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width');
	    return hasWidth ? 'width' : 'height';
	  };

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return;

	    var activesData;
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse');
	      if (activesData && activesData.transitioning) return;
	    }

	    var startEvent = $.Event('show.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide');
	      activesData || actives.data('bs.collapse', null);
	    }

	    var dimension = this.dimension();

	    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

	    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
	      this.transitioning = 0;
	      this.$element.trigger('shown.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

	    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
	  };

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return;

	    var startEvent = $.Event('hide.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    var dimension = this.dimension();

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

	    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

	    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.transitioning = 0;
	      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
	  };

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']();
	  };

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
	      var $element = $(element);
	      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
	    }, this)).end();
	  };

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in');

	    $element.attr('aria-expanded', isOpen);
	    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
	  };

	  function getTargetFromTrigger($trigger) {
	    var href;
	    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

	    return $(target);
	  }

	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.collapse');
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
	      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.collapse;

	  $.fn.collapse = Plugin;
	  $.fn.collapse.Constructor = Collapse;

	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old;
	    return this;
	  };

	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this = $(this);

	    if (!$this.attr('data-target')) e.preventDefault();

	    var $target = getTargetFromTrigger($this);
	    var data = $target.data('bs.collapse');
	    var option = data ? 'toggle' : $this.data();

	    Plugin.call($target, option);
	  });
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.5
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop';
	  var toggle = '[data-toggle="dropdown"]';
	  var Dropdown = function Dropdown(element) {
	    $(element).on('click.bs.dropdown', this.toggle);
	  };

	  Dropdown.VERSION = '3.3.5';

	  function getParent($this) {
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = selector && $(selector);

	    return $parent && $parent.length ? $parent : $this.parent();
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return;
	    $(backdrop).remove();
	    $(toggle).each(function () {
	      var $this = $(this);
	      var $parent = getParent($this);
	      var relatedTarget = { relatedTarget: this };

	      if (!$parent.hasClass('open')) return;

	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

	      if (e.isDefaultPrevented()) return;

	      $this.attr('aria-expanded', 'false');
	      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
	    });
	  }

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this);

	    if ($this.is('.disabled, :disabled')) return;

	    var $parent = getParent($this);
	    var isActive = $parent.hasClass('open');

	    clearMenus();

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
	      }

	      var relatedTarget = { relatedTarget: this };
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

	      if (e.isDefaultPrevented()) return;

	      $this.trigger('focus').attr('aria-expanded', 'true');

	      $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget);
	    }

	    return false;
	  };

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

	    var $this = $(this);

	    e.preventDefault();
	    e.stopPropagation();

	    if ($this.is('.disabled, :disabled')) return;

	    var $parent = getParent($this);
	    var isActive = $parent.hasClass('open');

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus');
	      return $this.trigger('click');
	    }

	    var desc = ' li:not(.disabled):visible a';
	    var $items = $parent.find('.dropdown-menu' + desc);

	    if (!$items.length) return;

	    var index = $items.index(e.target);

	    if (e.which == 38 && index > 0) index--; // up
	    if (e.which == 40 && index < $items.length - 1) index++; // down
	    if (! ~index) index = 0;

	    $items.eq(index).trigger('focus');
	  };

	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.dropdown');

	      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.dropdown;

	  $.fn.dropdown = Plugin;
	  $.fn.dropdown.Constructor = Dropdown;

	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old;
	    return this;
	  };

	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
	    e.stopPropagation();
	  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.5
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function Modal(element, options) {
	    this.options = options;
	    this.$body = $(document.body);
	    this.$element = $(element);
	    this.$dialog = this.$element.find('.modal-dialog');
	    this.$backdrop = null;
	    this.isShown = null;
	    this.originalBodyPad = null;
	    this.scrollbarWidth = 0;
	    this.ignoreBackdropClick = false;

	    if (this.options.remote) {
	      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
	        this.$element.trigger('loaded.bs.modal');
	      }, this));
	    }
	  };

	  Modal.VERSION = '3.3.5';

	  Modal.TRANSITION_DURATION = 300;
	  Modal.BACKDROP_TRANSITION_DURATION = 150;

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  };

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget);
	  };

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this;
	    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

	    this.$element.trigger(e);

	    if (this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = true;

	    this.checkScrollbar();
	    this.setScrollbar();
	    this.$body.addClass('modal-open');

	    this.escape();
	    this.resize();

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
	      });
	    });

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade');

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body); // don't move modals dom position
	      }

	      that.$element.show().scrollTop(0);

	      that.adjustDialog();

	      if (transition) {
	        that.$element[0].offsetWidth; // force reflow
	      }

	      that.$element.addClass('in');

	      that.enforceFocus();

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

	      transition ? that.$dialog // wait for modal to slide in
	      .one('bsTransitionEnd', function () {
	        that.$element.trigger('focus').trigger(e);
	      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
	    });
	  };

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault();

	    e = $.Event('hide.bs.modal');

	    this.$element.trigger(e);

	    if (!this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = false;

	    this.escape();
	    this.resize();

	    $(document).off('focusin.bs.modal');

	    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

	    this.$dialog.off('mousedown.dismiss.bs.modal');

	    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
	  };

	  Modal.prototype.enforceFocus = function () {
	    $(document).off('focusin.bs.modal') // guard against infinite focus loop
	    .on('focusin.bs.modal', $.proxy(function (e) {
	      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	        this.$element.trigger('focus');
	      }
	    }, this));
	  };

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide();
	      }, this));
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal');
	    }
	  };

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
	    } else {
	      $(window).off('resize.bs.modal');
	    }
	  };

	  Modal.prototype.hideModal = function () {
	    var that = this;
	    this.$element.hide();
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open');
	      that.resetAdjustments();
	      that.resetScrollbar();
	      that.$element.trigger('hidden.bs.modal');
	    });
	  };

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove();
	    this.$backdrop = null;
	  };

	  Modal.prototype.backdrop = function (callback) {
	    var that = this;
	    var animate = this.$element.hasClass('fade') ? 'fade' : '';

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate;

	      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false;
	          return;
	        }
	        if (e.target !== e.currentTarget) return;
	        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
	      }, this));

	      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

	      this.$backdrop.addClass('in');

	      if (!callback) return;

	      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in');

	      var callbackRemove = function callbackRemove() {
	        that.removeBackdrop();
	        callback && callback();
	      };
	      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
	    } else if (callback) {
	      callback();
	    }
	  };

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog();
	  };

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

	    this.$element.css({
	      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    });
	  };

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    });
	  };

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth;
	    if (!fullWindowWidth) {
	      // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect();
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	    this.scrollbarWidth = this.measureScrollbar();
	  };

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
	    this.originalBodyPad = document.body.style.paddingRight || '';
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
	  };

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad);
	  };

	  Modal.prototype.measureScrollbar = function () {
	    // thx walsh
	    var scrollDiv = document.createElement('div');
	    scrollDiv.className = 'modal-scrollbar-measure';
	    this.$body.append(scrollDiv);
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    this.$body[0].removeChild(scrollDiv);
	    return scrollbarWidth;
	  };

	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.modal');
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);

	      if (!data) $this.data('bs.modal', data = new Modal(this, options));
	      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
	    });
	  }

	  var old = $.fn.modal;

	  $.fn.modal = Plugin;
	  $.fn.modal.Constructor = Modal;

	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old;
	    return this;
	  };

	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this = $(this);
	    var href = $this.attr('href');
	    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

	    if ($this.is('a')) e.preventDefault();

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus');
	      });
	    });
	    Plugin.call($target, option, this);
	  });
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.5
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function Tooltip(element, options) {
	    this.type = null;
	    this.options = null;
	    this.enabled = null;
	    this.timeout = null;
	    this.hoverState = null;
	    this.$element = null;
	    this.inState = null;

	    this.init('tooltip', element, options);
	  };

	  Tooltip.VERSION = '3.3.5';

	  Tooltip.TRANSITION_DURATION = 150;

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  };

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled = true;
	    this.type = type;
	    this.$element = $(element);
	    this.options = this.getOptions(options);
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
	    this.inState = { click: false, hover: false, focus: false };

	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
	    }

	    var triggers = this.options.trigger.split(' ');

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i];

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
	      } else if (trigger != 'manual') {
	        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

	        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
	      }
	    }

	    this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
	  };

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS;
	  };

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      };
	    }

	    return options;
	  };

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options = {};
	    var defaults = this.getDefaults();

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value;
	    });

	    return options;
	  };

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
	      $(obj.currentTarget).data('bs.' + this.type, self);
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
	    }

	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in';
	      return;
	    }

	    clearTimeout(self.timeout);

	    self.hoverState = 'in';

	    if (!self.options.delay || !self.options.delay.show) return self.show();

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show();
	    }, self.options.delay.show);
	  };

	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true;
	    }

	    return false;
	  };

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
	      $(obj.currentTarget).data('bs.' + this.type, self);
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
	    }

	    if (self.isInStateTrue()) return;

	    clearTimeout(self.timeout);

	    self.hoverState = 'out';

	    if (!self.options.delay || !self.options.delay.hide) return self.hide();

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide();
	    }, self.options.delay.hide);
	  };

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type);

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e);

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
	      if (e.isDefaultPrevented() || !inDom) return;
	      var that = this;

	      var $tip = this.tip();

	      var tipId = this.getUID(this.type);

	      this.setContent();
	      $tip.attr('id', tipId);
	      this.$element.attr('aria-describedby', tipId);

	      if (this.options.animation) $tip.addClass('fade');

	      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

	      var autoToken = /\s?auto?\s?/i;
	      var autoPlace = autoToken.test(placement);
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

	      $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
	      this.$element.trigger('inserted.bs.' + this.type);

	      var pos = this.getPosition();
	      var actualWidth = $tip[0].offsetWidth;
	      var actualHeight = $tip[0].offsetHeight;

	      if (autoPlace) {
	        var orgPlacement = placement;
	        var viewportDim = this.getPosition(this.$viewport);

	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

	        $tip.removeClass(orgPlacement).addClass(placement);
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

	      this.applyPlacement(calculatedOffset, placement);

	      var complete = function complete() {
	        var prevHoverState = that.hoverState;
	        that.$element.trigger('shown.bs.' + that.type);
	        that.hoverState = null;

	        if (prevHoverState == 'out') that.leave(that);
	      };

	      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
	    }
	  };

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip = this.tip();
	    var width = $tip[0].offsetWidth;
	    var height = $tip[0].offsetHeight;

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10);
	    var marginLeft = parseInt($tip.css('margin-left'), 10);

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop)) marginTop = 0;
	    if (isNaN(marginLeft)) marginLeft = 0;

	    offset.top += marginTop;
	    offset.left += marginLeft;

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function using(props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        });
	      }
	    }, offset), 0);

	    $tip.addClass('in');

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth = $tip[0].offsetWidth;
	    var actualHeight = $tip[0].offsetHeight;

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight;
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

	    if (delta.left) offset.left += delta.left;else offset.top += delta.top;

	    var isVertical = /top|bottom/.test(placement);
	    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

	    $tip.offset(offset);
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
	  };

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
	  };

	  Tooltip.prototype.setContent = function () {
	    var $tip = this.tip();
	    var title = this.getTitle();

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
	    $tip.removeClass('fade in top bottom left right');
	  };

	  Tooltip.prototype.hide = function (callback) {
	    var that = this;
	    var $tip = $(this.$tip);
	    var e = $.Event('hide.bs.' + this.type);

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach();
	      that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
	      callback && callback();
	    }

	    this.$element.trigger(e);

	    if (e.isDefaultPrevented()) return;

	    $tip.removeClass('in');

	    $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

	    this.hoverState = null;

	    return this;
	  };

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element;
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
	    }
	  };

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle();
	  };

	  Tooltip.prototype.getPosition = function ($element) {
	    $element = $element || this.$element;

	    var el = $element[0];
	    var isBody = el.tagName == 'BODY';

	    var elRect = el.getBoundingClientRect();
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
	    }
	    var elOffset = isBody ? { top: 0, left: 0 } : $element.offset();
	    var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

	    return $.extend({}, elRect, scroll, outerDims, elOffset);
	  };

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	    /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
	  };

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 };
	    if (!this.$viewport) return delta;

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
	    var viewportDimensions = this.getPosition(this.$viewport);

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
	      if (topEdgeOffset < viewportDimensions.top) {
	        // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset;
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
	        // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
	      }
	    } else {
	      var leftEdgeOffset = pos.left - viewportPadding;
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
	      if (leftEdgeOffset < viewportDimensions.left) {
	        // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset;
	      } else if (rightEdgeOffset > viewportDimensions.right) {
	        // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
	      }
	    }

	    return delta;
	  };

	  Tooltip.prototype.getTitle = function () {
	    var title;
	    var $e = this.$element;
	    var o = this.options;

	    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

	    return title;
	  };

	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~ ~(Math.random() * 1000000); while (document.getElementById(prefix));
	    return prefix;
	  };

	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template);
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
	      }
	    }
	    return this.$tip;
	  };

	  Tooltip.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
	  };

	  Tooltip.prototype.enable = function () {
	    this.enabled = true;
	  };

	  Tooltip.prototype.disable = function () {
	    this.enabled = false;
	  };

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled;
	  };

	  Tooltip.prototype.toggle = function (e) {
	    var self = this;
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type);
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
	        $(e.currentTarget).data('bs.' + this.type, self);
	      }
	    }

	    if (e) {
	      self.inState.click = !self.inState.click;
	      if (self.isInStateTrue()) self.enter(self);else self.leave(self);
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
	    }
	  };

	  Tooltip.prototype.destroy = function () {
	    var that = this;
	    clearTimeout(this.timeout);
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type);
	      if (that.$tip) {
	        that.$tip.detach();
	      }
	      that.$tip = null;
	      that.$arrow = null;
	      that.$viewport = null;
	    });
	  };

	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tooltip');
	      var options = typeof option == 'object' && option;

	      if (!data && /destroy|hide/.test(option)) return;
	      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tooltip;

	  $.fn.tooltip = Plugin;
	  $.fn.tooltip.Constructor = Tooltip;

	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old;
	    return this;
	  };
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: popover.js v3.3.5
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function Popover(element, options) {
	    this.init('popover', element, options);
	  };

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

	  Popover.VERSION = '3.3.5';

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  });

	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

	  Popover.prototype.constructor = Popover;

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS;
	  };

	  Popover.prototype.setContent = function () {
	    var $tip = this.tip();
	    var title = this.getTitle();
	    var content = this.getContent();

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
	    $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
	    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

	    $tip.removeClass('fade top bottom left right in');

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
	  };

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent();
	  };

	  Popover.prototype.getContent = function () {
	    var $e = this.$element;
	    var o = this.options;

	    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
	  };

	  Popover.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find('.arrow');
	  };

	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.popover');
	      var options = typeof option == 'object' && option;

	      if (!data && /destroy|hide/.test(option)) return;
	      if (!data) $this.data('bs.popover', data = new Popover(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.popover;

	  $.fn.popover = Plugin;
	  $.fn.popover.Constructor = Popover;

	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old;
	    return this;
	  };
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.5
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    this.$body = $(document.body);
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
	    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
	    this.selector = (this.options.target || '') + ' .nav li > a';
	    this.offsets = [];
	    this.targets = [];
	    this.activeTarget = null;
	    this.scrollHeight = 0;

	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
	    this.refresh();
	    this.process();
	  }

	  ScrollSpy.VERSION = '3.3.5';

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  };

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	  };

	  ScrollSpy.prototype.refresh = function () {
	    var that = this;
	    var offsetMethod = 'offset';
	    var offsetBase = 0;

	    this.offsets = [];
	    this.targets = [];
	    this.scrollHeight = this.getScrollHeight();

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position';
	      offsetBase = this.$scrollElement.scrollTop();
	    }

	    this.$body.find(this.selector).map(function () {
	      var $el = $(this);
	      var href = $el.data('target') || $el.attr('href');
	      var $href = /^#./.test(href) && $(href);

	      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
	    }).sort(function (a, b) {
	      return a[0] - b[0];
	    }).each(function () {
	      that.offsets.push(this[0]);
	      that.targets.push(this[1]);
	    });
	  };

	  ScrollSpy.prototype.process = function () {
	    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
	    var scrollHeight = this.getScrollHeight();
	    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
	    var offsets = this.offsets;
	    var targets = this.targets;
	    var activeTarget = this.activeTarget;
	    var i;

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh();
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null;
	      return this.clear();
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
	    }
	  };

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target;

	    this.clear();

	    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

	    var active = $(selector).parents('li').addClass('active');

	    if (active.parent('.dropdown-menu').length) {
	      active = active.closest('li.dropdown').addClass('active');
	    }

	    active.trigger('activate.bs.scrollspy');
	  };

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
	  };

	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.scrollspy');
	      var options = typeof option == 'object' && option;

	      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.scrollspy;

	  $.fn.scrollspy = Plugin;
	  $.fn.scrollspy.Constructor = ScrollSpy;

	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old;
	    return this;
	  };

	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this);
	      Plugin.call($spy, $spy.data());
	    });
	  });
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: tab.js v3.3.5
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function Tab(element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element);
	    // jscs:enable requireDollarBeforejQueryAssignment
	  };

	  Tab.VERSION = '3.3.5';

	  Tab.TRANSITION_DURATION = 150;

	  Tab.prototype.show = function () {
	    var $this = this.element;
	    var $ul = $this.closest('ul:not(.dropdown-menu)');
	    var selector = $this.data('target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return;

	    var $previous = $ul.find('.active:last a');
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    });
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    });

	    $previous.trigger(hideEvent);
	    $this.trigger(showEvent);

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

	    var $target = $(selector);

	    this.activate($this.closest('li'), $ul);
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      });
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      });
	    });
	  };

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active = container.find('> .active');
	    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

	    function next() {
	      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

	      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

	      if (transition) {
	        element[0].offsetWidth; // reflow for transition
	        element.addClass('in');
	      } else {
	        element.removeClass('fade');
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
	      }

	      callback && callback();
	    }

	    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

	    $active.removeClass('in');
	  };

	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tab');

	      if (!data) $this.data('bs.tab', data = new Tab(this));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tab;

	  $.fn.tab = Plugin;
	  $.fn.tab.Constructor = Tab;

	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old;
	    return this;
	  };

	  // TAB DATA-API
	  // ============

	  var clickHandler = function clickHandler(e) {
	    e.preventDefault();
	    Plugin.call($(this), 'show');
	  };

	  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
	})(jQuery);

	/* ========================================================================
	 * Bootstrap: affix.js v3.3.5
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+(function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function Affix(element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options);

	    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

	    this.$element = $(element);
	    this.affixed = null;
	    this.unpin = null;
	    this.pinnedOffset = null;

	    this.checkPosition();
	  };

	  Affix.VERSION = '3.3.5';

	  Affix.RESET = 'affix affix-top affix-bottom';

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  };

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    var targetHeight = this.$target.height();

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
	      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
	    }

	    var initializing = this.affixed == null;
	    var colliderTop = initializing ? scrollTop : position.top;
	    var colliderHeight = initializing ? targetHeight : height;

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
	    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

	    return false;
	  };

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset;
	    this.$element.removeClass(Affix.RESET).addClass('affix');
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    return this.pinnedOffset = position.top - scrollTop;
	  };

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1);
	  };

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return;

	    var height = this.$element.height();
	    var offset = this.options.offset;
	    var offsetTop = offset.top;
	    var offsetBottom = offset.bottom;
	    var scrollHeight = Math.max($(document).height(), $(document.body).height());

	    if (typeof offset != 'object') offsetBottom = offsetTop = offset;
	    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '');

	      var affixType = 'affix' + (affix ? '-' + affix : '');
	      var e = $.Event(affixType + '.bs.affix');

	      this.$element.trigger(e);

	      if (e.isDefaultPrevented()) return;

	      this.affixed = affix;
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

	      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      });
	    }
	  };

	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.affix');
	      var options = typeof option == 'object' && option;

	      if (!data) $this.data('bs.affix', data = new Affix(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.affix;

	  $.fn.affix = Plugin;
	  $.fn.affix.Constructor = Affix;

	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old;
	    return this;
	  };

	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this);
	      var data = $spy.data();

	      data.offset = data.offset || {};

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
	      if (data.offsetTop != null) data.offset.top = data.offsetTop;

	      Plugin.call($spy, data);
	    });
	  });
	})(jQuery);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
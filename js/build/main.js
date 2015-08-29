/*jshint unused: vars */
require.config({
	paths : {
		angular : '../../bower_components/angular/angular',
		'angular-animate' : '../../bower_components/angular-animate/angular-animate',
		'angular-cookies' : '../../bower_components/angular-cookies/angular-cookies',
		'angular-resource' : '../../bower_components/angular-resource/angular-resource',
		'angular-route' : '../../bower_components/angular-route/angular-route',
		'angular-sanitize' : '../../bower_components/angular-sanitize/angular-sanitize',
		'angular-touch' : '../../bower_components/angular-touch/angular-touch',
	},
	shim : {
		angular : {
			exports : 'angular'
		},
		'angular-route' : ['angular'],
		'angular-cookies' : ['angular'],
		'angular-sanitize' : ['angular'],
		'angular-resource' : ['angular'],
		'angular-animate' : ['angular'],
		'angular-touch' : ['angular']
	},
	priority : ['angular'],
	packages : []
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'app', 'angular-route', 'angular-cookies', 'angular-sanitize', 'angular-resource', 'angular-animate', 'angular-touch'], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch) {
	'use strict';
	/* jshint ignore:start */
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	/* jshint ignore:end */
	angular.element().ready(function() {
		angular.resumeBootstrap([app.name]);
	});
});

/***** TWITTER *****/
window.twttr = ( function(d, s, id) {
	var js,
	    fjs = d.getElementsByTagName(s)[0],
	    t = window.twttr || {};
	if (d.getElementById(id))
		return t;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js, fjs);

	t._e = [];
	t.ready = function(f) {
		t._e.push(f);
	};

	return t;
}(document, "script", "twitter-wjs"));

/***** FACEBOOK *****/
(function(d, s, id) {
	var js,
	    fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id))
		return;
	js = d.createElement(s);
	js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




/***** ONLOAD *****/
(function() {
	window.onload = function() {
		document.getElementsByTagName("body")[0].classList.remove("loading");
	};
	var preloaderElem = document.getElementById("preloader");
	function preloaderAnimationEndCallback() {
		preloaderElem.style.display = "none";
	}
	preloaderElem.addEventListener("animationend", preloaderAnimationEndCallback, false);
	preloaderElem.addEventListener("webkitanimationEnd", preloaderAnimationEndCallback, false);
	preloaderElem.addEventListener("oanimationEnd", preloaderAnimationEndCallback, false);
	preloaderElem.addEventListener("MSanimationEnd", preloaderAnimationEndCallback, false);
}());
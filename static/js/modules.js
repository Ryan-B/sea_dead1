var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/frontpage.partial.html'
	})
	.when('/sixnine', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/sixnine.partial.html'
	})
	.when('/sixeight', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/sixeight.partial.html'
	})
	.when('/sevenone', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/sevenone.partial.html'
	})
	.when('/seventwo', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/seventwo.partial.html'
	})
	.when('/seventhree', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/seventhree.partial.html'
	})
	.when('/sevenfour', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/sevenfour.partial.html'
	})
	.when('/sevenseven', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/sevenseven.partial.html'
	})
	.when('/sevennine', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/sevennine.partial.html'
	})
	


});
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
	


});
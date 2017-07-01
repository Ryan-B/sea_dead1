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
	.when('/eightzero', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/eightzero.partial.html'
	})
	.when('/eightone', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/eightone.partial.html'
	})
	.when('/eighttwo', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/eighttwo.partial.html'
	})
	.when('/eightthree', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/eightthree.partial.html'
	})
	.when('/ninefour', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/ninefour.partial.html'
	})
	.when('/ninefive', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/ninefive.partial.html'
	})
	.when('/tampa', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/tampa.partial.html'
	})
	.when('/msg', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/msg.partial.html'
	})
	


});
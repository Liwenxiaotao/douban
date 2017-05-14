(function(angular) {
	'use strict';

	angular.module('movie.coming_soon', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/coming_soon', {
			templateUrl: 'coming_soon/view.html',
			controller: 'comingSoonCtrl'
		});
	}])

	.controller('comingSoonCtrl', ["$scope",function($scope) {

	}]);

})(angular)

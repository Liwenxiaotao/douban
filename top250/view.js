(function(angular) {
	'use strict';

	angular.module('movie.top250', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/top250', {
			templateUrl: 'top250/view.html',
			controller: 'top250Ctrl'
		});
	}])

	.controller('top250Ctrl', ["$scope",function($scope) {

	}]);

})(angular)

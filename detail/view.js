(function(angular) {
	'use strict';
	
	angular.module('movie.datail', ['ngRoute','movie.service.http'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'detail/view.html',
			controller: 'detailCtrl'
		});
	}])
	.controller('detailCtrl', ["$scope","$routeParams","$route","httpService", function($scope,$routeParams,$route,httpService) {		
		$scope.loading=true;
		$scope.detail={};
		httpService.jsonp("http://api.douban.com/v2/movie/subject/"+$routeParams.id,{},function(data){
			$scope.detail = data;
			$scope.loading=false;					
			$scope.$apply()
		});
		
		}
	]);
})(angular)
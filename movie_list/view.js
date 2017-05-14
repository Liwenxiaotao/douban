(function(angular) {
	'use strict';
	
	angular.module('movie.movie_list', ['ngRoute','movie.service.http'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/view.html',
			controller: 'movieListCtrl'
		});
	}])
	.controller('movieListCtrl', ["$scope","$routeParams","$route","httpService", function($scope,$routeParams,$route,httpService) {
		var count=10;
		$scope.page=parseInt($routeParams.page);
		$scope.start=($scope.page-1)*count;
		$scope.totalCount=0;
		$scope.loading=true;
		$scope.totalPages=0
		httpService.jsonp("http://api.douban.com/v2/movie/"+$routeParams.category,{
			start:$scope.start,
			count:count,
			q:$routeParams.q  //获取？后面的值
		},function(data){
			$scope.subjects = data;
			$scope.loading=false;			
			$scope.totalCount=data.total;
			$scope.totalPages=Math.ceil($scope.totalCount/count);
			$scope.$apply("subjects")
		});
		$scope.goPage=function  (page) {
			if(page>=1 && page<=$scope.totalCount){
				$route.updateParams({page:page})
			}			
		}
	}]);
})(angular)
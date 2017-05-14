'use strict';

// Declare app level module which depends on views, and components
angular.module('movie', [
  'ngRoute',
  "movie.datail",
  'movie.movie_list'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).controller("navCtrl",['$scope','$route','$location',function($scope,$route,$location){
	  $scope.input="";
    $scope.search=function($event){
    	if($event.keyCode=="13"){
    		$route.updateParams({category:"search",q:$scope.input})
//  		console.log($scope.input)
    	}
    }
	  $scope.$location=$location;
	  $scope.category="";
	  $scope.$watch("$location.path()",function(newData,oldData){
	  	 $scope.category=newData.split("/")[1]
//	  	 console.log(newData)
	  })	  
}]);
 
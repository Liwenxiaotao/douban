(function jsonp (angular) {
	"use strict"
	var http=angular.module("movie.service.http",[]);
	http.service("httpService",['$window','$document',function($window,$document){
		this.jsonp=function(url,data,callback){
		//创建随机回调函数名
		var queryString=url.indexOf("?")!==-1?"":"?";
		for (var i in data) {
			queryString+=i+"="+data[i]+"&";
		}
		var cbname="my_func"+Math.random().toString().replace(".","");		
		queryString+="callback="+cbname;
		var scriptElement=$document[0].createElement("script");
		scriptElement.src=url+queryString;
		window[cbname]=function(data){
		   callback(data);
		   $document[0].body.removeChild(scriptElement);
		}
		$document[0].body.appendChild(scriptElement);
	}		
	}]	
	)	
})(angular)

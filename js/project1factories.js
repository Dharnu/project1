(function(){
	var app=angular.module('project1-factories',[]);
	app.factory('communication',function($rootScope){
		var obj={};
		obj.tellgraph=function(id){
			console.log("factory called");
			$rootScope.$broadcast("graph");
		};
		return obj;
	});
})();

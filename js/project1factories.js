(function(){
	var app=angular.module('project1-factories',[]);
	app.factory('communication',function($rootScope){
		var obj={id:0
		};
		obj.tellgraph=function(id){
			this.id=id;
			console.log("factory called::"+this.id);
			$rootScope.$broadcast("graph");
		};
		return obj;
	});
})();

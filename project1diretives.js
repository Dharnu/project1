(function(){
var app=angular.module('project1-directives',[]);

app.directive("emergencyList",function(){
	return{
		restrict:E,
		scope:{},
		templateUrl:"./partials/emergency-list.html",
		require:'^Maincontroller',
		controller:function(){},
		link:function(s,e,a,c){}
	};
	});

app.directive("pageComponents",function(){
	return{
		restrict:E,
		scope:{},
		templateUrl:"./partials/page-components.html",
		require:'^Maincontroller',
		controller:function(){},
		link:function(s,e,a,c){}
	};
	})

	})();

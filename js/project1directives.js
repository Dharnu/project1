(function(){
    var app=angular.module('project1-directives',[]);


app.directive('emergencyList',['communication',function(communication){
	return{
		restrict:'E',
		scope:{},
		templateUrl:"./partials/emergency-list.html",
		require:['emergencyList','^pageComponents'],
		controller:function($rootScope){
			this.alertObjects;
			this.click=function(num){
				//console.log(this.alertObjects[num].id);
				communication.tellgraph(this.alertObjects[num].id);
				};
			},
		controllerAs:'emergencyList',
		link:function(s,e,a,c){
			c[0].alertObjects=s.$parent.$parent.main.emergencyListItems;
			console.log(c[1]);
		}
	}
	}]);

    app.directive("pageComponents",function(){
	return{
		restrict:'E',
		scope:{},
		templateUrl:"./partials/page-components.html",
		controller:function(){},
		link:function(s,e,a,c){
		//	console.log(s.$parent.main);
		}
	}
    });

    app.directive("graph",['communication',function(communication){
	return{
		restrict:'E',
		scope:{},
		require:['graph'],
		templateUrl:"./partials/graph.html",
		controller:function(){
			this.graphs;
			this.displayImage
		},
		controllerAs:"graphImage",
		link:function(s,e,a,c){
		c[0].graphs=s.$parent.$parent.main.graphImages;
		c[0].displayImage=c[0].graphs.id1;
			s.$on("graph",function(){
				console.log("recieved broadcast");
				//console.log(communication.id);
				var id = "id"+communication.id;
				//console.log(c[0].graphs);
				c[0].displayImage=c[0].graphs.id;

			});
		}
	}
    }]);
        
    app.directive('mainView',function(){
        return{
            restrict:'E',
            scope:{},
            templateUrl:"./partials/main-view.html",
            require:['mainView'],
            controller:function(){
                    this.individualValue},
            controllerAs:'mainView',
            link:function(s,e,a,c){
                    c[0].individualValue=s.$parent.$parent.main.mainView;
            }
        }
    });
})();

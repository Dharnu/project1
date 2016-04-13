(function(){
    var app=angular.module('project1-directives',[]);

    app.directive('emergencyList',function(){
	return{
            restrict:'E',
            scope:{},
            templateUrl:"./partials/emergency-list.html",
            require:['emergencyList'],
            controller:function(){
                    this.alertObjects},
            controllerAs:'emergencyList',
            link:function(s,e,a,c){
                    c[0].alertObjects=s.$parent.$parent.main.emergencyListItems;
                    console.log(c[0]);
            }
        }
    });

    app.directive("pageComponents",function(){
	return{
            restrict:'E',
            scope:{},
            templateUrl:"./partials/page-components.html",
            controller:function(){},
            link:function(s,e,a,c){
                    console.log(s.$parent.main);
            }
	}
    });

    app.directive("graph",function(){
	return{
            restrict:'E',
            scope:{},
            templateUrl:"./partials/graph.html",
            controller:function(){},
            link:function(s,e,a,c){}
	}
    });
        
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
                    console.log(c[0]);
            }
        }
    });
})();

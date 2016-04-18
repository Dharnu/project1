(function() {
	var app = angular.module('project1-directives', ['ngAnimate']);


	app.directive('emergencyList', ['communication', '$timeout', '$interval', function(communication, $timeout, $interval) {
		return {
			restrict: 'EA',
			scope: {
				count: "@",
				interval: "@"
			},
			replace: true,
			templateUrl: "./partials/emergency-list.html",
			require: ['emergencyList', '^pageComponents'],
			controller: function($rootScope, $scope) {
				//this.alertObjects=$scope.$parent.$parent.main.emergencyListItems;				
				//this.addElement=function

				this.click = function(num) {
					communication.tellgraph(this.alertObjects[num].id);
				};
				this.addEvent = function() {
					console.log("add event");
					this.alertObjects.unshift({
						id: 10,
						data: $scope.createEvent
					});
				};
			},
			controllerAs: 'emergencyList',
			link: function(s, e, a, c) {
				console.log(a);
				c[0].alertObjects = s.$parent.$parent.main.emergencyListItems;
				console.log(c[0].alertObjects);
				c[0].addElementForDemo = (function() {
					var copiedIndex = 0;
					return function() {
						c[0].alertObjects.unshift(c[0].alertObjects[c[0].alertObjects.length - 1 - copiedIndex]);
						copiedIndex++;
						if (c[0].alertObjects.length >= a.count) {
							copiedIndex--;
							c[0].alertObjects.splice(c[0].alertObjects.length - 1, 1);
						}
					}
				})();
				$interval(c[0].addElementForDemo, a.interval);
			}
		}
	}]);

	app.directive("pageComponents", function() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: "./partials/page-components.html",
			controller: function() {},
			link: function(s, e, a, c) {
				//	console.log(s.$parent.main);
			}
		}
	});

	app.directive("graph", ['communication', function(communication) {
		return {
			restrict: 'E',
			scope: {},
			require: ['graph'],
			templateUrl: "./partials/graph.html",
			controller: function() {
				this.graphs;
				this.displayImage
			},
			controllerAs: "graphImage",
			link: function(s, e, a, c) {
				c[0].graphs = s.$parent.$parent.main.graphImages;
				c[0].displayImage = c[0].graphs.id1;
				s.$on("graph", function() {
					//console.log("recieved broadcast");
					//console.log(communication.id);
					var idxx = "id" + communication.id;
					//	console.log(idxx);
					//console.log(c[0].graphs);
					//console.log(c[0].graphs[idxx]);
					if (typeof c[0].graphs[idxx] != "undefined") {
						//console.log( typeof c[0].graphs[idxx]);}
						c[0].displayImage = c[0].graphs[idxx];
					} else {
						console.log("undefined");
						c[0].displayImage = "undefined";
					}

				});
			}
		}
	}]);

	app.directive('mainView', ['communication', function(communication) {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: "./partials/main-view.html",
			require: ['mainView'],
			controller: function() {
				this.individualValue;
				this.click = function(num) {
					//console.log("mainview click");
					communication.tellgraph(this.individualValue[num].id);
				};
			},
			controllerAs: 'mainView',
			link: function(s, e, a, c) {
				c[0].individualValue = s.$parent.$parent.main.mainView;
			}
		}
	}]);
        app.directive("callCenter", function() {
                    return {
                            restrict: 'E',
                            scope: {},
                            templateUrl: "./partials/call-center.html",
                            controller: function() {},
                            link: function(s, e, a, c) {
                                    //	console.log(s.$parent.main);
                            }
                    }
            });
            app.directive("touchPoint", function() {
                    return {
                            restrict: 'E',
                            scope: {},
                            templateUrl: "./partials/touch-point.html",
                            controller: function() {},
                            link: function(s, e, a, c) {
                                    //	console.log(s.$parent.main);
                            }
                    }
            });


})();
(function() {
	var app = angular.module('project1-directives', ['ngAnimate']);

	app.filter('stopdisplay', [function() {
		return function(alerts) {
			var toDisplayAlerts = [];
			//	console.log(alerts);
			for (i = 0; i < alerts.length; i++) {
				//	console.log(alerts[i].displayed);
				if (alerts[i].displayed)
					toDisplayAlerts.push(alerts[i]);
			};
			return toDisplayAlerts;
		}
	}]);
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
				this.interval = $interval;
				this.click = function(num) {
					communication.tellgraph(this.alertObjects[num].id);
				};
				this.addEvent = function() {
					console.log("add event");
					this.alertObjects.unshift({
						id: 100,
						data: $scope.createEvent,
						displayed:true

					});
				};
			},
			controllerAs: 'emergencyList',
			link: function(s, e, a, c) {
				console.log(a);
				c[0].alertObjects = s.$parent.$parent.main.emergencyListItems;
				for (i = 0; i < c[0].alertObjects.length; i++) {
					//console.log(c[0].alertObjects[i]);
					c[0].alertObjects[i]["displayed"] = true;
					//	c[0].alertObjects[i]["uniqueId"]=new Date().getTime();

				};
				console.log(c[0].alertObjects);
				c[0].addElementForDemo = (function() {
					var copiedIndex = 0;
					var objectsToSpliceFromBottom = 1;
					var prevcopyindex =copiedIndex;
					return function(paused) {
						console.log(objectsToSpliceFromBottom);
						console.log(copiedIndex);
						console.log(c[0].alertObjects.length);
						if (objectsToSpliceFromBottom > 1 && !paused) {
							for (i = 0; i < objectsToSpliceFromBottom; i++) {
								c[0].alertObjects[i]["displayed"] = !paused;
								console.log("!came");
							}
						};
						if (!paused) {
							if(copiedIndex<0){copiedIndex=prevcopyindex};
							//console.log("came");
							c[0].alertObjects[c[0].alertObjects.length - objectsToSpliceFromBottom - copiedIndex]["displayed"] = !paused;
							// c[0].alertObjects.unshift(
							// 	{
							// 		id:c[0].alertObjects[c[0].alertObjects.length - 1 - copiedIndex].id,
							// 		data:c[0].alertObjects[c[0].alertObjects.length - 1 - copiedIndex].data
							// 	}
							// 	);
							//hack against deep copying since it was notupdating the scrollview
							//very nice :: http://animate.javascript.codesolution.site/520463-3633-animate-animate-wrong-using-track-index-repeat.html
							c[0].alertObjects.unshift(angular.copy(c[0].alertObjects[c[0].alertObjects.length - objectsToSpliceFromBottom - copiedIndex]));
						copiedIndex++;
						prevcopyindex=copiedIndex;
						}
						if (paused) {
							c[0].alertObjects[c[0].alertObjects.length - 1 - copiedIndex]["displayed"] =paused;
							c[0].alertObjects.unshift(angular.copy(c[0].alertObjects[c[0].alertObjects.length - objectsToSpliceFromBottom - copiedIndex]));
							
							c[0].alertObjects[0]["displayed"] = false;
							console.log(c[0].alertObjects);
							console.log(c[0].alertObjects[0].id);
						//copiedIndex++;
						}
						//copiedIndex++;
						if (c[0].alertObjects.length >= a.count) {
							copiedIndex--;
							if (!paused) {
									//copiedIndex--;
								//c[0].alertObjects.splice(c[0].alertObjects.length - 1, 1);
								c[0].alertObjects = c[0].alertObjects.slice(0, c[0].alertObjects.length - objectsToSpliceFromBottom);
								objectsToSpliceFromBottom = 1;
							} if(paused) {copiedIndex++;
								objectsToSpliceFromBottom++;
								console.log("came");
							}
						}
					}
				})();
				c[0].pauseScrollForDemo = function(pause) {
					if (pause) {
						//console.log(c[0].alertObjects);
						$interval.cancel(c[0].timer);
						c[0].timer = c[0].interval(function() {
							c[0].addElementForDemo(true)
						}, a.interval);
					} else {
						$interval.cancel(c[0].timer);
						c[0].timer = c[0].interval(function() {
							c[0].addElementForDemo(false)
						}, a.interval);
					}

				};
				c[0].timer = c[0].interval(function() {
					c[0].addElementForDemo(false)
				}, a.interval);
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

	app.directive('mainView', ['communication', function(communication, $scope) {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: "./partials/main-view.html",
			require: ['mainView'],
			controller: function($scope) {
				this.individualValue;
                                this.selecterRow = null;
				this.click = function(num) {
					//console.log("mainview click");
					communication.tellgraph(this.individualValue[num].id);
                                        this.selecterRow = num;
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
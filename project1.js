(function(){
	var app=angular.module('project1',['project1-directives']);
	app.controller('Maincontroller',function(){
		this.emergencyListItems=[{
			id:1, data:"data1"
		},{
			id:2, data:"data2"
		},{
			id:3, data:"data3"
		},{
			id:4, data:"data4"
		}];


	});
})();
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
            this.mainView=[{
                id:1, data:{"Patient":"Jane","Office":"Lafayette","Phone":"555-555-5555","POC":"Employee 3","LastActivity":"10:00 AM"}
		},{
                id:2, data:{"Patient":"John","Office":"Columbus","Phone":"555-555-5500","POC":"Employee 1","LastActivity":"10:00 AM"}
		},{
                id:3, data:{"Patient":"Emma","Office":"Lafayette","Phone":"555-555-5552","POC":"Employee 3","LastActivity":"8:00 AM"}
		},{
                id:4, data:{"Patient":"Ed","Office":"Lafayette","Phone":"555-555-5533","POC":"Employee 3","LastActivity":"No Activity"}
            }];
            this.graphImage=[{
                id:1, image:"images/chart1.png"
                },{
                id:2, image:"images/chart2.png"
                },{
                id:3, image:"images/chart3.png"
                },{
                id:4, image:"images/chart4.jpg"
            }];
	});
})();
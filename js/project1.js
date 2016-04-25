(function(){
	var app=angular.module('project1',['project1-directives','project1-factories']);
	app.controller('Maincontroller',function(){
            this.emergencyListItems=[{
                id:1, data:"Emergency from Diane Smith", status:"Active"
                },{
                id:2, data:"Emergency from Edith Ludwig", status:"45 Minutes ago"
                },{
                id:3, data:"Emergency from Joanne Poke", status:"8 Hours ago"
                },{
                id:4, data:"Emergency from Edith Ludwig", status:"1 Day ago"
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
            this.graphImages={
                
                id1:["images/chart11.jpeg", "images/chart12.jpeg", "images/chart13.jpeg"],
               
                id2:["images/chart21.jpeg", "images/chart22.jpeg", "images/chart23.jpeg"],
                
                id3:["images/chart31.jpeg", "images/chart32.jpeg", "images/chart33.jpeg"],
                
                id4:["images/chart41.jpeg", "images/chart42.jpeg", "images/chart43.jpeg"],
            };
	});
})();
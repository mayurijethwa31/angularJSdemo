var app = angular.module("myApp" , []);
app.controller("myCtrl", function(constService,valueservice,myfactory){
console.log(constService);   
console.log(valueservice);   
console.log(myfactory);   

});
app.controller("myCtrl2", function(valueservice,myfactory){
console.log(valueservice);   
console.log(myfactory);   

});


app.constant('constService',{attr:"this is data"});
app.value('valueservice',function() {return "this is data"}); 
app.factory('myfactory',function(){
    return "string value"
});
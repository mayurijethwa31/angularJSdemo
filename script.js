var app= angular.module("myModule",[]);
app.controller("myCtrl",function($scope){
    $scope.msg = "hello";
    $scope.myFunc = function(){
        console.log("hello");
        
    }
    $scope.myArr = [1,2,3,4,5,5];
    $scope.myVar = true;
    $scope.employeesObj = [
                         {firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000},
                         {firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000},
                         {firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000},
                         {firstName: "Pam", lastName: "Mackintosh", gender: "Male", salary: 53000},
                         {firstName: "Todd", lastName: "Barber", gender: "Female", salary: 60000},

                      ];
    
   
});

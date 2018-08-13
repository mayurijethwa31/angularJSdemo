var app = angular.module("myApp" , []);
app.controller("myCtrl", function($scope){
    
    $scope.myVar=true;
    /*console.log($scope);
    $scope.firstname="mayuri";
    $scope.classVar= true;
    $scope.obj = {
        name:'john',
        address:'345 kharadi'
    }
    //$scope.todaysDate = Jun 10 2018;
     $scope.today = new Date();
    console.log($scope.today);
    var myarr = [1,2,3,4,5];
    var employeesObj = [
                         {firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000},
                         {firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000},
                         {firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000},
                         {firstName: "Pam", lastName: "Mackintosh", gender: "Male", salary: 53000},
                         {firstName: "Todd", lastName: "Barber", gender: "Female", salary: 60000},

                      ];
    console.log(employeesObj);
    $scope.employees = employeesObj;
*/});

/*var app = angular.module("myApp" , []);
var myController = controller("myCtrl", function($scope){
    
    $scope.firstname="mayuri";
    
}); 
app.myController();*/

/*var app = angular
            .module("myApp" , [])
            .controller("myCtrl", function($scope){
    
    $scope.firstname="mayuri";
    
});*/


app.controller("myctrl2" , ['$scope',function($scope){
    $scope.msg = "hello world";
    
}]);
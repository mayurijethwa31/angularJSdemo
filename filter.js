var app = angular.module('myModule',[]);
            app.controller('myCtrl', function($scope){
             $scope.employeesObj = [
                         {firstName: "Annie", lastName: "Hastings", gender: "Male", salary: 55000,dateOfBirth: new Date("October 12, 1990")},
                         {firstName: "Sana", lastName: "Paul", gender: "Female", salary: 68000, dateOfBirth: new Date("October 12, 1990")},
                         {firstName: "Marie", lastName: "Holland", gender: "Male", salary: 57000, dateOfBirth: new Date("November 12, 1996")},
                         {firstName: "John", lastName: "Mackintosh", gender: "Male", salary: 53000, dateOfBirth: new Date("January 12, 1991")},
                         {firstName: "Zen", lastName: "Barber", gender: "Female", salary: 60000, dateOfBirth: new Date("April 12, 1992")}

                      ];   
            })
/// <reference path="angular.js" />

var app = angular.module('gridApp', ['ui.grid','ui.grid.pagination','ui.grid.moveColumns']);

app.controller('testController', function ($scope, $http) {

    $scope.empList = [];

    $http.get('http://localhost:2212/api/EmployeeApi').then(function (output) {
        $scope.empList = output.data;
    });

    $scope.employeeGrid = {
        data: 'empList',
        paginationPageSizes: [3, 5, 8, 10, 15, 25],
        paginationPageSize:3,
        enableFiltering:true,
        columnDefs: [
            { name: 'Id', displayName: 'Employee ID', enableSorting: false,enableFiltering:false },
            { name: 'Name', displayName: 'Employee Name', enableSorting: false },
            { name: 'Salary', displayName: 'Employee Salary', enableSorting: true },
            { name: 'Location', displayName: 'Employee Location', enableSorting: true },
            {
                field: 'Id', displayName: 'Action(s)', enableFiltering: false,
                cellTemplate: '<button ng-click="grid.appScope.editEmployee(row.entity)">Edit</button>'+
                    '<button ng-click="grid.appScope.deleteEmployee(row.entity.Id)">Delete</button>'
            }
        ]
    };

    $scope.deleteEmployee = function (id) {
        alert("Write the Code to Delete Employee with ID : " + id);
    };

    $scope.editEmployee = function (emp) {
        alert(JSON.stringify(emp));
    };
});
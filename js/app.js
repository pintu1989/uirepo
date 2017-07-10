var app= angular.module("myApp", ['angularUtils.directives.dirPagination']);

app.controller('planetController', ['$scope', '$http','$filter', function ($scope, $http, $filter) {
    $scope.orderByField = '';
    $scope.reverseSort = false;
    $scope.recordPerPage = 10;
    $scope.numberOfItemsPerPage = [10, 20, 30, 50, 100];
    $http.get("http://jsonplaceholder.typicode.com/posts").then(function (response) {
        $scope.names = response.data;
    });
}]);

var controllers = angular.module("controllers", []);
controllers.controller('planetController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
    $scope.orderByField = '';
    $scope.reverseSort = false;
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.q = '';
    $http.get("http://jsonplaceholder.typicode.com/posts").then(function (response) {
        $scope.names = response.data;
        $scope.totalData = $scope.names.length;
        $scope.numberOfPages = Math.ceil($scope.totalData/$scope.pageSize);
    });
}]);
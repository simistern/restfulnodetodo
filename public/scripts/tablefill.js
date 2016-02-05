var app = angular.module("todolist", []);

app.controller("controller", ["$scope", "$http", function($scope, $http){
  //$scope.title = "My todo list";
  //$scope.smalllist = "Hello";
  $scope.items = []
  $scope.twitterers = [];

  $http({
    "method": "GET",
    "url": "/job"
  }).then(function(res) {
    $scope.items = res.data;
  })

  $scope.todoInput  = "";
  $scope.addTodo = function(){

    $http({
      "method": "POST",
      "url": "/job",
      "data": {
        "company": $scope.inputCompany,
        "tweet": $scope.inputTweet
      }
    }).then(function(res) {
      $scope.items.push({
        "company": $scope.inputCompany,
        "tweet": $scope.inputTweet
      });
      $scope.inputCompany = "";
      $scope.inputTweet = "";
    })
  }
}])

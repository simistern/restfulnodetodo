var app = angular.module("todolist", []);

app.controller("controller", ["$scope", "$http", function($scope, $http){
  $scope.title = "My todo list";
  $scope.smalllist = "Hello";
  $scope.items = [
    "Pork chops",
    "muffins",
    "beer"
  ]

  $http({
    "method": "GET",
    "url": "./dataset/tabledata.json"
  }).then(function(res) {
    console.log(res);
    res.data.map(function(item) {
      $scope.items.push(item.text);
    })
  })

  $scope.todoInput  = "";
  $scope.addTodo = function(){
    $scope.items.push(
      $scope.todoInput
    );
    $scope.todoInput = "";
  }

}])

/*$(document).ready(function(){
  $.get("./dataset/tabledata.json", function(result) {
    console.log(result);
  });
});*/



/*
console.log(window.jQuery);
$.getJSON("package.json", function(json) {
  console.log(json);
});
alert(window.jQuery);
  $("#container").hide();
  console.log(testdata.id_str);
//  alert(testdata.stringify);
*/

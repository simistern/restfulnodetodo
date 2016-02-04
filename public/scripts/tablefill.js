



  var testdata = {
    "id_str" : "20",
    "text" : "just setting up my twttr",
    "source" : "web",
    "Date" : "1998-12-2124",
  };

  var app = angular.module("todolist", []);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', './dataset/tabledata.json');
  xhr.send(null);
  xhr.onreadystatechange = function () {
    console.log("testing internal xhr request");
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK){
        console.log("Response text" + xhr.responseText); // 'This is the returned text.'
      } else {
        console.log('Error: ' + xhr.status); // An error occurred during the request.
      }
    }
  };

  var app = angular.module("todolist", []);

  app.controller("controller", ["$scope", function($scope){
    $scope.title = "My todo list";
    $scope.smalllist = "Hello";
    $scope.items = [
      "Pork chops",
      "muffins",
      "beer"
    ]

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

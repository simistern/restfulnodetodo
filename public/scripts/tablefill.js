var app = angular.module("todolist", []);



r.table('tweetlist').insert([
    { name: "William Adama", tv_show: "Battlestar Galactica",
      posts: [
        {title: "Decommissioning speech", content: "The Cylon War is long over..."},
        {title: "We are at war", content: "Moments ago, this ship received word..."},
        {title: "The new Earth", content: "The discoveries of the past few days..."}
      ]
    },
    { name: "Laura Roslin", tv_show: "Battlestar Galactica",
      posts: [
        {title: "The oath of office", content: "I, Laura Roslin, ..."},
        {title: "They look like us", content: "The Cylons have the ability..."}
      ]
    },
    { name: "Jean-Luc Picard", tv_show: "Star Trek TNG",
      posts: [
        {title: "Civil rights", content: "There are some words I've known since..."}
      ]
    }
]).run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
})







app.controller("controller", ["$scope", "$http", function($scope, $http){
  $scope.title = "My todo list";
  //$scope.smalllist = "Hello";
  $scope.items = [
    "Pork chops",
    "muffins",
    "beer"
  ]
  $scope.twitterers = [];

  $http({
    "method": "GET",
    "url": "./dataset/tabledata.json"
  }).then(function(res) {
    //console.log("Here is the response data " + JSON.stringify(res.data));
    $scope.tweetfields = res.data;
    /*res.data.map(function(tweetfields) {
    $scope.twitterers.push(tweetfields.created_at);
    })*/
    res.data.map(function(item) {
      $scope.items.push(item.created_at);
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

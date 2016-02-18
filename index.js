var app = angular.module('scott', []);
app.controller('control', function($scope){
  $scope.showForm = false;
  $scope.posts = [];
  $scope.submitPost = function(){
    var post = {};
    post.title = $scope.title;
    post.author = $scope.author;
    post.url = $scope.url;
    post.description = $scope.description;
    $scope.posts.push(post);
  }
})

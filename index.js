var app = angular.module('scott', []);
app.controller('control', function($scope){
  $scope.showForm = false;
  $scope.posts = [];
  $scope.submitPost = function(){
    var post = {};
    post.date = Date.now()
    post.upvote = 0
    post.title = $scope.title;
    post.author = $scope.author;
    post.url = $scope.url;
    post.description = $scope.description;
    $scope.posts.push(post);
    $scope.title = null;
    $scope.author = null;
    $scope.url = null;
    $scope.description = null;
  }

})

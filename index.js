//'[ngAnimate]'

var app = angular.module('scott', []);
app.controller('control', function($scope){
  $scope.showForm = false;
  $scope.posts = [];

  $scope.toggleComments = function(post) {
    post.showCommentForm = !post.showCommentForm
  }
  $scope.newComment = function(post) {
    post.showComments = !post.showComments;
  }

  $scope.submitPost = function(){
    var post = {};
    post.comments = []
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
    post.showCommentForm = false;
    post.showComments = false;

  }
  $scope.toggle = function(){
    $scope.showForm = !$scope.showForm
  }
  $scope.addComment = function(post, comment){
    // post.comments.comment = $scope.comment;
    post.comments.push(comment)
  }
})

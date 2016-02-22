

var app = angular.module('scott', ['ngAnimate']);
app.controller('control', function($scope){
  $scope.showForm = false;
  $scope.posts = [];
  $scope.color;

  $scope.toggleComments = function(post) {
    post.showCommentForm = !post.showCommentForm
  }
  $scope.newComment = function(post) {
    post.showComments = !post.showComments;
  }

  $scope.submitPost = function(){
    var post = {};
    post.comments = []
    post.date = moment().calendar();
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
  $scope.addComment = function(post, word, name){
    var comment = {};
    comment.name = name;
    comment.word = word;
    post.comments.push(comment)
    console.log('hitting');

  }

  $scope.addVote = function(post){
    post.upvote = post.upvote + 1;
  }
  $scope.subtractVote = function(post){
    post.upvote = post.upvote - 1;
  }
  $scope.changeColor = function(post) {
    if (post.upvote > 0) {
      return 'upvote'
    } else if (post.upvote < 0 ){
      return 'neg-points';
    } else {
      return  'zero'
    }
  }
  $scope.sorter = function(post){
    var value =  document.getElementById('sorts').value
    if (value === 'upvote' || value === 'title' || value === 'date'){
      return 'sorts'
    } else {
      return '-upvote'
    }

  }
})

var app = angular.module('scott', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: 'views/poster.html',
      controller: 'control'
  })
})

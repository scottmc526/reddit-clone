app.factory('redditService', function ($http) {
  return {
    all: function() {
      return $http.get('/posts').then(function (response) {
        return response.data;
      })
    }
  }
})

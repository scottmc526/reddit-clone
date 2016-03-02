app.factory('piratesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates').then(function (response) {
        return response.data;
      })
    }
  }
})

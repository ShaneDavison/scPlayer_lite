var scControllers = angular.module('scControllers', []);

  
scControllers.controller('sclistCtrl', ['$scope', '$http',
  function ($scope, $http) {
SC.initialize({
  client_id: 'f911752b0d31492eca3ea086fbc9e8fd',
  redirect_uri: 'http://localhost/'
});

// initiate auth popup
SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
});
		console.log ("hey!");

/* 
		SC.connect()
			.then(function() {
		  		return SC.get('/me');
			})
			.then(function(me) {
		  		alert('Hello, ' + me.username);
			});
*/
/*
		SC.get('/resolve', {
			url: 'https://soundcloud.com/shane-davoo'
		}, function(user) {
			console.log(user.id);
		});
*/

		SC.get("/tracks", { user_id: 4268267, limit: 100 })
			.then(function(tracks){
		  		$scope.tracks = tracks;
		  		$scope.$apply();
			});


  }]);;



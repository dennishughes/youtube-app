(function () {

	angular.module('youtubeApp', [])
	.controller('MainController', ['$scope', '$http', MainController]);

	function MainController ($scope, $http) {
		$scope.developer = "Dennis Hughes";
	}
	
})();
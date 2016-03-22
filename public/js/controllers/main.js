angular.module('recordController', [])

	// inject the Record service factory into our controller
	.controller('mainController', ['$scope','$http','Records', function($scope, $http, Records) {
		$scope.formData = {};
		$scope.loading = true;

		//get all records
		Records.get()
			.success(function(data) {
				$scope.records = data;
				$scope.loading = false;
			});
			//create record
		$scope.createRecord = function() {

			// validate the formData
			//if ($scope.formData.artist != undefined) { //opens validation code
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Records.create($scope.formData)
				//deprecated, change to .then
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form
						$scope.records = data;
					});
			//} //closes validation code
		};

		// delete record
		$scope.deleteRecord = function(id) {
			$scope.loading = true;
			Records.delete(id)
			//deprecated, change to .then
				.success(function(data) {
					$scope.loading = false;
					$scope.records = data;
				});
		};
	}]);

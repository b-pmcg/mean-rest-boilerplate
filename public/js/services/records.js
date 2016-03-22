angular.module('recordService', [])
	//each function returns a promise object
	.factory('Records', ['$http', function($http) {
		return {
			get : function() {
				return $http.get('/api/records/');
			},
			create : function(recordData) {
				return $http.post('/api/records/', recordData);
			},
			delete : function(id) {
				return $http.delete('/api/records/' + id);
			}
		}
	}]);

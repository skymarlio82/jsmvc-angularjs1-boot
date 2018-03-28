'use strict';

angular.module('jsmvcAngularjs1SpaApp').controller('EventListHomeController', [
	'$http',
	function ($http) {
		var self = this;
		$http.get('api/events').then(function (resp) {
			self.events = resp.data;
		});
		self.closeEvent = function (event) {
			var id = self.event.id;
			self.event.status = 'Closed';
			$http.put('api/events/' + id, self.event).then(function () {
				$state.go('index');
			});
		}
	}
]);

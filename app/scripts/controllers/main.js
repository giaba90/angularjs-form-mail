'use strict';

/* Controllers */

angular.module('angularjsFormMailApp.controllers', [])
  .controller('MyCtrl', ['$scope','$http', function($scope,$http) {

  	$scope.submit = function(){
  	$http({
            method: 'POST',
            url: "mail.php",
            data: {
                'email':$scope.form.mail,
                'subject':$scope.form.subject,
                'message':$scope.form.msg
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  	}).success(function(data, status, headers, config) {
			$scope.status = status; /* for debug mode*/
			$scope.data = data;
		}).error(function(data, status, headers, config) {
  		$scope.status = status; /* for debug mode*/
			$scope.data = data || "Request failed";
		});
  	};

  }]);

var angularDatePicker = angular.module('angularDatePicker', ['ui.bootstrap']);

angularDatePicker.controller("CtrlDatePicker",
	function ($scope) {
		
		$scope.fechaActual = "10-08-2016";
		$scope.listaPrueba = [
		{nombre:"Ariel", fecha:"20-10-2016", edad:"28"}
		];
		

		 $scope.clear = function() {
    $scope.dt = null;
	  };

	  $scope.options = {
	    customClass: getDayClass,
	    minDate: new Date(),
	    showWeeks: true
	  };
		
	});
      	
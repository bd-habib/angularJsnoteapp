var myapp = angular.module("myapp",[]);
myapp.controller("mycontroller", function($scope){
	$scope.events = [
	{name : "Conference" , date : "17/03/2016"},
	{name : "Seminar" , date : "18/03/2016"}
	];
	$scope.addvalue = function(){
		if(!$scope.event.name || $scope.event.name == '' && !$scope.event.date || $scope.event.date == ''){
		    return;
            $scope.msg = "Please, fill the requirement";			
		}
		$scope.events.push({
			name : $scope.event.name,
			date : $scope.event.date
		});
		$scope.event.name = "";
		$scope.event.date = "";
	};
	$scope.updateitem = function(x) {
		$scope.events.splice(x, 1);
	};
	$scope.clearvalue = function(){
		$scope.event.name = '';		
		$scope.event.date = '';		
	};
});
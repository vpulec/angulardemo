var app = angular.module("myApp",[]);
app.controller ("FirstCtrl",[
  "$scope",
  function FirstCtrl (scope){
     scope.firstName = "Enter Name";
  }
]);

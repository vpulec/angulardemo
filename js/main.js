var app = angular.module("myapp",[]);
app.controller ("FirstCtrl",[
  "$scope"
  function FirstCtrl (scope){
     scope.firstName = "name";
  }
]);

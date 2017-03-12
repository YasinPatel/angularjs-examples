app.controller("myCtrl",function($scope){

  $scope.first="yasin";
  $scope.last="patel";


  $scope.fullname=function()
  {
    return $scope.first + " " + $scope.last;
  });
}

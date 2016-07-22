angular.module('alurapic').controller('FotoController', function($scope, $http) {
  
  $scope.foto = {};
  $scope.menssagem = '';

  $scope.submeter = function() {
    if ($scope.formulario.$valid) {
      $http.post('v1/fotos', $scope.foto)
      .success(function() {
        $scope.menssagem = "Foto incluída!";
        console.log("Foto incluída!");
        $scope.foto = {};      
      })
      .error(function(err) {
        $scope.menssagem = "Erros encontrados";
        console.log(err);
      });
    }
  };
});
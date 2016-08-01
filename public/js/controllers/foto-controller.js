angular.module('alurapic')
.controller('FotoController', function($scope, $routeParams, fotosService) {
  
  $scope.foto = {};
  $scope.mensagem = '';

  if($routeParams.id) {
    fotosService.getFoto($routeParams.id)
    .then(function(dados) {
      $scope.foto = dados.foto;
      $scope.mensagem = dados.mensagem;
    })
    .catch(function(dados) {
      $scope.mensagem = dados.mensagem;
    });
  }

  $scope.submeter = function() {
    if ($scope.formulario.$valid) {
      fotosService.cadastrar($scope.foto)
      .then(function(dados) {
        $scope.mensagem = dados.mensagem;

        if (dados.inclusao) $scope.foto = {};
      })
      .catch(function(dados) {
        $scope.mensagem = dados.mensagem;
      });
    }
  };
});
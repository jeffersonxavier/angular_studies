angular.module('alurapic')
.controller('FotosController', function($scope, fotosService) {

  $scope.fotos = [];
  $scope.filtro = '';
  $scope.mensagem = '';

  fotosService.getFotos()
  .then(function(fotos) {
    $scope.fotos = fotos;
  });

  $scope.remover = function(foto) {
    fotosService.remover(foto._id).then(function(dados) {
      $scope.mensagem = dados.mensagem;
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
    })
    .catch(function(dados) {
      $scope.mensagem = dados.mensagem;
    });
  };
});

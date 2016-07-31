angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

  $scope.fotos = [];
  $scope.filtro = '';
  $scope.mensagem = '';

  recursoFoto.query(function(fotos) {
    $scope.fotos = fotos;
  }, function(err) {
    console.log(err);
  });

  $scope.remover = function(foto) {
    recursoFoto.delete({id: foto._id}, function() {
      $scope.mensagem = "Foto removida!";
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
    }, function(err) {
      console.log(err);
      $scope.mensagem = "Erro ao remover!";
    });
  };
});

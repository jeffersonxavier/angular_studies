angular.module('alurapic').controller('FotosController', function($scope, $http) {

  $scope.fotos = [];
  $scope.filtro = '';
  $scope.mensagem = '';

  $http.get('v1/fotos').success(function(fotos) {
    $scope.fotos = fotos;
  }).error(function(err) {
    console.log(err);
  });

  $scope.remover = function(foto) {
    $http.delete('v1/fotos/' + foto._id)
    .success(function() {
      $scope.mensagem = "Foto removida!";
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
    })
    .error(function(err) {
      $scope.mensagem = "Erro ao remover!";
      console.log(err);
    });
  };
});

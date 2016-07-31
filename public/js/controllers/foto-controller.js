angular.module('alurapic')
.controller('FotoController', function($scope, $routeParams, recursoFoto, cadastrarFoto) {
  
  $scope.foto = {};
  $scope.mensagem = '';

  if($routeParams.id) {
    console.log('encontrou id.....');
    recursoFoto.get({id: $routeParams.id}, function(foto) {
      $scope.foto = foto;
    }, function(err) {
      console.log(err);
      $scope.mensagem = 'Não foi possível encontrar a foto com o id ' + $routeParams.id;
    });
  }

  $scope.submeter = function() {
    if ($scope.formulario.$valid) {
      cadastrarFoto.cadastrar($scope.foto)
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
angular.module('alurapic')
.controller('FotoController', function($scope, $routeParams, recursoFoto) {
  
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
      if ($scope.foto._id) {
        recursoFoto.update({id: $scope.foto._id}, $scope.foto, function() {
          $scope.mensagem = "Foto alterada!";
        }, function(err) {
          $scope.mensagem = "Erros encontrados";
          console.log(err);
        })
      }
      else {
        recursoFoto.save($scope.foto, function() {
          $scope.mensagem = "Foto incluída!";
          $scope.foto = {};
        }, function(err) {
          $scope.mensagem = "Erros encontrados";
          console.log(err);
        });
      }
    }
  };
});
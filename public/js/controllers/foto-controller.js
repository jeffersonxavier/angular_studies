angular.module('alurapic')
.controller('FotoController', function($scope, $http, $routeParams) {
  
  $scope.foto = {};
  $scope.mensagem = '';

  if($routeParams.id) {
    console.log('encontrou id.....');
    $http.get('v1/fotos/' + $routeParams.id)
    .success(function(foto) {
      $scope.foto = foto;
    })
    .error(function(err) {
      console.log(err);
      $scope.mensagem = 'Não foi possível encontrar a foto com o id ' + $routeParams.id;
    });
  }

  $scope.submeter = function() {
    if ($scope.formulario.$valid) {
      if ($scope.foto._id) {
        $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
        .success(function() {
          $scope.mensagem = "Foto alterada!";
        })
        .error(function(err) {
          $scope.mensagem = "Erros encontrados";
          console.log(err);
        });
      }
      else {
        $http.post('v1/fotos', $scope.foto)
        .success(function() {
          $scope.mensagem = "Foto incluída!";
          $scope.foto = {};
        })
        .error(function(err) {
          $scope.mensagem = "Erros encontrados";
          console.log(err);
        });
      }
    }
  };
});
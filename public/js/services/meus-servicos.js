angular.module('meusServicos', ['ngResource'])

.factory("recursoFoto", function($resource) {
  
  return $resource('v1/fotos/:id', null, {
    update: {
      method: 'PUT'
    }
  });
})

.factory('cadastrarFoto', function(recursoFoto, $q) {
  var servico = {};

  servico.cadastrar = function(foto) {
    return $q(function(resolve, reject) {
      if (foto._id) {
        recursoFoto.update({id: foto._id}, foto, function() {
          resolve({
            mensagem: 'Foto atualizada!',
            inclusao: false,
          });
        }, function(err) {
          console.log(err);
          reject({mensagem: 'Foto não atualizada!'});
        });
      }
      else {
        recursoFoto.save(foto, function() {
          resolve({
            mensagem: 'Foto Cadastrada!',
            inclusao: true,
          });
        }, function(err) {
          console.log(err);
          reject({mensagem: 'Foto não incluída!'});
        });
      }
    });
  };

  return servico;
})

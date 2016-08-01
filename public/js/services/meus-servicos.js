angular.module('meusServicos', ['ngResource'])

.factory("recursoFoto", function($resource) {
  
  return $resource('v1/fotos/:id', null, {
    update: {
      method: 'PUT'
    }
  });
})

.factory('fotosService', function(recursoFoto, $q) {
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

  servico.getFoto = function(id) {
    return $q(function(resolve, reject) {
      recursoFoto.get({id: id}, function(foto) {
        resolve({
          foto: foto,
          mensagem: 'Foto encontrada!',
        });
      }, function(err) {
        console.log(err);
        reject({mensagem: 'Não foi possível encontrar a foto com o id ' + id})
      });
    });
  };

  servico.getFotos = function() {
    return $q(function(resolve, reject) {
      recursoFoto.query(function(fotos) {
        resolve(fotos);
      }, function(err) {
        console.log(err);
        reject();
      });
    });
  };

  servico.remover = function(id) {
    return $q(function(resolve, reject) {
      recursoFoto.delete({id: id}, function() {
        resolve({mensagem: "Foto removida!"});
      }, function(err) {
        console.log(err);
        reject({mensagem: "Erro ao remover!"});
      });
    });
  };

  return servico;
})

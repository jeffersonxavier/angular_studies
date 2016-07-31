angular.module('meusServicos', ['ngResource'])

.factory("recursoFoto", function($resource) {
  
  return $resource('v1/fotos/:id', null, {
    update: {
      method: 'PUT'
    }
  });


});

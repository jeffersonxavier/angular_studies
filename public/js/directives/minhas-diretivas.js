angular.module('minhasDiretivas', [])
  .directive('meuPainel', function () {
    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
      titulo: '@',
    };
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
  })
  .directive('minhaFoto', function () {
    var ddo = {};

    ddo.restrict = "AE";
    ddo.scope = {
      url: '@',
      titulo: '@',
    };
    ddo.templateUrl = 'js/directives/minha-foto.html';

    return ddo;
  })
  .directive('meuBotao', function() {
    var ddo = {};

    ddo.restrict = "E";
    ddo.scope = {
      nome: '@',
      acao: '&',
    };
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;
  });

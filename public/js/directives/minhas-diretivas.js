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
  })
  .directive('meuFocusComWatch', function() {
    return {
      restrict: "A",

      scope: {
        focado: '=',
      },

      link: function(scope, element) {
        scope.$watch('focado', function() {
          if (scope.focado) {
            element[0].focus();
            scope.focado = false;
          }
        });
      },
    };
  })
  .directive('meuFocusComOn', function() {
    return {
      restrict: "A",

      link: function(scope, element) {
        scope.$on('fotoCadastrada', function() {
          element[0].focus();
        });
      },
    };
  })

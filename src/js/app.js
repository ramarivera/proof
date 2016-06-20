angular.module('ProofOfConcept', [
  'ngRoute',
  'mobile-angular-ui',
  'ProofOfConcept.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});
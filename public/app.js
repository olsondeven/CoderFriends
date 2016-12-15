var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($urlProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('login');
  $urlProvider
  .state('home', {
    url: '/home',
    templateUrl: './templates/home.html'
    controller: './mainCtrl'
  })
  .state('login',{
    url: '/login',
    templateUrl: './templates/login.html',
    controller: './mainCtrl'
  })
  .state('profile',{
    url: '/profile',
    templateUrl: './templates/profile.html',
    controller: './mainCtrl'
  });
});//

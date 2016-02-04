'use strict';

/**
 * @ngdoc overview
 * @name internacionalizacionAngularApp
 * @description
 * # internacionalizacionAngularApp
 *
 * Main module of the application.
 */
angular
  .module('internacionalizacionAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $translateProvider) {
    
    $translateProvider.translations('en', {
      TITLE: 'Hello',
      FOO: 'This is a paragraph.',
      BUTTON_LANG_EN: 'english',
      BUTTON_LANG_DE: 'german',
      HEADLINE: 'funcionoooooo english'
    });
    $translateProvider.translations('de', {
      TITLE: 'Hallo',
      FOO: 'Dies ist ein Paragraph.',
      BUTTON_LANG_EN: 'englisch',
      BUTTON_LANG_DE: 'deutsch',
      HEADLINE: 'funcionoooooo german'
    });
    $translateProvider.preferredLanguage('de');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

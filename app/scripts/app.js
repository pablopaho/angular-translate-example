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
      HEADLINE: 'funcionoooooo english',
      DATA_TO_FILTER:  "Your translations might also contain any static ({{staticValue}}) or random ({{randomValue}}) values, which are taken directly from the model.",
      BOILER: "Boilerplate ({{en}})"
    });

    $translateProvider.translations('es', {
      TITLE: 'Hola',
      FOO: 'Esto es parrafo.',
      BUTTON_LANG_EN: 'espanol',
      BUTTON_LANG_DE: 'espanol',
      HEADLINE: 'funcionoooooo espanol',
      DATA_TO_FILTER:  "Your translations might also contain any static ({{staticValue}}) or random ({{randomValue}}) values, which are taken directly from the model.",
      BOILER: "codigo repetido ({{es}})"
    });

    $translateProvider.translations('de', {
      TITLE: 'Hallo',
      FOO: 'Dies ist ein Paragraph.',
      BUTTON_LANG_EN: 'englisch',
      BUTTON_LANG_DE: 'deutsch',
      HEADLINE: 'funcionoooooo german',
      DATA_TO_FILTER:  "Your translations might also contain any static ({{staticValue}}) or random ({{randomValue}}) values, which are taken directly from the model.",
      BOILER: "Boilerplate ({{de}})"
    });
    
    $translateProvider.preferredLanguage('en');

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

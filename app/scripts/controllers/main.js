'use strict';

/**
 * @ngdoc function
 * @name internacionalizacionAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the internacionalizacionAngularApp
 */
angular.module('internacionalizacionAngularApp')
  .controller('MainCtrl', function ($scope, $translate) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 
    $translate('HEADLINE').then(function (headline) {
      $scope.headline = headline;
    });

    $scope.tlData = {
      staticValue : 1000,
      randomValue : Math.floor(Math.random() * 1000)
    };

    $scope.language = {
      es: "spanish",
      en: "english",
      de: "german"
    };

  });

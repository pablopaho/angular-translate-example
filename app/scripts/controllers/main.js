


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

    /*var translations = {
      HEADLINE: 'What an awesome module!',
      PARAGRAPH: 'Srsly!',
      NAMESPACE: {
        PARAGRAPH: 'And it comes with awesome features!'
      }
    };*/
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 
    $translate('HEADLINE').then(function (headline) {
      $scope.headline = headline;
    });

    console.log('$scope.headline', $scope.headline);

  });

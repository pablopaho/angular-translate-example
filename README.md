# internacionalizacion-angular

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Install component

bower install angular-translate --save

## Config component
###1. Add script in your index.html
       <script src="path/to/angular-translate.js"></script>
###2. Inject angular-translate module as a dependency into your app
       var app = angular.module('myApp', ['pascalprecht.translate']);
###3. Config module
      // predetermined language
      $translateProvider.preferredLanguage('en'); 
      //data object to the translation. It is necessarily an object type json
      $translateProvider.translations('es', {
        BOILER: "codigo repetido ({{es}})"
      });
## Using translate in html
###1. Translation by a filter
       <p>{{ 'BOILER' | translate }}</p>
###2. Translation by id with service
       <h2 id="{{headline}}">{{headline}}</h2>
###3. Passing a data object to the translation by the filter
       <p>HTML5 {{'BOILER' | translate: language}}</p>
###4. Passing a data object to the translation by the directive. The best option for me
       <p translate="BOILER" translate-values="{{language}}"></p>

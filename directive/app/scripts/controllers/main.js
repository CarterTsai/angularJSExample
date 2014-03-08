'use strict';

angular.module('directiveApp')
  .controller('MainCtrl', function ($scope) {
     $scope.personInfo = [
              {name:"Browny Lin"},
              {name:"Come On!"},
              {name:"妙卡甜心"},
              {name:"Mr.壞"},
              {name:"Lester"},
              {name:"NBA"},
           ]; 
  })
  .directive('findPeople', ['$animate', function($animate) {
      return {
        restrict: 'E',
        require: ['?ngModel'],
        scope: {
              'info': '=info'
        },
        template: "<div class=\"search-form\">" +
                    "<div class=\"ui icon input\">" +
                    "<input type=\"text\" ng-model='q' placeholder=\"Search...\">" +
                    "<i class=\"search icon\"></i></div>" +
                  "</div>"+
                     "<div class='wrap' ng-repeat='i in info | filter:q'>" +
                     "<i class=\"user big icon\"></i>"+
                    "<div class=\"name\" ng-bind='i.name'>1</div>"+
                  "</div>",    
        controller: function($scope) {
       
        },
        link: function(scope, element, attrs, ctrls) {
          
        }
      }  
    }]);

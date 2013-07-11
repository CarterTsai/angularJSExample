angular.module('MyApp', ['ngResource']);

function ResCtrl($scope, $resource) {
    $scope.Hello = "Hello World!!";
    
   var Article =  $resource('/article/:articleId',{articleId:'@id'}, {
        read:   {method:'GET'   },
        update: {method:'PUT'   },
        delete: {method:'DELETE'},
        create: {method:'POST'  },
   });

   Article.read({articleId:2}, function(u, getRespinseHeaders) {
        console.log(u);
   });

   Article.create({articleId:2}, function(u, getRespinseHeaders) {
        console.log(u);
   });
   
   Article.delete({articleId:2}, function(u, getRespinseHeaders) {
        console.log(u);
   });
   
   Article.update({articleId:2}, function(u, getRespinseHeaders) {
        console.log(u);
   });

}

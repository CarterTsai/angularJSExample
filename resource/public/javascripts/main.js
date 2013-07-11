angular.module('MyApp', ['ngResource']);

function ResCtrl($scope, $resource) {
    $scope.Hello = "Hello World!!";
    
   var Article =  $resource('/article/:articleId',{articleId:'@id'}, {
        read:   {method:'GET'   },
        update: {method:'PUT'   },
        delete: {method:'DELETE'},
        create: {method:'POST'  },
   });

  var x = Article.read({articleId:2}, function(u, getRespinseHeaders) {
        $scope.Hello += u.id;
   });

   Article.create({articleId:2}, function(u, getRespinseHeaders) {
        console.log(u.status);
   });
   
   Article.delete({articleId:2}, function(u, getRespinseHeaders) {
        console.log(u);
   });
   
   Article.update({articleId:2}, function(u, getRespinseHeaders) {
        console.log(u);
   });

}

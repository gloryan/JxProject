app.controller('AppController', function($scope, $location){

    $scope.startSearch = function(){
        $location.path('/');
    };

    $scope.pageClass = function(path){
        return (path == $location.path()) ? 'active' : '';
    };

});
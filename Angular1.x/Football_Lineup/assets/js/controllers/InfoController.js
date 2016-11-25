app.controller('InfoController', function($scope, $routeParams, players){
    $scope.player = players.find($routeParams.id);
});
app.controller('AddController', function($scope, players, $alert){

    var alert = $alert({
        title: 'Success!',
        content: 'The contact was added successfully.',
        type: 'success',
        container: '#alertContainer',
        show: false
    });

    $scope.submit = function(){
        players.set($scope.player);
        $scope.players = null;
        alert.show();
    };
});
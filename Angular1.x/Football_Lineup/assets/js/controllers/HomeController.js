app.controller('HomeController', function($scope, players, $alert){

    $scope.players = players.get();

    $scope.selectedItem = null;

    $scope.modal = {
        title: 'Hello'
    };

    var alert = $alert({
        title: 'Success!',
        content: 'The contact was deleted successfully.',
        type: 'success',
        container: '#alertContainer',
        show: false
    });

    var player_data = {
        labels: ["Sht", "Pas", "Phy", "Def", "Spd", "Dri"],
        datasets: [
            {
                //label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [0, 0, 0, 0, 0, 0]
            }
        ]
    };

    ///*********** Start Chart ***********///

    var capa = $("#capaChart");
    var capaChart = new Chart(capa,{
        type: 'radar',
        data: player_data,
        options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            },
            legend: {
                display: false
            },
            responsive:false,
            maintainAspectRatio: false
        }
    });

    ///*********** End Chart ***********///

    $scope.selectListItem = function (item) {
        $scope.selectedItem = (item === $scope.selectedItem) ? null : item;

        if ($scope.selectedItem) {
          player_data.datasets[0].data = [65, 59, 90, 81, 56, 55];
          capaChart.update();
        }
    };

    $scope.delete = function(index){
        players.destroy(index);
        alert.show();
    };
});
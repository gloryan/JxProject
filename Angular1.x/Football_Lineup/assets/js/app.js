var app = angular.module('footballMgr', ['ngRoute', 'ngSanitize', 'mgcrea.ngStrap']);

/*-----------------------------------
| Routes
------------------------------------*/

app.config(function($routeProvider, $locationProvider){

    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: '/assets/partials/index.html'
    })

    .when('/add-player', {
        controller: 'AddController',
        templateUrl: '/assets/partials/add.html'
    })

    .when('/info/:id', {
        controller: 'InfoController',
        templateUrl: '/assets/partials/info.html'
    })

    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});

/*-----------------------------------
| Truncate Filter
------------------------------------*/

app.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
    };
});

/*-----------------------------------
| New Line Filter
------------------------------------*/

app.filter('paragraph', function(){
    return function(input){
        return input.replace(/\n/g, '<br />');
    };
});
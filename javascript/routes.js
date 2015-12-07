(function () {
angular.module("NammaThottam")
    .config(function($routeProvider){
        $routeProvider.when('/Home',{
            templateUrl:'../Templates/Home.html'
        })
        .when('/Fruits',{
            templateUrl:'../Templates/Fruits.html'
        })
        .when('/Vegetables',{
            templateUrl:'../Templates/Vegetables.html'
        })
        .when('/Contact_Us',{
            templateUrl:'../Templates/Contact_us.html'
        })
        .otherwise({
            redirectTo:'/Home'
        });
    });
})();

angular.module('colegio', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/main/main.html",
                controller: "main"
            })
            .when("/cursos", {
                templateUrl: "app/cursos/cursos.html",
                controller: "cursos"
            })
            .when("/servicios", {
                templateUrl: "app/servicios/servicios.html",
                controller: "servicios"
            })
            .when("/comunidad", {
            templateUrl: "app/comunidad/comunidad.html",
            controller: "comunidad"
        })
            .otherwise({
                redirect: "/"
            })

    })

    .run(function () {
        console.log('Aplicación para el cole')
    });
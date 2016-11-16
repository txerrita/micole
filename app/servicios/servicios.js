angular.module('colegio')

    .controller('servicios', function ($scope, dataservice) {
        console.log('servicios');

    //Start declaration
        $scope.servicios = ["Comedor","Transporte escolar","Bibliobús"];

    //End declarations

        dataservice.saludar();

        
    });
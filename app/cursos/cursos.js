angular.module('colegio')

    .controller('cursos', function ($scope, dataservice) {
        console.log('cursos');

    //Start declaration
        $scope.cursos = ["1º infantil","2º infantil","3º infantil","1º EPO","2º EPO","3º EPO","4º EPO","5º EPO","6º EPO"];

    //End declarations

    dataservice.saludar();

        $scope.generarimagen = function(imageindex){
            return "images/pic0"+imageindex+".jpg"
        };
        
    });
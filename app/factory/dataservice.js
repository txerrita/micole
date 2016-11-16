angular.module('colegio')
    .factory('dataservice', function(){
        var service = {};
            
        service.saludar = function (){
            console.log('hola')
            
        };
        
        return service
    });
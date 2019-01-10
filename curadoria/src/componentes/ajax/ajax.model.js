(function(){
    "use strict";

    angular.module("curadoria.componentes.ajax-model").factory("AjaxModel", function($http){

        // Como usar:
        // VDAjax.get(url, parametros);

        function get(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: "GET",
                url: url,
                params: params
            });
            return promise;
        }

        function post(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: "POST",
                url: url,
                data: params
            });
            return promise;
        }

        return {
            post: post,
            get: get
        };
    });
})();
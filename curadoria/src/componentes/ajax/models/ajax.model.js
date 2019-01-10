(function(){
    'use strict';

    angular.module("curadoria.componentes.ajax-model").factory("AjaxModel", function($http){

        function _createFormData(params){
          var form_data = new FormData();
            for (var item in params){
                if (params.hasOwnProperty(item)){
                    form_data.append(item, JSON.stringify(params[item]));
                }
            }
            return form_data;
        }

        function _createRequestConfig(method, url, data, headers){
            if (!headers){
                headers = {};
            }
            return {
                method: method,
                url: url,
                data: data,
                headers: headers
            };
        }

        function _delete(url, params){
            if (!params){
                params = {};
            }

            var promise = $http({
                method: 'DELETE',
                url: url,
                params: params
            });
            return promise;
        }

        function get(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: 'GET',
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
                method: 'POST',
                url: url,
                data: params
            });
            return promise;
        }

        function put(url, params, options){
            var method = 'PUT';
            var request_config, headers, data;
            if (!options){
                options = {};
            }
            if(!params){
                params = {};
            }

            if (options.as_form_data){
                headers = {
                  'Content-Type': undefined
                };
                data = _createFormData(params);
                request_config = _createRequestConfig(method, url, data, headers);
                request_config.transform_request = angular.identity;
            }else{
                request_config = _createRequestConfig(method, url, params);
            }
            return $http(request_config);
        }

        return {
            put: put,
            post: post,
            delete: _delete,
            get: get
        };
    });
})();
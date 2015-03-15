'use strict';

angular.module('recipeBookApp')
  .factory('Recipes',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
    return {
      getAll:function(){
        return $http.get('https://api.parse.com/1/classes/Recipes',{
          headers:{
            'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
            'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
          }
        });
      },
      get:function(id){
        return $http.get('https://api.parse.com/1/classes/Recipes/'+id,{
          headers:{
            'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
            'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
          }
        });
      },
      create:function(data){
        return $http.post('https://api.parse.com/1/classes/Recipes',data,{
          headers:{
            'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
            'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        });
      },
      edit:function(id,data){
        return $http.put('https://api.parse.com/1/classes/Recipes/'+id,data,{
          headers:{
            'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
            'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        });
      },
      delete:function(id){
        return $http.delete('https://api.parse.com/1/classes/Recipes/'+id,{
          headers:{
            'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
            'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        });
      }
    }
  }])
  .value('PARSE_CREDENTIALS',{
    APP_ID: '8bqU89YXrJOZ4PlXUvljrrAjgrkasdtjc9VbXoMx',
    REST_API_KEY:'Cija6IJqPisV341IDEKHmhoX3M81cAArvEO40yRx'
  })
;

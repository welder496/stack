var rest = require('restler');
var host = 'localhost';
var port = '12345';

module.exports = {

      newStack: function(callback){
        rest.post('http://'+host+":"+port+'/notas/stack/new')
         .on('success', function(data,response){
             callback(data);
         })
         .on('error', function(err, response){
             callback({message:"Erro ao criar pilha!!"});
         });
      },

      push: function(value, callback){
         if (value != ""){
                 value = encodeURIComponent(value);
                 rest.put('http://'+host+":"+port+'/notas/stack/push/'+value)
                 .on('success', function(data,response){
                          callback(data);
                 })
                 .on('error', function(err, response){
                          callback({message: "Falha ao empilhar valor!!"});
                 })
         } else {
                 callback({message: "Erro ao empilhar valor!!"});
         }
      },

      pop: function(callback){
        rest.get('http://'+host+":"+port+'/notas/stack/pop')
         .on('success', function(data,response){
             callback(data);
         })
         .on('error', function(err, response){
             callback({message:"Erro ao desempilhar valor!!"});
         });
      },

      clear: function(callback){
        rest.put('http://'+host+":"+port+'/notas/stack/clear')
         .on('success', function(data,response){
             callback(data);
         })
         .on('error', function(err, response){
             callback({message:"Erro ao limpar pilha!!"});
         });
      },

      stack: function(callback){
        rest.get('http://'+host+":"+port+'/notas/stack/stack')
         .on('success', function(data,response){
             callback(data);
         })
         .on('error', function(err, response){
             callback({message:"Erro ao buscar pilha!!"});
         });
      },

      resetAll: function(callback){
        rest.del('http://'+host+":"+port+'/notas/stack/resetAll')
         .on('success', function(data,response){
             callback(data);
         })
         .on('error', function(err, response){
             callback({message:"Erro ao reinicializar pilha!!"});
         });
      }

}
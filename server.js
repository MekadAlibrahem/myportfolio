var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath : './dest/' ,
    port : 8888 , 
    name : 'http', 
    host : 'localhost'
});

server.start(function(){
    pathserver = server.name +'://' +server.host+':'+server.port ;
    console.log('server started at  port ' , server.port);
    console.log('server files at  ' ,   pathserver );
});

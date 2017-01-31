import * as http from 'http';
import * as path from 'path';
import { app } from './express';
import * as bodyParser from 'body-parser';
import * as glob from 'glob';
import './sdkconfig';
import './routes/index';


let server = http.createServer(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});



"use strict";

const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});
console.log(path.resolve(process.cwd(), ".env"));
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const { dbHelper } = require("./helpers");
const packageDefinition = protoLoader.loadSync(
  './proto/empl_curd.rpc.proto',
  {
    keepCase: true,
    longs: "string",
    defaults: true,
    oneofs: true
  }
);
const server = new grpc.Server();
const simpleProto = grpc.loadPackageDefinition(packageDefinition);
// Grpc Methods
const simpleServiceCtl = require("./modules/simple_crud/employ_detail");
server.addService(
  simpleProto.example.empl_curd.rpc.SimpleCrudService.service,
  {
    create:simpleServiceCtl.create,
    get:simpleServiceCtl.get,
    



  
  }

)

const packageDefinition2 = protoLoader.loadSync(
  './proto/office_curd.rpc.proto',
  {
    keepCase: true,
    longs: "string",
    defaults: true,
    oneofs: true
  }
);

const simpleProto2 = grpc.loadPackageDefinition(packageDefinition2);
// Grpc Methods
const simpleServiceCt2 = require("./modules/simple_crud/office_detail");
server.addService(
  simpleProto2.example.office_curd.rpc.SimpleCrudService2.service,
  {
    create:simpleServiceCt2.create,
    get:simpleServiceCt2.get,
    get_officedetails:simpleServiceCt2.get_officedetails,
    get_id:simpleServiceCt2.get_id,
    get_pos:simpleServiceCt2.get_office_pos,
 
  
  }
)

server.bind(
  `${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`,
  grpc.ServerCredentials.createInsecure()
);
server.start();

if (server.started) {
  dbHelper.init();
  console.log(
    `listening to port ${process.env.GRPC_PORT}, host ${
      process.env.GRPC_HOST
    }, date: ${new Date()}`
    
  );
}

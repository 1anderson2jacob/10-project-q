'use strict';

const io = require('socket.io')(3000);
console.log('Q server up and running on 3000');

// let spaces = [{database: [ 'update', 'create', 'delete']}, {network: ['attack']}];
// let database = ['update', 'create', 'delete'];
// let network = ['attack'];
// let spaces = [ database, network];

io.on('connection', (socket) => {
  console.log(socket.id, 'connected');
});

// Database Namespace
const db = io.of('/database');
// For Database connections add listeners 
db.on('connection', (socket) => {
  // connect to a room inside Database
  socket.on('join', (room, cb) => {
    socket.join(room);
    cb && cb(`Subscribed to ${room} in database`);
  });
  // Create room
  socket.on('create', (payload) => {
    socket.in('create').emit('create', payload);
  });
  // Create room
  socket.on('update', (payload) => {
    socket.in('update').emit('update', payload);
  });
  // Create room
  socket.on('delete', (payload) => {
    socket.in('delete').emit('delete', payload);
  });
});
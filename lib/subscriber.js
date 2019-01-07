'use strict';

// const io = require('socket.io-client');

// const db = io.connect('http://localhost:3000/database');

// db.emit('join','create', data => {
//   console.log(data);
// });

// db.emit('join','delete', data => {
//   console.log(data);
// });

// db.on('create', payload => {
//   console.log('create happend', payload);
// });

// db.on('delete', payload => {
//   console.log('delete happend', payload);
// });

module.exports = class Q {
  constructor(nameSpace){
    this.io = require('socket.io-client');
    if (nameSpace === 'database') {
      this.nameSpace = this.io.connect('http://localhost:3000/database');
    }else if (nameSpace === 'network') {
      this.nameSpace = this.io.connect('http://localhost:3000/network');
    }
  }

  subscribe(room) {
    this.nameSpace.emit('join', room, data => {
      console.log(data);
    });
    this.nameSpace.on(room, payload => {

      return payload;
    });

  }
};

// const Q = require('../lib/subscriber.js');

// const db = new Q('database');

// db.subscribe('delete', (payload) => {
//   console.log('delete happened', payload);
// });

// db.subscribe('create', (payload) => {
//   console.log('create happened', payload);
// });

// console.log(db.subscriptions());
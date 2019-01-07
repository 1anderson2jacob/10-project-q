'use strict';

module.exports = class Publisher {
  constructor(){
    this.io = require('socket.io-client');
    this.db = this.io.connect('http://localhost:3000/database');
    this.network = this.io.connect('http://localhost:3000/network');
  }
  publish(nameSpace, room, payload) {
    if (nameSpace === 'database') {
      this.db.emit(room, payload);
    }else if (nameSpace === 'network') {
      this.network.emit(room, payload);
    }
  }
};



// getsocket((nameSpace) => {
//   for(let i of this){
//     if(i === nameSpace){
//       return i;
//     }
//   }
// });
// let ns = getSocket(nameSpace);
// ns.emit(room, payload);
// }

'use strict';

const Q = require('../lib/subscriber.js');

const nq = new Q('network');

nq.subscribe('attack', (payload) => {
  console.log('Shields Up!', payload);
});
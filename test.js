'use strict'

const myNapi = require('./')

console.log(myNapi.hello())
console.log('Expect 7: ', myNapi.add(3, 4))

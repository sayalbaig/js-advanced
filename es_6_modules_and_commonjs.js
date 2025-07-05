// ES6 Modules and CommonJS

// ES6 Module (in a file named math.mjs or using type="module")
// export
export function add(x, y) {
  return x + y;
}

// import
// import { add } from './math.mjs';

// CommonJS (used in Node.js)
// export
module.exports = {
  add: function(x, y) {
    return x + y;
  }
};

// import
// const { add } = require('./math');

/*
Key Differences:
- ES6 Modules use 'import/export'; CommonJS uses 'require/module.exports'.
- ES6 Modules are static; CommonJS is dynamic.
*/

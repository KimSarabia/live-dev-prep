//What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?


//Makes debugging easier.

// 1 - Prevents accidental globals.

// 2 - Eliminates this coercion.

//In the following example, the function ‘foo’ returns undefined.

function foo() {
  "use strict";
  return this;
}

//Note: If no 'use strict', ‘this’ points to the global object (window).

// 3 - Disallows duplicate property names or parameter values.
// 4 - Makes eval() safer.
// 5 - Throws error on invalid usage of delete.

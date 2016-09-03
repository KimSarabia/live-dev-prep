// What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

// * 1 - technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace
// * 2 - Helps avoid potential name clashes between different JavaScript modules and libraries.

// * 3 = Allow for an easily referenceable alias for a global variable.
//  *Often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict().
// If this has been done, your code can still use $ employing this closure technique, as follows:

(function($) { /* jQuery plugin code referencing $ */ } )(jQuery);


// FURTHER EXPLANATION

//To namespace and control the visibility of member functions and/or variables. Think of it like an object definition. jQuery plugins are usually written like this.

// In Javascript, you can nest functions. So, the following is legal:

function outerFunction() {
   function innerFunction() {
      // code
   }
}
// Now you can call outerFunction(), but the visiblity of innerFunction() is limited to the scope of outerFunction(), meaning it is private to outerFunction(). It basically follows the same principle as variables in Javascript:

var globalVariable;

function someFunction() {
   var localVariable;
}
// Correspondingly:

function globalFunction() {

   var localFunction1 = function() {
       //I'm anonymous! But localFunction1 is a reference to me!
   };

   function localFunction2() {
      //I'm named!
   }
}
// In the above scenario, you can call globalFunction() from anywhere, but you cannot call localFunction1 or localFunction2.

// What you're doing when you write (function() { ... code ... })(), is you're making the code inside a function literal (meaning the whole "object" is actually a function).
//After that, you're self-invoking the function (the final ()).
//So the major advantage of this as I mentioned before, is that you can have private methods/functions and properties:

(function() {
   var private_var;

   function private_function() {
     //code
   }
})()

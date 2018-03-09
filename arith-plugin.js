/**
 * arith-plugin.js
 * Author @ Kyaw Khant Nyar (kxk3035@rit.edu)
 *
 * The Arith class
 */
/***
 * @constructor
 */
function Arith( ) {
    this.stack = [];
    this.stack.push(0);
    this.lastBtn = "";
}

/**
 * getStackTop pops the
 */
Arith.prototype.getStackTop = function() {

    var top = this.stack.pop();
    this.stack.push(top);
    if(isNaN(top)) top = 0; // top is zero if it returns a NaN
    return top;
};

/**
 * set the top value of the stack
 * @param value
 */
Arith.prototype.setStackTop = function( value ) {
    this.stack.pop();
    this.stack.push(value);
};

/**
 * enter duplicates the top value on the stack.
 */
Arith.prototype.enter = function () {
    var top = this.stack.pop();
    this.stack.push(top);
    this.stack.push(top);
    this.lastBtn = "e";

};

/**
 * Operations
 * add pop up top two numbers on the stack and return
 */
Arith.prototype.add = function() {
   var top =  this.stack.pop();
   var sTop = this.stack.pop();
   var addAns;
   if (isNaN(sTop))
       addAns = top + top;
   else addAns= top + sTop;
   this.stack.push(addAns);
   this.lastBtn = "op";

};

/**
 *
 * */
Arith.prototype.sub = function() {
    var top =  this.stack.pop();
    var sTop = this.stack.pop();
    var subAns;
    if (isNaN(sTop))
        subAns = top - top;
    else subAns= sTop - Top;
    this.stack.push(subAns);
    this.lastBtn = "op";

};

/**
 *
 * */
Arith.prototype.mul = function() {
    var top =  this.stack.pop();
    var sTop = this.stack.pop();
    var mulAns;
    if (isNaN(sTop))
        mulAns = top * top;
    else mulAns= top * sTop;
    this.stack.push(mulAns);
    this.lastBtn = "op";

};

/**
 *
 * */
Arith.prototype.div = function() {
    var top =  this.stack.pop();
    var sTop = this.stack.pop();
    var divAns;
    if (isNaN(sTop))
        divAns = top / top;
    else divAns = sTop / top;
    this.stack.push(divAns);
    this.lastBtn = "op";
};

/**
 * opList
 */
Arith.opList = {
    "+": Arith.prototype.add,
    "-": Arith.prototype.sub,
    "*": Arith.prototype.mul,
    "/": Arith.prototype.div
};

/**
 * opNames
 */
Arith.opNames = [ "+", "-", "*", "/" ];

/**
 * JS Document Object Modules
 **/

/**
 * QUESTIONS:::
 * 1. the operations
 * 2.
 * */
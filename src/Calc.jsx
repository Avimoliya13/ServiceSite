import React from "react";
 
function add(a,b){
    let sum = a+b;
    return sum
};

function sub(a,b){
    let subtraction = a-b;
    return subtraction
};

function div(a,b){
    let division = a/b;
    division = division.toFixed(2);
    return division
};

function mul(a,b){
    let multiplication = a*b;
    return multiplication
};

export {add, sub, div, mul};

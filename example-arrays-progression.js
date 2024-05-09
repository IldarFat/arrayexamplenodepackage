math = require('mathjs');


/**
 * Return array of elements of arithmetic progression
 * 
 * @param {float} firstElement - value of first element of progression
 * @param {float} step - value of step of progrssion
 * @param {integer} length - value of amount elements of progression and array size
 * @return {array} - array of numbers
 */
exports.makeArrayOfArithmeticProgression = function(firstElement, step, length){
    let arr = [];
    let isIntegerLength = /^\d+$/.test(length);
    if (!isNaN(Number(step))||!isNaN(Number(firstElement))){
        console.error('first element and step of progression expected number');
        return;
    }
    if (Number(step)>100 || Number(step)<0.01){
        console.error('step of progression expected between 0.01 and 100');
        return;
    }    
    if (!isIntegerLength ){
        console.error('Amount of elements of progression expected integer');
        return;
    }
    for (let i = 0; i < length; i++){
        let elem = firstElement + step*i;
        arr.push(elem);
    }
    return arr;
}

/**
 * Return array of elements of geometric progression
 * 
 * @param {float} firstElement - value of first element of progression
 * @param {float} step - value of step of progrssion
 * @param {integer} length - value of amount elements of progression and array size
 * @returns - array of numbers
 */
exports.makeArrayOfGeometricProgression = function(firstElement, step, length){
    let arr = [];
    let isIntegerLength = /^\d+$/.test(length);
    if (!isNaN(Number(step))||!isNaN(Number(firstElement))){
        console.error('first element and step of progression expected number');
        return;
    }
    if (Number(step)>100 || Number(step)<0.01){
        console.error('step of progression expected between 0.01 and 100');
        return;
    }    
    if (!isIntegerLength ){
        console.error('Amount of elements of progression expected integer');
        return;
    }
    for (let i = 1; i < length+1; i++){
        let elem = firstElement*step*i;
        arr.push(elem);
    }
    return arr;
}
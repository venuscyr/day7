function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let closestKey = null;  
    let closestDifference = Infinity;  

  for (let key in functionsObj) {
        const func = functionsObj[key]; 
        const result = func(inputNumber);  
        const difference = Math.abs(result - outputNumber);  
        if (difference < closestDifference) {
            closestDifference = difference;  
            closestKey = key; 
        }
    }
 return closestKey;  
}
const fObj = {
    multipleByEight: (x) => x * 8,
    square: (x) => x * x,
    addSixty: (x) => x + 60
};
console.log(findClosestResult(fObj, 5, 26)); 
console.log(findClosestResult(fObj, 10, 5));  
console.log(findClosestResult(fObj, 5, 45));  

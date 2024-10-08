function map(elements, modifier) {
     return elements.map(modifier);
}
function isEven(number) {
    return number % 2 === 0;
} 
console.log(map([6, 8, 10], isEven));

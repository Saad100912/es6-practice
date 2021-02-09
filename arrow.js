function doubleIt1(num){
    return num * 2;
}
const result1 = doubleIt1(5);
console.log(result1);


const doubleIt2 = function myFunction(num){
    return num * 2;
}
const result2 = doubleIt2(5);
console.log(result2);


const doubleIt3 = num => num * 2;
const result3 = doubleIt3(5);
console.log(result3);


const add = (x, y) => x + y;
const result4 = add(50, 70);
console.log(result4);


const give5 = () => 5;
const result5 = give5();
console.log(result5);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result6 = doMath(7, 5);
console.log(result6);
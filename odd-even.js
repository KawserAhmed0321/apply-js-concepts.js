function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const even = isEven(124);
console.log(even);

// odd 
function isOdd(number) {
    if (number % 2 == !0) {
        return true;
    }
    return false;
}
const odd = isOdd(1223);
console.log(odd);
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myInches = 123;
var feet = inchToFeet(myInches);
console.log(feet);

var dadiInches = 136;
var feet = inchToFeet(dadiInches);
console.log('dadiInches:', feet);
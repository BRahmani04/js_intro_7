var a = 12;
(function() {
    console.log(a);
})();
// answer is 12

var a = 5;
(function () {
    var a = 12;
    console.log(a);
}) ();

// the answer is 12


const a = 5;
(function () {
    const a = 12;
    console.log(a); // 12
}) ();

// ---------------------//

var a = 10;
var x = (function () {
    var a = 12;
    return (function (){
        console.log(a);
    })
}) ();
x()

// ---------------------//

let place1 = 'Planet Earth';
function fullstackHQ() {
    return middleFunction('United States');
    function middleFunction(place2) {
        return innerFunction('Illinois');
        function innerFunction(place3) {
            place = 'Chicago';
            return innermostFunction();
            function innermostFunction() {
                return 'Techglobal is at ' + place1 + ', ' + place2 + ', ' + place3 + ', ' + place;
            }
        }
    }
}
console.log(fullstackHQ());

let count = 0;
const incementalChange = (num) => {
    count += num;
    return count;
}
console.log(incementalChange(2)); // => 2
console.log(incementalChange(6)); // => 8
console.log(incementalChange(-1)); // => 7
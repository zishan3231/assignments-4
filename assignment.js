// ------------------------------
// Problem:1  radianToDegree
// ------------------------------

function radianToDegree(radian) {
    let degree = radian * (180 / 3.1416)
    let degree1 = degree.toFixed(2)
    return degree1;
}
const totalRedian = radianToDegree(199)
console.log(totalRedian)


// Problem:2  isJavaScriptFile
function isJavaScriptFile(string) {
    if (string.endsWith(".js")) {
        return true;
    } else {
        return false;
    }
}

let fileName = isJavaScriptFile("image.jpg.js");
console.log(fileName)





// --------------------
// problem-3 oilPrice
// --------------------

function oilPrice(diesel, Petrol, octane) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    const totalDieselPrice = dieselPrice * diesel
    const totalPetrolPrice = petrolPrice * Petrol
    const totalOctanePrice = octanePrice * octane
    const totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalPrice;
}
const total = oilPrice(1, 1, 1)
console.log(total)

// --------------------------
// problem-4 publicBusFare
// --------------------------

function publicBusFare(people) {
    const busCapacity = 50;
    const microBusCapacity = 11;
    const remained = people % busCapacity;
    const rest = remained % microBusCapacity;
    const fare = rest * 250;
    return fare;

}
const totalPeople = publicBusFare(235)
console.log(totalPeople)

// ------------------------
// problem-5 isBestFriend
// ------------------------

const item1 = {
    name: 'abul', friend: 'babul'

}
const item2 = {
    name: 'babul', friend: 'abul'
}
function isBestFriend(item1, item2) {
    if (item1.name === item2.friend && item1.friend === item2.name) {
        return true;
    } else {

        return false
    }

}
let friends = isBestFriend(item1, item2);
console.log(friends)


// ------------------------------
// Problem:1  radianToDegree
// ------------------------------

function radianToDegree(radian) {
    let degree = radian * (180 / 3.1416)
    let degree1 = degree.toFixed(2)
    return degree1;
}
const totalredian = radianToDegree(10)
console.log(totalredian)


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
    const PetrolPrice = 130;
    const octanePrice = 135;
    const totalDieselPrice = dieselPrice * diesel
    const totalPetrolPrice = PetrolPrice * Petrol
    const totaloctanePrice = octanePrice * octane
    const totalPrice = totalDieselPrice + totalPetrolPrice + totaloctanePrice;
    return totalPrice;
}
const total = oilPrice(1, 1, 1)
console.log(total)

// --------------------------
// problem-4 publicBusFare
// --------------------------

function publicBusFare(People) {
    const bCapacity = 50;
    const micCapacity = 11;
    const remained = People % bCapacity;
    const rest = remained % micCapacity;
    const fare = rest * 250;
    return fare;

}
const totalPeople = publicBusFare(55)
console.log(totalPeople)
// ------------------------
// problem-5 isBestFriend
// ------------------------

const item1 = {
    name: 'abul',
    friend: 'babul'

}
const item2 = {
    name: 'babul',
    friend: 'abul'
}
function isBestFriend(item1, item2) {
    if (item1.name === item2.friend && item1.friend === item2.name) {
        return true;
    }
    else {

        return false
    }

}
let friends = isBestFriend(item1, item2);
console.log(friends)


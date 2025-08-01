// Bijli ka bill

/*
0 - 100 = Rs.4.2/U
101 - 200 = Rs.6/U
201 - 400 = Rs.8/U
401 > = Rs.13/U
*/

let unitsUsed = 555;
let cost = 0;

// !Not So good
/*
if (unitsUsed > 400) {
  cost = (unitsUsed - 400) * 13 + 2620;
  console.log(cost);
} else if (unitsUsed > 200) {
  cost = (unitsUsed - 200) * 8 + 1020;
  console.log(cost);
} else if (unitsUsed > 100) {
  cost = (unitsUsed - 100) * 6 + 420;
  console.log(cost);
} else if (unitsUsed > 0) {
  cost = unitsUsed * 4.2;
  console.log(cost);
} else {
  console.log("invalid number");
}
*/

// *Better Way:=>
amount = unitsUsed;
if (unitsUsed < 0) {
  return (() => {
    console.log(`Invalid input`);
  })();
}
if (unitsUsed > 400) {
  cost = (unitsUsed - 400) * 13;
  unitsUsed = 400;
}
if (unitsUsed > 200 && unitsUsed <= 400) {
  cost += (unitsUsed - 200) * 8;
  unitsUsed = 200;
}
if (unitsUsed > 100 && unitsUsed <= 200) {
  cost += (unitsUsed - 100) * 6;
  unitsUsed = 100;
}
cost += unitsUsed * 4;

console.log(`You have to pay Rs.${cost} for using ${amount} units`);

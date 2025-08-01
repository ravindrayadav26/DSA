const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
let amount = 4823;

// ?Using forEach loop
// (function moneyDomination(amount) {
//   notes.forEach((note) => {
//     if (amount > note) {
//       console.log(`${note} note: ${Math.floor(amount / note)}`);
//       amount = amount % note;
//     }
//   });
// })(amount);

// ?Using classic For loop
// for (let i = 0; i < notes.length; i++) {
//   const note = notes[i];
//   if (amount > note) {
//     console.log(`${note} note: ${Math.floor(amount / note)}`);
//     amount = amount % note;
//   }
// }

// ?Using forOf loop
// for (const note of notes) {
//   if (amount > note) {
//     console.log(`${note} note: ${Math.floor(amount / note)}`);
//     amount = amount % note;
//   }
// }

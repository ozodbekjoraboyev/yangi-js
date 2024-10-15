
let math = +prompt("Matematikadan olgan balingizini kiriting");
let english = +prompt("Ingliz tilidan olgan balingizini kiriting");
let rus = +prompt("Rus tilidan olgan balingizini kiriting");
let history = +prompt("Tarixan olgan balingizini kiriting");
let fizika = +prompt("Fizikidan olgan balingizini kiriting");

alert(
  `Sizning umumiy o'rtacha balingiz: ${
    (math + english + rus + history + fizika) / 5
  }`
);

console.log(
  `Sizning umumiy o'rtacha balingiz: ${
    (math + english + rus + history + fizika) / 5
  }`
);
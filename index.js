"Use Strict";

const massMack = 78;
const heightMack = 1.69;

const massMobi = 95;
const heightMobi = 1.88;

const BMIMack = massMack / heightMack ** 2;
const BMIMobi = massMobi / (heightMobi * heightMobi);

console.log(BMIMack, BMIMobi);

const MackHigherBMI = BMIMack > BMIMobi;

// console.log( BMIMack,BMIMobi, MackHigherBMI );

if (BMIMack > BMIMobi) {
  console.log(`Mack's BMI (${BMIMack}) is Higher then Mobi's(${BMIMobi})`);
} else {
  console.log(`Mobi's BMI (${BMIMobi}) is Higher then Mack's BMI(${BMIMack}) `);
}

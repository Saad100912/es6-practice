const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 26, 22, 27];
// const allAges = ages.concat(ages2).concat([5, 9]).concat(ages3);
const allAges2 = [...ages, ...ages2, 15, 19, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPoisa = [650, 450, 250, 800];
// const maximum = Math.max(business, minister, sochib);
const maximum1 = Math.max(...takaPoisa);
console.log(maximum1);
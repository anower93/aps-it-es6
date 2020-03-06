const tahmid = [55, 336, 558, 897];

const priyoti = [22, 11, 44, 789];

const abid = [99, 55, 77, 88];

//Old style concating system.
console.log("\n");
console.log("First Solution \n");

const total = tahmid.concat(priyoti).concat(abid);

console.log(total);

console.log("It is Second  Style \n");

// Another System
// It will made different different array in One array

const all = [tahmid, priyoti, abid];

console.log(all);

//Pure solution with Spread Operator

console.log("Final Solution \n");

const myFamily = [...tahmid, ...priyoti, ...abid];

console.log(myFamily);



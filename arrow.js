//amra sdharonoto evabe function use kori---

function ap(num){
    return num*5;
}

const result1 = ap(5);

console.log(`Result one is: + ${result1}`);





//Another style of writing function

const apsit = function something(num){
    return num*3;
}

const result2 = apsit(5);

console.log(`Result Two is: + ${result2}`);





//     This is single parameter arrow function

const arrowfunc = num => num*2;

const result3 = arrowfunc(30);


console.log(`Result Three is: ${result3}`);




//     More than one parameter arrow function

const add = (a, b) => a+b;

const result4 = add(12,10);

console.log(`Result Four is: ${result4}`);






//     Without parameter for arrow function

const withourpara = () => "I love programming!";

const result5 = withourpara();

console.log(`Result Five is: ${result5}`);





// Huge function with arrow function

const click = (x, y) => {
    const add = x + y;
    const minus = x - y;
    const multi = add * minus;
    return multi;
}

const result6 = click(7, 5);

console.log( "Result Six is : " + result6);



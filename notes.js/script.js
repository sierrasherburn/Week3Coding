/* let customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}

for (name of customerNames) {
    console.log(name);
}

for (name of customerNames) {
    console.log(name);
}

// modularize means to write the insctructions, give them a name and then use them any time i need them

function myFunction() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

myFunction();

/* function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

createFullName('Tom', 'Sawyer'); */

/* function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
} */

/* var fullName = createFullName('Tom', 'Sawyer');
console.log('Welcome, ' + fullName); */

//use the values we pass in when we call the function to create variability and make the function dynamic

//we may want a function to return a value back, or return something. a return function will end the statement and return whatever value follows. the return statement is useful to get something back. like a vending machine function. a vending machine has parameters, it takes the address of the snack you want to get as well as the money. if money covers costs, the value it returns is the snack, plus the change. you put input in and then you give something back to be used later. make sure to give descriptive names for functions, should be verbs since functions are actions


//the map method is used to invoke a function for each element in an array and then create a new array from the returned values of each iterations function invocation. this is useful for when we need to transform the data in an array. ex: we have an array of names and we want to create an array that contains the length of each name. map takes a function and it's going to call that function for each element in the array and whatever it returns will be an element in the new array. we're going to create a function that's going to have one parameter. the map method on the array takes a function and then performs an iteration on each element in the array that you call the map method on and it returns a new array with the results of all the returned values from the function.

/* let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];

let lengths = names.map(function (element) {
    return element.length;
});

console.log(lengths); */

//the reduce method is useful for taking all the values in an array and reducing them into one vale. this final value is a result of a reducer function that we pass in as an argument. reduce can be used anytime we need to perform an operation on all elements in an array that results in a single value. ex: finding average of a set of values or return an object with properties composed of multiple objects.


/* let sum = lengths.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);

console.log(sum);
 */
//the accumulator (first parameter of function) passed in to the reduce method is used to accumulant all of the values together. the result of the previosly returned value. each time the function executes, the accumulator will be whatever was returned by the previous exectutiom.

//the second parameter is the currentValue or element in the array. these parameters in order are the current index of the array and the array itself. reduce can also take a second parameter after the function which is the initial value to start the accumulator. if no initial value is applie, the first element of the array is used by default.

//for each method is similar to the map method in that it invokes a function for each element in the array but does not return a new array from the results of the invocation. if we need to modify and store values, use map. if you do not need to store values, use for each


/* names.forEach(function (element) {
    console.log(element);
}); */

//filter method allows us to invoke a function that returns a boolean value on each element in array. filter returns a new array that contains all of the elements where the invoked method returns true. allows us to use a boolean expression to filter out specific elements and only keep ones that pass expression

/* let evens = names.filter(function (element) {
    return element.length % 2 === 0;
});

console.log(evens); */

//splice method can be used to alter the contents of an array by adding, modifying or removing elements from an array at a specific location.read documentation on  mdn. first parameter is the location to start at. second is how many elements to remove. the method returns an array of all the elements removed. 

//a function is a standalone piece of functionality and a method is a function that belongs to an object

/* let removeElement = names.splice(1, 1);
console.log(removeElement);


let dvdPlayer = {
    height: 3,
    width: 8,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',
    printDVDName: function () {
        console.log(this.dvdName)
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName(); */

//printDVDName is a method. just like how the values have properties assigned to them, this property is going to have a function assigned to it
// printDVDName: function() {
//    console.log(this.dvdName);
// }

//it has properties that define it and it also has a method that provides some functionality.

//dot notation works by you putting the name of the identifier or the varianle and . and then you can access all values.

//the this key word refers to the object itself. must use this to call a property inside the object.

//objects allow us to group pieces of data and functionality together to make it more relevent to what we are doing. 

/* console.log(2 == '2');
console.log(2 === '2');


let currentAge = 14;

function checkCanDrive(age) {
    return (age >= 16);
}


if (checkCanDrive(currentAge)) {
    console.log('This person can drive');
} else {
    console.log('This person cannot legally drive');
} */


/* let fullName = 'Mary' + ' ' + 'Brown';
let gradesArray = [100, 79, 80, 90, 100];

function lowestGrade(gradeBook) {
    if (gradeBook.length > 0) {
        let lowGrade = gradeBook[0];
        for (let grade of gradeBook) {
            if (grade < lowGrade) {
                lowgrade = grade;
            }
        } return lowGrade;
    } else {
        return 0;
    }
}

console.log('Student: ' + fullName);
console.log('Grades: ');
for (let i = 0; i < gradesArray.length; i++) {
    console.log('\t' + (i + 1) + ': ' + gradesArray[i]);
}
console.log('Evaluation: ');
console.log('Lowest Grade is: ' + lowestGrade(gradesArray)); */

let array1 = [1, 5, 6, 9, 10, 14];

//print the third element in the array.
console.log(array1[2]);

//print the second to last element in the array.
console.log(array1[array1.length - 2]);

//add 16 and 3 to array 1
array1.push(16, 3);

//sort the array, then pring the 3rd element again, did it change?

array1.sort();
console.log(array1[2]);

//create a variable called myToDoList that holds an empty array.

let myToDoList = [];

//add three todo items to the array using a built in method

myToDoList.push('walk goats and pig', 'clean room', 'eat dinner');
console.log(myToDoList);
myToDoList.splice(1, 1);
console.log(myToDoList);

// create another array, yourTodoList, and add two todo items

let yourToDoList = ['clean yard', 'dust'];
console.log(yourToDoList);

// create another array, ourTodoList

let ourTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList

/* let ourTodoList = myToDoList.concat(yourToDoList);
console.log(ourTodoList); */

ourTodoList = [...myToDoList, ...yourToDoList, 'wash the truck']

// sort the following array from Z-A

ourTodoList.sort();
ourTodoList.reverse();
console.log(ourTodoList);


// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

function reverse(x) {
    if (typeof (x) === 'boolean') {
        return !x;
    } else if (typeof (x) === 'string' || typeof (x) === 'number') {
        let splitX = x.split('');

        let reverseX = splitX.reverse();

        let rejoinX = reverseX.join('');

        return rejoinX;
    } else {
        console.log('Passed argument must be a boolean, string, or number');
    }
}



function reverse(a) {
    return
}

let numbers = [3, 2, 4, 1, 5];
console.log(numbers);

numbers.sort();

let reversed = numbers.reverse();
console.log(reversed);

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed

function addingMachine() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        let number = arguments[i];

        sum += number;
    }
    return sum;
};

console.log(addingMachine(3, 5, 3));

// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function called myBonus that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

function myBonus(grossInvoiced, profitMargin) {
    let profits = grossInvoiced * profitMargin;

    let bonus = 0;

    let tier1Cieling = 100000;
    let tier2Cieling = 400000;
    let tier3Cieling = 500000;

    let tier1Rate = .1;
    let tier2Rate = .2;
    let tier3Rate = .35;
    let tier4Rate = .4;

    let maxBonusTier1 = tier1Cieling * tier1Rate;
    let maxBonusTier2 = tier2Cieling * tier2Rate + maxBonusTier1;
    let maxBonusTier3 = tier3Cieling * tier3Rate + maxBonusTier2;

    if (profits <= tier1Cieling) {
        bonus = (profits * .1);
    } else if (profits <= (tier2Cieling + tier1Cieling)) {
        bonus = maxBonusTier1 + ((profits - tier1Cieling) * tier2Rate)
    } else if (profits <= (tier3Cieling + tier2Cieling + tier1Cieling)) {
        bonus = maxBonusTier2 + ((profits - tier1Cieling - tier2Cieling) * tier3Rate)
    } else if (profits > 1000000) {
        bonus = maxBonusTier3 + ((profits - tier1Cieling - tier2Cieling - tier3Cieling) * tier4Rate)
    } else {
        return 'Error';
    }

    return bonus;
}

console.log(myBonus(100000, .563));
console.log(myBonus(250000, .356));
console.log(myBonus(750000, .235));
console.log(myBonus(35000000, .487));
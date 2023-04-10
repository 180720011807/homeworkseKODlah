//point1 

let x = Math.random()
let hasil = Math.floor(x*100)
console.log(hasil)



//point2 

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '|!@#$%^&*()_+=~`{}[]|\:;"<>?//';
    var result = '';
    for (var i = length; i > 0; --i) result += mask [Math.floor(Math.random() * mask.length)];
    return result;
}

console.log(randomString(16, 'aA'));
console.log(randomString(32, '#aA'));
console.log(randomString(64, '#A!'));




//point3 

let quote = 'udin, ujang, asep'
let array1 = quote.split(' ');
console.log(array1);




//point4

"use strict";

const isLeapYear = function (year) {
    //console.log(year % 100);
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 ===0) ;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1999));




//point5

function printDataFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log("Name: " + arr[i].name + ", Age: " + arr[i].age);
    }
  }

  const data = [
    {
      name: "udin",
      age: 10
    },
    {
      name: "ujang",
      age: 11
    },
    {
      name: "asep",
      age: 12
    }
  ];
  
  printDataFromArray(data);
 



  //point6

  function groupPeopleByAttributes(people) {
    const output = {
        sex: {
            male: [],
            female: []
        },
        age: {
            under20: [],
            older: []
        },
        marital: {
            single: [],
            double: []
        },
        status: {
            student: [],
            employee: []
        }
    };

    people.forEach(person => {
        // Group by sex
        if (person.sex === 'male') {
            output.sex.male.push(person.name);
        } else if (person.sex === 'female') {
            output.sex.female.push(person.name);
        }

        // Group by age
        if (person.age < 20) {
            output.age.under20.push(person.name);
        } else {
            output.age.older.push(person.name);
        }

        // Group by marital status
        if (person.marital === 'single') {
            output.marital.single.push(person.name);
        } else if (person.marital === 'married') {
            output.marital.double.push(person.name);
        }

        // Group by job status
        if (person.social === 'student') {
            output.status.student.push(person.name);
        } else if (person.social === 'employee') {
            output.status.employee.push(person.name);
        }
    });

    return output;
}

const people = [
    {
        name:"udin",
        sex:"male",
        age:10,
        marital:"single",
        social:"student"
    },
    {
        name:"ujang",
        sex:"male",
        age:25,
        marital:"married",
        social:"employee"
    },
    {
        name:"icih",
        sex:"female",
        age:10,
        marital:"single",
        social:"student"
    },
    {
        name:"eneng",
        sex:"female",
        age:100,
        marital:"married",
        social:"employee"
    },
    {
        name:"asep",
        sex:"male",
        age:20,
        marital:"single",
        social:"employee"
    },
];

const groupedPeople = groupPeopleByAttributes(people);
console.log(groupedPeople);



  //point7

function countAInLoopedWord(word, noOfLoops) {
    // Repeat the word for the given number of loops
    const loopedWord = word.repeat(noOfLoops);
    // Count the number of occurrences of 'a' in the looped word
    const count = (loopedWord.match(/a/g) || []).length;
    return count;
  }

  const word = 'aha';
const noOfLoops = 3;
const result = countAInLoopedWord(word, noOfLoops);
console.log(result);

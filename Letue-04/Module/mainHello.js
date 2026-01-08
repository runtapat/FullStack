const Hello = require('./libhello');


Hello.sayHello();
console.log("Cube of 3 is: " + Hello.cube(3));
console.log("5 + 7 = " + Hello.add(5, 7));
console.log("Person Status: " + Hello.status);
console.log("Person Name: " + Hello.person.name + ", Age: " + Hello.person.age);   

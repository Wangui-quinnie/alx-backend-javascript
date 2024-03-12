ES6 data manipulation

Map, Filter, and Reduce on Arrays:
Map:

map is used to iterate over an array and perform some operation on each element, returning a new array with the results of those operations.
Syntax: array.map(callback(currentValue, index, array), thisArg)
Example:

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
// squaredNumbers will be [1, 4, 9, 16, 25]
Filter:

filter is used to iterate over an array and filter out elements that do not meet a specified condition, returning a new array with only the filtered elements.
Syntax: array.filter(callback(element, index, array), thisArg)
Example:

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers will be [2, 4]
Reduce:

reduce is used to iterate over an array and accumulate a single result by applying a function to each element of the array.
Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
Example:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// sum will be 15
Typed Arrays:
Typed Arrays are array-like objects that provide a mechanism for accessing raw binary data in memory buffers. They are designed to handle binary data more efficiently than regular JavaScript arrays.

// Creating a Typed Array
const buffer = new ArrayBuffer(16); // Allocate a buffer of 16 bytes
const intArray = new Int32Array(buffer); // Create a 32-bit integer array view

// Accessing and modifying elements
intArray[0] = 42;
console.log(intArray[0]); // Output: 42
Set, Map, and WeakMap Data Structures:
Set:

Set is a collection of unique values, where each value may occur only once.
Example:

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Ignored, as 1 is already in the set
console.log(mySet); // Output: Set { 1, 2, 3 }
Map:

Map is a collection of key-value pairs, where each key may occur only once.
Example:

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap.get('name')); // Output: John
WeakMap:

WeakMap is similar to Map, but keys must be objects, and the map does not prevent its keys from being garbage collected if there are no other references to them.
Example:

const weakMap = new WeakMap();
const key = {};
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // Output: value

Tasks

0. Basic list of objects
mandatory
Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco

1. More mapping
mandatory
Create a function getListStudentIds that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the map function on the array.

2. Filter
mandatory
Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.

It should accept a list of students (from getListStudents) and a city (string) as parameters.

You must use the filter function on the array.

3. Reduce
mandatory
Create a function getStudentIdsSum that returns the sum of all the student ids.

It should accept a list of students (from getListStudents) as a parameter.

You must use the reduce function on the array.

4. Combine
mandatory
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:

  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined.

5. Typed Arrays
mandatory
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

It should accept three arguments: length (Number), position (Number), and value (Number).

If adding the value is not possible the error Position outside range should be thrown.

6. Set data structure
mandatory
Create a function named setFromArray that returns a Set from an array.

It accepts an argument (Array, of any kind of element).

7. More set data structure
mandatory
Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a set (Set) and an array (Array).

8. Clean set
mandatory
Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).

It accepts two arguments: a set (Set) and a startString (String).

When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -.

9. Map data structure
mandatory
Create a function named groceriesList that returns a map of groceries with the following items (name, quantity):

Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5

10. More map data structure
mandatory
Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error Cannot process should be thrown.

11. Weak link data structure
#advanced
Export a const instance of WeakMap and name it weakMap.

Export a new function named queryAPI. It should accept an endpoint argument like so:

  {
    protocol: 'http',
    name: 'getUsers',
  }
Track within the weakMap the number of times queryAPI is called for each endpoint.

When the number of queries is >= 5 throw an error with the message Endpoint load is high

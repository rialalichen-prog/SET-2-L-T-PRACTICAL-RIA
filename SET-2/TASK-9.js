let patients = [
    { name: "Rahul", age: 35 },
    { name: "Anita", age: 42 },
    { name: "Vikram", age: 28 },
    { name: "Priya", age: 60 }
];

patients.pop();

patients.sort(function (a, b) {
    return a.age - b.age;
});

console.log(patients);

// Sample Output:
// [
//   { name: 'Vikram', age: 28 },
//   { name: 'Rahul', age: 35 },
//   { name: 'Anita', age: 42 }
// ]

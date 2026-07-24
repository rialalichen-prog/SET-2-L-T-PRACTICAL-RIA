let patients = [
    { name: "Rahul", age: 35 },
    { name: "Anita", age: 42 },
    { name: "Vikram", age: 28 },
    { name: "Priya", age: 60 }
];

for (let patient of patients) {
    if (patient.age < 30) {
        continue;
    }

    console.log(patient.name, patient.age);
}

// Sample Output:
// Rahul 35
// Anita 42
// Priya 60

let patients = [
    { name: "Rahul", age: 35 },
    { name: "Anita", age: 42 },
    { name: "Vikram", age: 28 }
];

patients.push({ name: "Priya", age: 60 });

let oldest = patients[0];

for (let patient of patients) {
    if (patient.age > oldest.age) {
        oldest = patient;
    }
}

console.log("Oldest Patient:", oldest.name, "-", oldest.age);

// Sample Output:
// Oldest Patient: Priya - 60

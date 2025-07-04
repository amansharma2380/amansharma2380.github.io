db.employees.insertOne({
    name: "Aman Sharma",
    email: "amansh2380@gmail.com",
    department: "CSE",
    Salary: 1456,
    location: ["FL", "OH"],
    date: Date()
});

db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);
db.employees.find();

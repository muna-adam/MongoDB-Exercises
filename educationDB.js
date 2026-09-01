
use("educationDB");

db.students.insertMany([
  {
    name: "Ayaan",
    age: 20,
    email: "ayaan@gmail.com",
    courses: ["JavaScript", "React", "Node.js"]
  },
  {
    name: "Sahra",
    age: 21,
    email: "sahra@yahoo.com",
    courses: ["React", "Python"]
  },
  {
    name: "Samiya",
    age: 25,
    email: "samiya@gmail.com",
    courses: ["Node.js", "MongoDB"]
  },
  {
    name: "Salma",
    age: 18,
    email: "salma@school.edu",
    courses: ["JavaScript", "React"]
  },
  {
    name: "Mohamed",
    age: 23,
    email: "mohamed@hotmail.com",
    courses: ["Python", "MongoDB"]
  },
  {
    name: "Alex",
    age: 24,
    email: "alex@gmail.com",
    courses: ["React", "Node.js"]
  },
  {
    name: "Hassan",
    age: 21,
    email: "hassan@gmail.com",
    courses: ["JavaScript", "Python"]
  },
  {
    name: "Fatima",
    age: 19,
    email: "fatima@university.edu",
    courses: ["Node.js", "MongoDB"]
  },
  {
    name: "Sofia",
    age: 26,
    email: "sofia@gmail.com",
    courses: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "Maxamud",
    age: 22,
    email: "maxamud@yahoo.com",
    courses: ["JavaScript", "React"]
  },
  {
    name: "Khadija",
    age: 28,
    email: "khadija@gmail.com",
    courses: ["Python", "Data Science"]
  },
  {
    name: "Said",
    age: 30,
    email: "said@college.edu",
    courses: ["React", "Node.js", "MongoDB"]
  }
]);

db.students.find({
  age: { $gt: 22 }
});

db.students.find({
  courses: "React"
});


db.students.find({
  name: { $regex: "^S",}
});

db.students.find({
  age: { $in: [18, 21] }
});

db.students.find({
  email: { $not: /@gmail\.com$/i }
});


db.students.find({
  courses: "React",
  age: { $gt: 20 }
});

db.students.find({
  $or: [
    { courses: "React" },
    { courses: "Node.js" }
  ]
});

db.students.find({
  $or: [
    { name: { $regex: "x", } },
    { email: { $regex: "\\.edu$", } }
  ]
});
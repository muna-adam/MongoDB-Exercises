use("studentDB");

db.students.insertMany([
  {
    name: "Ayaan",
    age: 20,
    email: "ayaan@gmail.com",
    courses: ["JavaScript", "React", "Node.js"]
  },
  {
    name: "Mohamed",
    age: 22,
    email: "mohamed@gmail.com",
    courses: ["Python", "MongoDB", "JavaScript"]
  },
  {
    name: "Fatima",
    age: 21,
    email: "fatima@gmail.com",
    courses: ["React", "Node.js", "MongoDB"]
  }
]);


db.students.find();


db.students.updateOne(
  { name: "Ayaan" },
  { $set: { email: "ayaan2026@gmail.com" } }
);

db.students.deleteOne({
  name: "Mohamed"
});

db.students.insertOne({
  name: "Hassan",
  age: 23,
  email: "hassan@gmail.com",
  courses: ["MongoDB", "JavaScript"],
  address: {
    city: "Boosaaso",
    country: "Somalia",
  }
});





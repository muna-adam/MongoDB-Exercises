use("studentLearningDB")

db.student.insertMany(
  [
    {
      name: "muna",
      email: "muna@gmail.com",
      courses: ['javaScript', 'Html', 'React'],
      points: 120,
    },

     {
      name: "amina",
      email: "amina@gmail.com",
      courses: ['Node.js', 'MongoDB', 'React'],
      points: 110,
    },

     {
      name: "salma",
      email: "salma@gmail.com",
      courses: ['Tailwind', 'Next.js', 'Python'],
      points: 100,
    }
  ]
);



db.student.updateOne(
  {name: "salma"},
  {$set : {email: "salma111@gmail.com"}}
);

db.student.updateOne(
  {name: "salma"},
  {$inc : {points: 150}}
);

db.student.updateOne(
  {name: "salma"},
  {$push : {course:  {$each: ["AI Engineer"] } } }
);

db.student.updateOne(
  {name: "salma"},
  {$pull : {courses:  {$in: ["AI Engineer"] } } }
);

db.student.updateOne(
  {name: "salma"},
  {
    $push : {courses:  {$each: ["AI Engineer"] } },
    $inc: {points: 100},
    $set: {name: "saamiya"},
  }
);
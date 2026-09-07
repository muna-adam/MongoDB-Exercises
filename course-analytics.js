db.student.aggregate([
  {
    $match: {
      points: { $gt: 85 }
    }
  },
  {
    $unwind: "$courses"
  },
  {
    $group: {
      _id: "$courses",
      total: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      course: "$_id",
      total: 1
    }
  },
   {
     $sort: {
      total: -1
     }
   }
])

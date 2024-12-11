```javascript
db.users.aggregate([
  {
    $match: {
      age: {
        $type: "number"
      }
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: {
        $avg: "$age"
      }
    }
  },
  {
    $addFields: {
      validAge: {
        $cond: {
          if: {
            $eq: [{
              $type: "$age" 
            }, "number"]
          },
          then: "$age",
          else: null
        }
      }
    }
  }
])
```
This improved aggregation first filters documents to include only those with a numeric 'age' using `$type`. The `$cond` operator checks if the 'age' field is numeric, allowing conditional execution,  and handling potential inconsistencies gracefully.
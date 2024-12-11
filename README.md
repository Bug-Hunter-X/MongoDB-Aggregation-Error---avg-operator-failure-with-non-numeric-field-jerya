# MongoDB Aggregation Error: Handling Non-Numeric Fields in $avg

This repository demonstrates a common error encountered when using the `$avg` operator in MongoDB aggregations: failure when the field to average contains non-numeric values.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution using data validation and error handling.

## Problem

The `$avg` operator expects numeric input. If your field contains strings, or mixed data types, the aggregation will throw an error.  The example code attempts to calculate average age, but if 'age' is inconsistently typed, the aggregation fails.

## Solution

The solution involves robust data validation before aggregation. This ensures that all entries in the age field are numeric.  If inconsistencies exist, error handling can prevent the aggregation from crashing and helps maintain data integrity. This approach adds validation to protect against errors, ensuring your aggregate operation always runs smoothly.
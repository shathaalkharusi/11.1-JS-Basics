// Task 1: describeValue (Warm-up)
// Return the real type of a value.
//
// - null gives "null", an array gives "array", NaN gives "NaN".
// - Everything else: return typeof value.

function describeValue(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  if (Number.isNaN(value)) return 'NaN'
  return typeof value;
}

// Expected output:
console.log(describeValue(42));         // "number"
console.log(describeValue("hi"));       // "string"
console.log(describeValue(true));       // "boolean"
console.log(describeValue(undefined));  // "undefined"
console.log(describeValue(null));       // "null"
console.log(describeValue([1, 2]));     // "array"
console.log(describeValue({}));         // "object"
console.log(describeValue(NaN));        // "NaN"

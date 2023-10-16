// JSON objects to compare
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

// Convert JSON objects to strings
let jsonString1 = JSON.stringify(obj1);
let jsonString2 = JSON.stringify(obj2);

// Parse JSON strings back into JavaScript objects
let parsedObj1 = JSON.parse(jsonString1);
let parsedObj2 = JSON.parse(jsonString2);

// Compare the resulting objects for equality
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

if (areObjectsEqual(parsedObj1, parsedObj2)) {
  console.log("The JSON objects are equivalent (ignoring property order).");
} else {
  console.log("The JSON objects are not equivalent (considering property order).");
}

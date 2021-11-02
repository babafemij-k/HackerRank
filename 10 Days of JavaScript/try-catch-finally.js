function reverseString(s) {
  // apply .split() on string
  // apply .reverse() on the returned array
  // apply .join() on the returned array

  try {
    let reversedString = s.split("").reverse().join("");
    if (!String) {
      throw new Error("s.split() is not a function.");
    }
    console.log(reversedString);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

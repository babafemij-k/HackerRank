/* Objective

In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

Task
Complete the reverseString function; it has one parameter, . You must perform the following actions:

Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string. */

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

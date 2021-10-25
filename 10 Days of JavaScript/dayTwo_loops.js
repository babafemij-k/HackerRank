/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  // First we convert the string to an array and create an empty array to hold all the consonants
  let arr = s.split("");
  let consonants = [];

  // We use the for loop to read through the array printing all the vowels in the process. Any consonant found would be push to the consonant array for later printing
  for (let i = 0; i <= arr.length - 1; i++) {
    if ("aeiou".includes(arr[i])) {
      console.log(arr[i]);
    } else {
      consonants.push(arr[i]);
    }
  }

  // After all the vowels have been printed and the consonants have been stored, this for loop prints all the consonants in the consonants array.
  for (let x = 0; x <= consonants.length - 1; x++) {
    console.log(consonants[x]);
  }
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  const largestNumber = Math.max(...nums);
  const lowerThanLargest = [];

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] < largestNumber) {
      lowerThanLargest.push(nums[i]);
    }
  }
  return Math.max(...lowerThanLargest);
}

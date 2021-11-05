/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] % 2 === 0) {
      nums[i] = nums[i] * 2;
    } else if (nums[i] % 2 !== 0) {
      nums[i] = nums[i] * 3;
    }
  }
  return nums;
}

function twoSum(nums, target) {
    let len = nums.length;
    for (let i = 0; i < len-1 ; i++) {
        for (let j = len-1; j > i; j--) {
            if (nums[i] + nums[j] === target) {
                return `[${i}, ${j}]`;
            }
        }
    }
    return `target error!`;
}

console.log( twoSum([2, 7, 11, 15], 9) );
console.log( twoSum([2, 7, 11, 15], 13) );
console.log( twoSum([2, 7, 11, 15], 26) );
console.log( twoSum([2, 7, 11, 15], 30) );
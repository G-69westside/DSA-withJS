var moveZeroes = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            nums.indexOf(nums[i]) = nums.length
        }
    }
    console.log(nums)
};


moveZeroes([0,5,3,2])
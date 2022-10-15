//sorting and two pointer

// -4,-1,2 = -3, diff 1-(-3) = 4
//OC = nlogn + n^2 = O(n^2), SC = O(1)
function threeSumClosest(nums: number[], target: number): number {

    nums.sort( (a,b) => a-b)
    
    
    let res = Infinity
    let diff = Infinity
    
    for(let i=0;i<nums.length;i++){
        
        let left = i+1
        let right = nums.length-1
        
        while(left<right){
            let sum = nums[i] + nums[left] + nums[right]
            
            let currentDiff = sum-target
            
            if(Math.abs(currentDiff)<diff){
                res = sum
                diff = Math.abs(currentDiff)
            }
            
            //if sum is bigger than target, if i go to left, it will increase difference. So to become closest, we need to decrease right to find smaller value to get closer to target
            if(sum>target){
                right--
            }
            else{
                left++
            }
            
        }
        
    }
    
    return res
};
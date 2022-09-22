function smallestSubarrays(nums: number[]): number[] {
    
    let n = nums.length;
    
    let answer: number[] = Array(n).fill(1)
    
    let last : number[] = Array(32).fill(0)
    
    for(let i=n-1;i>=0;i--){
        for(let j=0;j<32;j++){
            if(nums[i] & (1<<j)){
                last[j] = i
            }
            
            answer[i] = Math.max(answer[i],last[j]-i+1)
        }
    }
    
    return answer
    
};
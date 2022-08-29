function answerQueries(nums: number[], queries: number[]): number[] {
    
    nums.sort((a,b)=> a-b)
    
    let answers = Array(queries.length).fill(0)

    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    
    for(let i=0;i<queries.length;i++){
        
        let query = queries[i]
        let left = 0, right = nums.length - 1
        
        if(nums[0]>queries[i]) continue
        if(nums[right]<queries[i]){
            answers[i] = nums.length
            continue
        }
        
        while(left<=right){
            let mid = left + Math.floor((right-left)/2)
            
            if(nums[mid]==query || ( mid+1<nums.length &&  nums[mid] < query && query < nums[mid+1]) ){
                answers[i] = mid + 1
                break
            }
            else if(nums[mid]<query){
                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }
        
        
        if(answers[i] == 0) answers[i] = left + 1
    }
    
    
    
    return answers

};
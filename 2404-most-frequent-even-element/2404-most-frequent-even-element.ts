function mostFrequentEven(nums: number[]): number {
    
    let evenFreq = new Map<number,number>()
    
    let max = [-1,-1]
    
    for(let num of nums){
        if(num%2==0){
            if(!evenFreq.has(num)) evenFreq.set(num,0)
            let freq = evenFreq.get(num)+1
            if(freq>max[1]) {
                max[1] = freq
                max[0] = num
                
            } 
            else if(freq==max[1]){
                if(max[0]>num) max[0] = num
            }
            evenFreq.set(num,freq)
        }
    }
    
    
    return max[0]
    

};
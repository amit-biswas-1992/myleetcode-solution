function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {

    let map = new Map<number,number>()

    for(let num of nums1){
        for(let num2 of nums2){
            let sum = num + num2
            let freq = map.get(sum) ?? 0
            
            map.set(sum,freq+1)
        }
    }
    
    let count = 0
    
    for(let num of nums3){
        for(let num2 of nums4){
            let sum = num + num2
            if(map.has(0-sum)){
                count += map.get(0-sum)
            }
            
        }
    }
    
    
    
    return count
};
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let map: Map<number,number> = new Map()
    let stack: number[] = []
    
    for(let num of nums2){
        while(stack.length!=0 && stack[stack.length-1]<num){
            map.set(stack.pop(),num)
        }
        
        stack.push(num)
    }
    
    
    
    for(let i=0;i<nums1.length;i++){
        nums1[i] = map.get(nums1[i]) || -1
    }
    
    return nums1
    

};
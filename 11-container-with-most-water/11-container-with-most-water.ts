function maxArea(height: number[]): number {
    
    let max = -Infinity
    
    let left = 0;
    let right = height.length-1
    
    while(left<right){
        max = Math.max(max, Math.min(height[left],height[right])*(right-left))
        
        if(height[left]<height[right]){
            left++
        }
        else{
            right--
        }
    }
    
    return max
};
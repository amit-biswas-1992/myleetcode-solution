function trap(height: number[]): number {
    
    let n = height.length
    let leftMax = Array(n).fill(0)
    let rightMax = Array(n).fill(0)
    
    leftMax[0] = height[0]
    for(let i=1;i<n;i++){
        leftMax[i] = Math.max(height[i],leftMax[i-1])
    }
    rightMax[n-1] = height[n-1]
    
    for(let i=n-2;i>=0;i--){
        rightMax[i] = Math.max(height[i],rightMax[i+1])
    }
    
    
    
    let result = 0
    for(let i=1;i<n-1;i++){
        result += Math.min(leftMax[i],rightMax[i]) - height[i]
        
        
    }
    return result

};
class Solution {
    public int[] smallestSubarrays(int[] nums) {
        int n = nums.length;
        int[] last = new int[32];
        
        int[] answer = new int[n];
        Arrays.fill(answer,1);
        
        for(int i=n-1;i>=0;i--){
            
            for(int j=0;j<32;j++){
                if((nums[i] & (1<<j))>0){
                    last[j] = i;
                }
                
                answer[i] = Math.max(answer[i],last[j]-i+1);
                
            }
        }
        
        return answer;
        
        
            
            
        
    }
}
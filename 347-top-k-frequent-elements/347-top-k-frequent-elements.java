class Solution {
    public int[] topKFrequent(int[] nums, int k) {
            
        Map<Integer,Integer> freq = new HashMap<Integer,Integer>();
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>((a,b)->freq.get(a)-freq.get(b));
        
        for(int num : nums){
            freq.put(num,freq.getOrDefault(num,0)+1);
        }
        
        for(int val : freq.keySet()){
        
            pq.offer(val);
            
            if(pq.size()>k){
                pq.remove();
            }

            
        }
        
        int[] res = new int[k];
        
        int size = pq.size();
        
        for(int i=0;i<size;i++){
            res[i] = pq.poll();
        }
        
        return res;
    }
}
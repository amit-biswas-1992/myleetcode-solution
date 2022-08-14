function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number,number>();
    
    const pq = new MinPriorityQueue({priority: ([key,frequ]) => frequ});
    
        
        for(const num of nums){
            if(freq.get(num))
                freq.set(num,freq.get(num)+1)
            else
                freq.set(num,1)
        }
        
        for(const [key,frequency] of freq){
        
            pq.enqueue([key,frequency]);
            
            if(pq.size()>k){
                pq.dequeue();

            }

            
        }
        
        let res = Array(k).fill(0);
        
        let size = pq.size();
        
        for(let i=0;i<size;i++){
            let [key] = pq.dequeue().element;
            res[size-i-1]=key
        }
        
        return res;
};


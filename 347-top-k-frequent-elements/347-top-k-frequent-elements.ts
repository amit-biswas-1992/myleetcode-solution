function topKFrequent(nums: number[], k: number): number[] {
    const n = nums.length
    const freq = Array<number[]>(n+1)
    const map: Map<number,number> = new Map();
    
    for(const num of nums){
        if(!map.get(num))
            map.set(num,0)
            
        map.set(num,map.get(num)+1)
    }
    
    for(let i = 0; i < freq.length; i++) { 
        freq[i] = [];
    }
    
    
    
    for( const [key,frequency] of map.entries()){
        freq[frequency].push(key)
    }
    

    
    let taken = 0
    let res = []
    for(let i=n;i>=1;i--){
        if(freq[i].length!=0){

            for(const num of freq[i]){
                res[taken++] = num
                if(taken == k ) return res
            }
        }
    }
    
  
};


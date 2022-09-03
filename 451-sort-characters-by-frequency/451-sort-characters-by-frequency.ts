function frequencySort(s: string): string {
    let freqMap = new Map<string,number>()
    
    for(let char of s){
        if(!freqMap.has(char)) freqMap.set(char,0)
        freqMap.set(char,freqMap.get(char)+1)
    }
    
    let maxHeap = new MaxPriorityQueue( { priority : ([key,frequency]) => frequency})
    
    for(let entry of freqMap){
        maxHeap.enqueue(entry)
    }
    
    
    let output = ""
    while(!maxHeap.isEmpty()){
        let entry = maxHeap.dequeue().element
        for(let i=0;i<entry[1];i++){
            output += entry[0]
        }
        
    }
    
    return output
};
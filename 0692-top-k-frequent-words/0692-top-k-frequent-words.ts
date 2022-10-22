function topKFrequent(words: string[], k: number): string[] {
    
    //min heap so that whenever it is more than k elements in pq, we will remove the lowest frequency
    let pq = new PriorityQueue((a,b)=>{
        if(a[1]==b[1]){
            return (a[0].localeCompare(b[0])<0) ? 1 : -1
        }
        
        else return a[1]-b[1]
    })
    
    
    let map: Map<string,number> = new Map()
    
    for(let word of words){
        let freq = map.get(word) ?? 0
        
        map.set(word,freq+1)
    }
    
    
    for(let [key,frequency] of map.entries()){
        pq.enqueue([key,frequency])
        if(pq.size()>k)pq.dequeue()
    }
    
    
    let result = Array(k)
    
    while(!pq.isEmpty()){
        result[k-- - 1] = pq.dequeue()[0]
    }
    

    return result  
};


class PriorityQueue { 
    _values: any = [];
    _size: number = 0;
    _comparator: any = null;

    constructor(comparator = (a: any, b: any) => a - b) {
        this._comparator = comparator;
        this._size = 0;
        this._values = [];
    }

    enqueue(value: any) {
        this._values.push(value);
        this._size++;

        let idx = this._size - 1;
        let parentIdx = Math.floor((idx - 1) / 2);

        while (idx > 0 && this._comparator(this._values[parentIdx], this._values[idx]) > 0) {
            [this._values[parentIdx], this._values[idx]] = [this._values[idx], this._values[parentIdx]];
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }

        
    }

    dequeue() {
        if (this._size === 0) return -1;

        this._size--;

        if(this._size === 0) return this._values.pop();

        let removedValue = this._values[0];
        this._values[0] = this._values.pop();

        let idx = 0;

        while (idx < this._size && idx < Math.floor(this._size / 2)) {
            let leftIdx = idx * 2 + 1, rightIdx = idx * 2 + 2;
            if (rightIdx === this._size) {
              if (this._comparator(this._values[leftIdx], this._values[idx]) > 0) break;
              [this._values[leftIdx], this._values[idx]] = [this._values[idx], this._values[leftIdx]];
              idx = leftIdx;
            } else if (this._comparator(this._values[leftIdx], this._values[idx]) < 0 || this._comparator(this._values[rightIdx], this._values[idx]) < 0) {
              if (this._comparator(this._values[leftIdx], this._values[rightIdx]) <= 0) {
                [this._values[leftIdx], this._values[idx]] = [this._values[idx], this._values[leftIdx]];
                idx = leftIdx;
              } else {
                [this._values[rightIdx], this._values[idx]] = [this._values[idx], this._values[rightIdx]];
                idx = rightIdx;
              }
            } else {
              break;
            }
          }

        return removedValue;

    }

    peek() {
        return this._values[0];
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this._size === 0;
    }

    print() {
        console.log(this._values);
    }
    

}
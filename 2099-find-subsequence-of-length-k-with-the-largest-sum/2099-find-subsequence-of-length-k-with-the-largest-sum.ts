function maxSubsequence(nums: number[], k: number): number[] {
    
    let pq = new PriorityQueue((a,b)=>a[0]-b[0])
    let freq: Map<number,number> = new Map()
    
    let numsIndex = Array(nums.length).fill(null)
    
    for(let i=0;i<nums.length;i++){
        numsIndex[i] = [nums[i],i]
    }
    
    
    for(let num of numsIndex){
        pq.enqueue(num)
        
        if(pq.size()>k){
            pq.dequeue()
        }
    }
    
    
    let arr = Array(k).fill(null)
    
    let j = 0
    while(!pq.isEmpty()){
        arr[j++] = pq.dequeue()
    }
    
    arr.sort( (a,b) => a[1]-b[1])
   
    j = 0
    let ans = Array(k).fill(-1)
    
    for(let i=0;i<k;i++){
        
        ans[j++] = arr[i][0]
    }
    
    return ans
    
    
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
function maxSubsequence(nums: number[], k: number): number[] {
    
    let pq = new PriorityQueue((a,b)=>a-b)
    let freq: Map<number,number> = new Map()
    
    for(let num of nums){
        pq.enqueue(num)
        
        if(pq.size()>k){
            pq.dequeue()
        }
    }
    
    
    while(!pq.isEmpty()){
        let num = pq.dequeue()
        if(!freq.has(num)) freq.set(num,0)
        
        let curFreq = freq.get(num)
        
        freq.set(num,curFreq+1)
    }
    
    let j = 0
    let ans = Array(k).fill(-1)
    
    for(let i=0;i<nums.length;i++){
        
        if(freq.has(nums[i])){
            ans[j++] = nums[i]
            freq.set(nums[i],freq.get(nums[i])-1)
            
            if(freq.get(nums[i])==0) freq.delete(nums[i])
        }
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

        while(idx < this._size/2) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallerIdx = leftIdx;

            if (rightIdx < this._size && this._comparator(this._values[leftIdx], this._values[rightIdx]) > 0) {
                smallerIdx = rightIdx;
            }

            if (this._comparator(this._values[idx], this._values[smallerIdx]) > 0) {
                [this._values[idx], this._values[smallerIdx]] = [this._values[smallerIdx], this._values[idx]];
                idx = smallerIdx;
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
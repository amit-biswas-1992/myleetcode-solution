class MedianFinder {
        maxHeap = new MaxPriorityQueue({priority: (val) => val})
        minHeap = new MinPriorityQueue({priority: (val) => val})
    
    constructor() {
        

    }

    addNum(num: number): void {
        //it will also handle the initial empty case of both heap
        //if equal then maxHeap = the first Heap will get priority
        //maxHeap will have equal or more items comparing the minHeap
        //if the number is smaller than maxHeap, it will be inserted in maxHeap
        if(this.maxHeap.size()==0 || this.maxHeap.front().element > num){
            this.maxHeap.enqueue(num)
        }
        else{
            this.minHeap.enqueue(num)
            
        }


        //balancing
//max heap will be equal or bigger
        if(this.maxHeap.size() < this.minHeap.size()){
                let top = this.minHeap.dequeue().element
                this.maxHeap.enqueue(top)
            }
//depth diff will be max 1
        else if(this.maxHeap.size()>this.minHeap.size()+1){
            let top = this.maxHeap.dequeue().element
            this.minHeap.enqueue(top)
        }
        
        

    }

    findMedian(): number {
        
        if(this.maxHeap.size()==this.minHeap.size()){
            return (this.maxHeap.front().element + this.minHeap.front().element) / 2
        }
        else return this.maxHeap.front().element

    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


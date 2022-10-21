function findRedundantConnection(edges: number[][]): number[] {
    
    let uf = new UnionFind(edges.length)
    
    for(let [u,v] of edges){
        let flag = uf.union(u,v)
        
        if(flag==false) return [u,v]
        
    }

};


class UnionFind{
    
    size: number
    parent: number[]
    rank: number[]

    constructor(n: number){
        this.size = 0
        this.parent = Array(n)
        this.rank = Array(n)
        for(let i=0;i<n;i++){
            this.parent[i] = i
            this.rank[i] = 0
        }
    }

    find(x: number){
        if(x!=this.parent[x]) 
            this.parent[x] = this.find(this.parent[x])
        return this.parent[x]
    }

    union(a: number, b: number){
        let p1 = this.find(a)
        let p2 = this.find(b)
        
        if(p1!=p2){
            if(this.rank[p1]>this.rank[p2]){
                this.parent[p2] = p1
            }
            else if(this.rank[p1]<this.rank[p2]){
                this.parent[p1] = p2
                
            }
            else{
                this.parent[p2] = p1
                this.rank[p1]++
            }
            
            
        }
        else{
            return false
        }
        
        return true
        
    }



}
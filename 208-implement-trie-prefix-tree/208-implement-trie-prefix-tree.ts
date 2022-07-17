class TrieNode {
    isEnd : boolean
    child : TrieNode[]

    constructor() {
        this.isEnd = false
        this.child = Array(26)

    }
}

class Trie {
    
    root: TrieNode
    
    constructor(){
        this.root = new TrieNode()
    }

    insert(word: string): void {
        
        let node = this.root
        
        for(let i=0;i<word.length;i++){
            let index = word.charCodeAt(i)-97
            if(!node.child[index]){
                node.child[index] = new TrieNode()
                
            }
            
            node = node.child[index]
            
        }

        node.isEnd = true
    


    }

    search(word: string): boolean {
        
        let node = this.root
        
        for(let i=0;i<word.length;i++){
            
            let index = word.charCodeAt(i)-97
            if(!node.child[index]){
                return false
                
            }
            
            node = node.child[index]
            
        }
        return node.isEnd == true ? true : false
    }

    startsWith(prefix: string): boolean {
        let node = this.root
        for(const char of prefix){
            let index = char.charCodeAt(0)-97
            console.log(index)
            if(!node.child[index]){
                return false
            }
            node = node.child[index]
        }
        return true

    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
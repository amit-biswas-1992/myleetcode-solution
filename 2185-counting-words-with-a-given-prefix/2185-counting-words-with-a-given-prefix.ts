//straight forward solution will be loop through all words and check if that word has the prefix with given pref. if yes, count++
// TC(words.length*prev.length) , SC = O(1)
//with Trie: TC = words.length*avg word length + pref.length

function prefixCount(words: string[], pref: string): number {
    
    let trie = new Trie()
        
    for(const word of words){
        trie.insert(word)
    }
    
    let curr = trie.root
    
    for(let i=0;i<pref.length;i++){
        
        let index = pref.charCodeAt(i)-97
        if(!curr.child[index]) return 0
        
        curr = curr.child[index]
        
    }
    
    return curr.count
    
};


class TrieNode{
    child: TrieNode[]
    count : number
    
    constructor(){
        this.count = 0
        this.child = Array(26)
    }
}


class Trie{
    root : TrieNode
    
    constructor(){
        this.root = new TrieNode()
    }

    insert(word: string){
        
        let curr = this.root
        
        for(let i=0;i<word.length;i++){
            
            let index = word.charCodeAt(i)-97
            if(!curr.child[index]){
                curr.child[index] = new TrieNode()
            }
                    
            curr = curr.child[index]
            curr.count++
        }
        
    }
}



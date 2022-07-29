function findWords(board: string[][], words: string[]): string[] {
    
    let m = board.length
    let n = board[0].length
    
    let trie = new Trie()
    
    let root = trie.root
        
    let result = []
    
    for(let word of words){
        trie.insert(word)
    }
    
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
                
            recursive(board,i,j,root,result)
                    
        }
    }
    
    return result
        
    
};

function recursive(board: string[][],i:number,j:number,curr: TrieNode, result: string[]){
    
    if(curr.isEnd==true){
        result.push(curr.word)
        curr.isEnd = false
    }
    
    if(i<0 || j<0 || i==board.length || j==board[0].length || board[i][j]=='#') return
    
    let ch = board[i][j]
    
    let index = ch.charCodeAt(0)-97
    
    if(curr.child[index]==null) return
    
    curr = curr.child[index]
    
    
    board[i][j]='#'
    
    recursive(board,i+1,j,curr,result)
    recursive(board,i-1,j,curr,result)
    recursive(board,i,j+1,curr,result)
    recursive(board,i,j-1,curr,result)
    
    board[i][j]=ch
    
    
    
}


class TrieNode{
    child : TrieNode[]
    isEnd : boolean
    word : string
    
    constructor(){
        this.child = Array(26).fill(null)
        this.isEnd = false
    }
}


class Trie{
    root: TrieNode
    
    constructor(){
        this.root = new TrieNode()
    }

    insert(word: string){
        let curr = this.root
        
        for(const ch of word){
            let index = ch.charCodeAt(0)-97
            
            if(curr.child[index]==null) curr.child[index] = new TrieNode()
            curr = curr.child[index]
        }
        curr.isEnd = true
        curr.word = word
    }
}
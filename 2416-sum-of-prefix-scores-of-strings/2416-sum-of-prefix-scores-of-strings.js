function sumPrefixScores(words) {

    let result = Array(words.length).fill(0)
    let trie = new Trie()
    for(let word of words){
        trie.insert(word)
    }
    let i=0
    for(let word of words){
        result[i++] = trie.getScore(word)
    }
    
    return result
    
};


//trie with array
class TrieNode {
    
    constructor() {
        this.children = {};
       
        this.score = 0
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let current = this.root;
        for (let ch of word) {
            if (!current.children[ch]) {
                current.children[ch] = new TrieNode()
            }
            
            current = current.children[ch]

            current.score++
        }
        
    }
    getScore(word) {
        let score = 0
        let current = this.root;
        for (let ch of word) {
            if (!current.children[ch]) {
                return score;
            }
            score += current.children[ch].score
            current = current.children[ch];
        }
        return score
    }
    
}
//straight forward solution will be loop through all words and check if that word has the prefix with given pref. if yes, count++
// TC(words.length*prev.length) , SC = O(1)
//with Trie: TC = words.length*avg word length + pref.length

function prefixCount(words: string[], pref: string): number {
   
    return words.filter( w => w.startsWith(pref)).length
  
};


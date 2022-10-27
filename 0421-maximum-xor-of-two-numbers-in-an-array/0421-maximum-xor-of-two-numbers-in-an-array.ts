function findMaximumXOR(nums: number[]): number {
  let trie = new Trie();
    
  for (let num of nums) {
    trie.insert(num);
  }

  let max = 0;

  for (let num of nums) {
    let currentSum = 0;
    let node: TrieNode = trie.root;

    for (let i = 31; i >= 0; i--) {
      let requiredBit = 1 - ((num >> i) & 1);
      if (!node[requiredBit]) {
        node = node[1 - requiredBit];
      } else {
        currentSum |= 1 << i;
        node = node[requiredBit];
      }
    }

    max = Math.max(max, currentSum);
  }

  return max;
}

type TrieNode = { [key: number]: TrieNode };

class Trie {
  root: TrieNode;

  constructor() {
    this.root = {};
  }

  insert(num: number) {
    
    let current: TrieNode = this.root;
      
    for(let i = 31; i >= 0; i--) {
      
      let currentBit = (num >> i) & 1;

      if (!current[currentBit]) {
        current[currentBit] = {};
      }

      current = current[currentBit];
    }
  }
}

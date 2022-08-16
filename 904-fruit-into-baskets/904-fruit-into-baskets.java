//OC = O(n) + O(n) = O(n)
//SC = O(1) -> map will have just size of maximum 3

class Solution {
    public int totalFruit(int[] fruits) {
        
        int n = fruits.length;
        
        int windowStart = 0;
        int maxFruit = 0;
        
        Map<Integer,Integer> fruitFrequencyMap = new HashMap<>();
        
        
        
        for(int windowEnd = 0; windowEnd<n; windowEnd++){
            
            int fruit = fruits[windowEnd];
            
            fruitFrequencyMap.put(fruit,fruitFrequencyMap.getOrDefault(fruit,0)+1);
            
            while(fruitFrequencyMap.size()>2){
                
                int windowStartFruit = fruits[windowStart];
                
                windowStart++;
                fruitFrequencyMap.put(windowStartFruit,fruitFrequencyMap.get(windowStartFruit)-1);
                
                if(fruitFrequencyMap.get(windowStartFruit) == 0)
                    fruitFrequencyMap.remove(windowStartFruit);
                
                
            }
            
            
            maxFruit = Math.max(maxFruit,windowEnd-windowStart+1);
            
        }
        
        return maxFruit;
    }
}
function largestWordCount(messages: string[], senders: string[]): string {
    let map: Map<string,number> = new Map()
    
    let maxSender = ""
    
    for(let i=0;i<messages.length;i++){
        let message = messages[i]
        let messageLength = message.split(" ").length
        let sender = senders[i]
        
        let currentMsgCount =  (map.get(sender) ?? 0) + messageLength


        
        map.set(sender,currentMsgCount)
        
        
        if(!maxSender ||  map.get(maxSender)<currentMsgCount ||  ( map.get(maxSender) == currentMsgCount && [maxSender,sender].sort()[1] == sender)){
            maxSender = sender

        }
        
    }
    
    
    return maxSender
};
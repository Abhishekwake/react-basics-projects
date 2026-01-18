import { ChatMessage } from './ChatMessage';
import {useRef,useEffect} from 'react';
 export function ChatMessages({ chatMessages }) { 
       const chatMessagesRef=useRef(null);
        useEffect(()=>{
            const containerEle = chatMessagesRef.current;
            if(containerEle){
            containerEle.scrollTop= containerEle.scrollHeight;
            console.log("UPDATED");
            }
           
        },[chatMessages])
        // instead of making components Pass direct { Code }
        return (
          <div className="chat-messages-container " ref={chatMessagesRef}> 
            {chatMessages.map((chatMessage) => {
              return (  
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }
   
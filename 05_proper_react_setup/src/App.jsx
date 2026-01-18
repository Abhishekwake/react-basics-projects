import { useState} from 'react'
import {Chatbot} from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import {ChatMessage} from "./components/ChatMessage";
import './index.css'
      function App() {
        const [chatMessages, setChatMessages] = useState([
          {
            message: "Hello Chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can I help you",
            sender: "robot",
            id: "id2",
          },
          {
            message: "can u get me todays date",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is October 10, 2023",
            sender: "robot",
            id: "id4",
          },
        ]);
        return (
          <div className="app-container">
            
            <ChatMessages 
            chatMessages={chatMessages}
             />

             <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }
export default App

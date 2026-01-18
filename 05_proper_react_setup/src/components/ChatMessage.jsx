import Robotimage from '../assets/robot.png'
import Userimage from '../assets/robot.png'
 export function ChatMessage({ message, sender }) {
        
        return (
          <div className={ 
                sender === 'user' 
                ? 'chat-message-user'
                : 'chat-message-robot'
          }>
            
            {sender === "robot" && <img src={Robotimage} className="chat-message-profile" />}
            <div className="chat-message-text">
            {message}
            </div>
            {sender === "user" && <img src={Userimage}className="chat-message-profile" />}
          </div>
        );
      }



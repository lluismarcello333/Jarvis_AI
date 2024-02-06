import React, { useEffect, useState } from "react";
import "./ChatMessage.css";
import Avatar from "../../assets/icons/iconJarvis.png";
import UserAvatar from "../../assets/icons/Iron_Man.png";

const ChatMessage = ({ message }) => {
  const [newMessage, setNewMessage] = useState(false);

  useEffect(() => {
    // Atualizar o estado newMessage apenas para mensagens do servidor
    if (message.user === "gpt") {
      const timeoutId = setTimeout(() => {
        setNewMessage(true);
      }, 100); 

      return () => clearTimeout(timeoutId); // Limpar o timeout quando o componente for desmontado
    }
  }, [message.user]);

  return (
    <div className={`chat-message ${message.user === 'gpt' ? "chatgpt" : "user"} ${newMessage ? "new-message" : ""}`}>
      <div className='chat-message-center'>
        {message.user === "gpt" ? (
          <>
            <div className={`message ${message.user === 'gpt' ? "white-text" && "align-right" : "black-text" && "align-left"}`}>
              {message.message}
            </div>
            <div className={`avatar ${message.user === 'gpt' ? "chatgpt" : "user"}`}>
              <img src={Avatar} alt="Avatar" />
            </div>
          </>
        ) : (
          <>
            <div className={`avatar ${message.user === 'gpt' ? "chatgpt" : "user"}`}>
              <img src={UserAvatar} alt="User Avatar" />
            </div>
            <div className={`message ${message.user === 'gpt' ? "white-text" : "black-text"}`}>
              {message.message}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
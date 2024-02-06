import React, { useEffect, useRef, useState } from "react";
import { makeRequest } from "./api/api";
import Avatar from "./assets/staticJarvis.png";
import ChatMessage from "./components/ChatMessage/ChatMessage";
import "./styles/App.css";
import "./styles/reset.css";
import Header from "./components/Header/Header";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Como posso te ajudar hoje?",
    },
  ]);

  // Ref para a div que contém as mensagens
  const chatLogRef = useRef(null);

  useEffect(() => {
    chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
  }, [chatLog]);

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await makeRequest({ prompt: input });

    response = response.data.split("\n").map((line) => <p>{line}</p>);

    setChatLog([
      ...chatLog,
      { user: "me", message: `${input}` },
      {
        user: "gpt",
        message: response,
      },
    ]);

    for (let i = 0; i < response.length; i++) {
      await typeResponse(response[i]);
    }

    setInput("");
  }

  async function typeResponse(line) {
    for (let i = 0; i <= line.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 20));
      setChatLog((prevLog) => [
        ...prevLog.slice(0, -1),
        { user: "gpt", message: line.slice(0, i), newMessage: true }, 
      ]);
    }
  }

  return (
    <div className="App">
      <div className="background-container">
        <img src={Avatar} className="avatar-image" alt="Avatar" />
      </div>
      <section className="chatbox">
        <Header/>
        <div className="chat-log" ref={chatLogRef}>
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              className="chat-input-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
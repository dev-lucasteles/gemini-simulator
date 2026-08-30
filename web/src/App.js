import './styles/App.css';
import './styles/reset.css'
import { makeRequest } from './api/api';
import { useState } from 'react'
import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';

function App() {

      const[input, setInput] = useState("")
      const[chatlog, setChatlog] = useState([{user: "gemini", message: "como posso te ajudar hoje?"}])

  async function handleSubmit(e) {
  e.preventDefault();
  if (!input.trim()) return;

  try {
    const responseData = await makeRequest({ prompt: input });

    const formattedResponse = responseData.data
      .split('\n')
      .map((line, idx) => <p key={idx}>{line}</p>);

    setChatlog(prevChatlog => [
      ...prevChatlog,
      { user: 'me', message: input },
      { user: 'gemini', message: formattedResponse }
    ]);
  } catch (err) {
    console.error(err);
    setChatlog(prevChatlog => [
      ...prevChatlog,
      { user: 'me', message: input },
      { user: 'gemini', message: 'Houve um erro ao se comunicar com o servidor.' }
    ]);
  }

  setInput("");
}

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className='chatbox'>
        <div className='chat-log'>
          {chatlog.map((message, index) => (
            <ChatMessage
            key={index}
            message = {message}/>
          ))}
        </div>
        <div className='chat-input-holder'>
            <form onSubmit={handleSubmit}>
              <input rows='1' className='chat-input-text-area' value={input} onChange={e =>setInput(e.target.value)}/>
            </form>
        </div>
      </section>
    </div>
  );
}

export default App;

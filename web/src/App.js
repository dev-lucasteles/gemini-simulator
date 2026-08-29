import './styles/App.css';
import './styles/reset.css'
import { makeRequest } from './api/api';
import {useState} from 'react'
import { SideMenu } from './components/SideMenu/SideMenu';


function App() {

      const[input, setInput] = useState("")
      const[chatlog, setChatlog] = useState([{user: "gemini", message: "como posso te ajudar hoje?"}])

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <h1>
        App Works!
      </h1>
    </div>
  );
}

export default App;

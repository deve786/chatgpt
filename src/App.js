
import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [collapse, setCollapse] = useState(false)
  // const [collapseSide, setCollapseSide] = useState(false)
  const [message, setMessage] = useState([
    {
        text: 'Hiii......',
        isBot: true
    }
])

  return (
    <div className="App min-h-screen  ">
      <Navbar data={setCollapse} />
      <div className='flex '>
        <Sidebar data={collapse} data1={message}/>
        <Main data={setCollapse} data1={message} data2={setMessage}/>
        
      </div>
    </div>
  );
}

export default App;

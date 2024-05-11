
import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [collapse, setCollapse] = useState(false)
  return (
    <div className="App min-h-screen  ">
      <Navbar/>
      <div className='flex '>
        <Sidebar data={collapse}/>
        <Main data={setCollapse}/>
        
      </div>
    </div>
  );
}

export default App;


import './App.css'
import Main from './components/main'
import React, {useMemo, useState , useCallback, useEffect} from 'react';

function App() {
 const [bgColor, setBgColor] = useState(() => {
         return JSON.parse(localStorage.getItem("bgColor")) || ["#ffffff", "#000000"];
     });
         
         useEffect(() => {
             localStorage.setItem("bgColor", JSON.stringify(bgColor));
         }, [bgColor]);
 
  return (
    <div className='container' style={{backgroundImage: `linear-gradient(to top, ${bgColor[0]}, ${bgColor[1]})`}}>
      <h2>Cor de fundo</h2>
      <div className='colors'>
        
      <input type="color" onChange={e => setBgColor([e.target.value, bgColor[1]])} />
      <input type="color" onChange={e => setBgColor([bgColor[0], e.target.value])} />
      </div>
     

        <Main/>
      
    </div>
  )
}

export default App

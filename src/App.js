import React from 'react';
import './App.css';
import Start from './pages/Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from './pages/Weather';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path='/start' element={<Start/>}/>
            <Route path='/weather' element={<Weather/>}/>
            <Route path='*' element={<Start/>}/>

        </Routes>
      </BrowserRouter>
    </div>
        
  );
}

export default App;

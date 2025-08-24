import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router";
import Cards from './Cards'; 
import Tabelas from './Tabelas';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
         <Route path="/" Component={Cards} />
         <Route path="/criar-conta" Component={Tabelas} />
      </Routes>
        
        
    </>
  )
}

export default App


import './App.css'
import { Route, Routes } from "react-router-dom";
import Cards from './Cards'; 
import Tabelas from './Tabelas';
function App() {


  return (
    <div>
      <Routes>
         <Route path="/cards" Component={Cards} />
         <Route path="/tabelas" Component={Tabelas} />
      </Routes>
    </div>
      
  )
}

export default App

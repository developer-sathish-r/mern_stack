import Home from "./components/Dashboard";
import Login from "./components/Login";
import {  Routes, Route, } from "react-router-dom";
import { useSelector } from 'react-redux';
import Dashboard from "./components/Dashboard";
import './App.css';
import Upload from "./components/Upload";
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  const login = useSelector((Item) => Item.login);

  return(
    <>
    
     {login ?
        <Dashboard />
       
        :
     <Routes>
     <Route exact path="/"element={<Login />}/>
   </Routes>
     }
   


 
    </>
  )
}

export default  App;
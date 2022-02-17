import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import NewReg from './components/NewReg';
import About from './components/About';
import UserList from './components/UserList';
import Header from './components/Header';
import Menu from './components/Menu';
import Update from './components/UpdateStudent';
import React,{useState, useEffect}  from 'react';
import {  BrowserRouter,  Routes,  Route, Navigate} from 'react-router-dom';

function App() {
  const [id,setId] = useState(null);
  const [updateStudent , setUpdateStident] = useState(null);
  return (

    <BrowserRouter>
    <div className="Wrapper">
    {id && <Header />}
    {id && <Menu /> }
     <Routes>      
       {/* <Route path="/" element={<Dashboard />} >       
       </Route>    */}
        <Route path="/" element={id ? <Home id={id}/> : <Navigate to= "/login" replace={true} /> } />
       <Route path="/About" element={id ? <About /> : <Navigate to= "/login" replace={true} />} />
       <Route path="/update" element={id ? < Update student = {updateStudent}/> : <Navigate to= "/login" replace={true} />} /> 
       <Route path="/login" element={<Login setId={setId}/>} />
       <Route path="/NewReg" element={id ? <NewReg /> : <Navigate to= "/login" replace={true} /> } />
       <Route path="/UserList" element={id ? <UserList update = {setUpdateStident}/> : <Navigate to= "/login" replace={true} />} />
       
      </Routes>
      {/* <Footer /> */}
    
    </div>
    </BrowserRouter>
  );
}

export default App;

import Hompage from './Pages/Hompage';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Hompage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}/>
         
        <Route path="/dashboard" element={
              (user && user._id) ? (<Dashboard user={user} />) : (<Login setLoginUser={setLoginUser}/>)
            }/>

      </Routes>
    </div>
  )
}

export default App

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import {Routes, Route} from 'react-router-dom'
import './App.css'
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}

export default App;

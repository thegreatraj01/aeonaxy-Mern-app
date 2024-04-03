import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route } from 'react-router-dom';
import Profile from "./Pages/Profile";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/*' element={<h1>page not found</h1>} />

      </Routes>
    </div>

  );
}

export default App;

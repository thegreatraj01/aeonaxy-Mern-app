import Login from "./Pages/Login";
import { Routes, Route } from 'react-router-dom';
// import Header from "./Components/Header";


function App() {
  return (

    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

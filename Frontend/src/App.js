import Login from "./Pages/Login";
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;

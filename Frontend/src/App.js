import Login from "./Pages/Login";
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;

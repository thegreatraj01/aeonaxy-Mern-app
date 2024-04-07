import Login from "./Pages/Login";
import { Routes, Route } from 'react-router-dom';
import Profile from "./Pages/Profile";
import Option from "./Pages/Option";
import EmailVerify from "./Pages/EmailVerify";
import MyState from "./contextApi/MyState.jsx";
import NotFoundPage from "./Pages/Nopage.jsx";

function App() {
  const logedin = localStorage.getItem("login");

  return (
    <div>
      <MyState>
        <Routes>
          {!logedin && <Route path="/" exact element={<Login />} />}
          {!logedin && <Route path="/login" element={<Login />} />}
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/option' element={<Option />} />
          <Route path='/profile/verify' element={<EmailVerify />} />
          {logedin && <Route path='/' element={<EmailVerify />} />}
          <Route path='/*' element={<NotFoundPage />} />

        </Routes>
      </MyState>
    </div>

  );
}

export default App;

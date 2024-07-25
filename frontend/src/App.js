import './App.css';
import { Route  , Routes} from 'react-router-dom';
import HomePage from './pages/Home/HomePage.js';
import LoginPage from './pages/Auth/LoginPage.js';
import SignUpPage from './pages/Auth/SignUpPage.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

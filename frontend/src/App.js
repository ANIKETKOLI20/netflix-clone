import './App.css';
import { Navigate, Route  , Routes} from 'react-router-dom';
import HomePage from './pages/Home/HomePage.js';
import LoginPage from './pages/Auth/LoginPage.js';
import SignUpPage from './pages/Auth/SignUpPage.js';
import Footer from './components/Footer.js';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authUser.js';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';

function App() {
  const { user , isCheckingAuth , authCheck } = useAuthStore()
  console.log("user is " , user)

  useEffect(() => {
    authCheck()
  } , [authCheck])

  if(isCheckingAuth){ // to hide signup page wjile loading by authentcated user
    return (
      <div className='h-screen'>
        <div className='flex justify-center items-center bg-black h-full'>
          <Loader className='animate-spin text-red-600 size-10'/>
        </div>
      </div>
    )
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={ !user ?  <LoginPage/> : <Navigate to={"/"} /> }/>
      <Route path="/signup" element={!user ? <SignUpPage/> : <Navigate to={"/"} />}/>
    </Routes>
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;

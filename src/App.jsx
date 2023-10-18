import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// pages 
import Dashbord from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import NotFound from './pages/NotFound';
function App() {

  const routes = useRoutes([
    { path: '/', element: <Dashbord /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/signin', element: <SignIn /> },
    // any other
    { path: '*', element: <NotFound /> },
  ]);


  return (
  
    <div className="">
    {/* <Navbar /> */}
      {routes}
    {/* <Footer /> */}
    </div>
  );
}

export default App
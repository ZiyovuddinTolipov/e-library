import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// pages 
import HomePage from './pages/Home';
import Dashbord from "./pages/User"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import NotFound from './pages/NotFound';
import LibraryPage from "./pages/Library"
import Test from "./pages/Test"
// user pages 
import UserPage from "./pages/UserPages"
function App() {

  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/test', element: <Test /> },
    { path: '/library', element: <LibraryPage /> },
    { path: '/admin', element: <Dashbord /> },
    { path: '/user', element: <UserPage /> },
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
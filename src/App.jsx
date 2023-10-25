import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// pages 
import HomePage from './pages/Home';
import Admin from "./pages/Admin"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import NotFound from './pages/NotFound';
import LibraryPage from "./pages/Library"
import GetBooks from "./pages/GetBooks"
import SendAdminMessage from "./pages/SendAdminMessage"
import Test from "./pages/Test"
import About from "./pages/About"
import { ToastContainer } from "react-toastify"
// user pages 
import UserPage from "./pages/UserPages"
function App() {

  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/test', element: <Test /> },
    { path: '/about', element: <About /> },
    { path: '/getbook', element: <GetBooks /> },
    { path: '/sendmessage', element: <SendAdminMessage /> },
    { path: '/library', element: <LibraryPage /> },
    { path: '/admin', element: <Admin /> },
    { path: '/user', element: <UserPage /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/signin', element: <SignIn /> },
    // any other
    { path: '*', element: <NotFound /> },
  ]);


  return (

    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      {/* <Navbar /> */}
      {routes}
      {/* <Footer /> */}
    </div>
  );
}

export default App
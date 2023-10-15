import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import Login from "./pages/Login"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import CreateBlog from "./pages/CreateBlog"
import Details from "./pages/Details"
import Profile from "./pages/Profile"
import Edit from "./pages/Edit"
const HeaderLayout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </ >
}
const routes = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      }
      , {
        path: "/create",
        element: <CreateBlog />
      }
      , {
        path: "/:id",
        element: <Details />
      },
      , {
        path: "/profile",
        element: <Profile />
      }
      , {
        path: "/edit/:id",
        element: <Edit />
      }
    ]
  }

])
function App() {

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App

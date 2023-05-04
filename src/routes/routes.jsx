
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Recipe from "../pages/Recipe/Recipe";
import LoginPage from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/recipe/:id',
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-firebase-assignment-10-anik12136.vercel.app/chefs/${params.id}`)
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },




    ]
  },
])

export default router;
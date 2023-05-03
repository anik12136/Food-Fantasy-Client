
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Recipe from "../pages/Recipe/Recipe";
import Banner from "../pages/Home/Home/Banner";
import Chefs from "../pages/Home/Chefs/Chefs";
import LoginPage from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";

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
        element: <Recipe></Recipe>,
        loader: ({ params }) => fetch(`http://localhost:3000/chefs/${params.id}`)
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },




    ]
  },
])

export default router;
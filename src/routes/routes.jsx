
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Recipe from "../pages/Recipe/Recipe";
import Banner from "../pages/Home/Home/Banner";
import Chefs from "../pages/Home/Chefs/Chefs";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/recipe/:id',
          element : <Recipe></Recipe>
        },
        {
          path : '/login',
          element : <Recipe></Recipe>
        },
        {
          path : '/registration',
          element : <Recipe></Recipe>
        },

        
        

      ]
    },
  ])

  export default router;
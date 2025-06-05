import { createBrowserRouter} from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index:true , element: <HomePage></HomePage>
        },
        {
          path: '/category/:id',
          element: <CategoryPage/>
        }
    ]
  },
]);

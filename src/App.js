import { Body } from "./components/Body";
import Header from "./components/Header";
import Error from './components/Error';
import About from "./components/About";
import { createBrowserRouter , Outlet} from 'react-router-dom';
import Contact from './components/Contact';
import RestaurentMenu from "./components/RestaurentMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
// import Glosory from "./components/Glosory";

const  App = () => {
   
    return(
        <>
    <Header />
    <Outlet />
    
        </>
    )
}

const Glosory = lazy(()=> import("./components/Glosory"))

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // Corrected from Element to element
    errorElement: <Error/>,
    children : [
        {
            path:'/',
            element : <Body/>,
            errorElement:<Error/>
        },
        {
            path: '/about',
            element: <About />,  // Corrected from Element to element
            errorElement: <Error/>
          },
          {
            path: '/contact',
            element: <Contact />,  // Corrected from Element to element
            errorElement: <Error/>
          },
          {
            path:'/restaurents/:resId',
            element:<RestaurentMenu />
          },
          {
            path:'/glosory',
            element:<Suspense fallback={<Shimmer />}><Glosory /></Suspense>
          }
    ]
  },
  {
    path: '/about',
    element: <About />,  // Corrected from Element to element
    errorElement: <Error/>
  },
  {
    path: '/contact',
    element: <Contact />,  // Corrected from Element to element
    errorElement: <Error/>
  },
]);



export default App;
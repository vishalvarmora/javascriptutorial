import React, { Suspense } from 'react'
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from 'react-router-dom';
// import Classcompointro from './Classcompo/';
import Navbar from './Navbar';
import Homes from './Homes';
import Contact from './Contact';
import Abouts from './Abouts';
import Example from './Example';
const Classcomporoutes = React.lazy(() => import("./Classcompo/Classcomporoutes"))


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /></>,
    },
    {
        path: "/home",
        element: <><Navbar /><Homes /></>
    },
    {
        path: "/about",
        element: <><Navbar /><Abouts /></>
    },
    {
        path: "/contact",
        element: <><Navbar /><Contact /></>
    },
    {
        path: "/example",
        element: <><Navbar /><Example /></>,
        children: [
            {
                path: "Classcompo/*",
                element: <>
                <Suspense fallback={<h1>Loading..</h1>}><Classcomporoutes /></Suspense></>
            }
        ]
    },

]);
export default MainRouter
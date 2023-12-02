import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Contacts from '../Pages/Contacts';
import Blogs from '../Pages/Blogs';
import About from '../Pages/About';
const RoutingPgaes = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/project",
            element: <Projects />
        },
        {
            path: "/contact",
            element: <Contacts />
        },
        {
            path: "/blog",
            element: <Blogs />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/*",
            element: <h2>Your page is not found</h2>,
        }
    ]
}])

export default RoutingPgaes;
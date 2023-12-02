import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
const RoutingPgaes = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children:[
        {
            path: "/",
            element: <h2>This is home page</h2>
        },
        {
            path: "/project",
            element: <h2>This is Projcet page</h2>
        },
        {
            path: "/contact",
            element: <h2>This is Contact page</h2>
        },
        {
            path: "/blog",
            element: <h2>This is Blog page</h2>
        },
        {
            path: "/about",
            element: <h2>This is About page</h2>,
        },
        {
            path: "/*",
            element: <h2>Your page is not found</h2>,
        }
    ]
}])

export default RoutingPgaes;
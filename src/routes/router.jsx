import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import AddUser from '../pages/AddUser';
import AllUser from '../pages/AllUser';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            children: [
                {
                    path: '/',
                    element: <AllUser></AllUser>,
                    // loader: () => fetch('http://localhost:5000/users')
                },
                {
                    path: '/adduser',
                    element: <AddUser></AddUser>
                }
            ]
        },

    ]
)

export default router;
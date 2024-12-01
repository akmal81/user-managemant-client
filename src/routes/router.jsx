import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import AddUser from '../pages/AddUser';
import AllUser from '../pages/AllUser';
import UpdateUser from '../pages/UpdateUser';


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
                },
                {
                    path:'/update/:id',
                    element:<UpdateUser></UpdateUser>,
                    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
                }
            ]
        },

    ]
)

export default router;
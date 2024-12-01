import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../provider/UserProvider';
import UserTable from '../components/UserTable';
import Navigate from '../components/Navigate';

const AllUser = () => {
    // way -1
    // const allUser = useLoaderData();
    
    // const [users, setUsers] = useState();

    // const handleDelete = (id) =>{
    //     fetch(`http://localhost:5000/users/${id}`,{
    //         method:'DELETE'
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         const remainingUsers = users.filter(user=>user._id!==id)
    //         setUsers(remainingUsers)
    //     })
    // }

    // console.log(allUser);


    // way-2 

    const {totalUser} = useContext(UserContext);

    return (

        <>
        <Navigate link={'/adduser'} lable={'Add User'}></Navigate>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-center bg-black text-xl font-medium'>
                        <th></th>
                        <th>Name</th>
                        <th>@Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // users.map(user => <UserTable key={user._id} user={user} handleDelete={handleDelete}>{user.name}</UserTable>)
                        totalUser.map(user => <UserTable key={user._id} user={user} >{user.name}</UserTable>)
                    }
                </tbody>
            </table>
        </div>
        </>




    );
};

export default AllUser;
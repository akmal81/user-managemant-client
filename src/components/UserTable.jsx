import React, { useContext } from 'react';
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { UserContext } from '../provider/UserProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


// const UserTable = ({user, handleDelete}) => {
const UserTable = ({ user, idx }) => {

    const { totalUser, setTotalUser } = useContext(UserContext)
    const handleDelHere = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){

                    setTotalUser(totalUser.filter(user => user._id !== id));
                    Swal.fire("user delete successfully");
                }
                else{
                    Swal.fire("Error when deleting users");
                }
            })
    }

    const { _id, name, email, gender, status } = user;
    return (
        <tr className='text-center hover text-lg'>
            <td>{idx}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td className='flex items-center justify-center gap-4'>
                <Link to={`/update/${_id}`} className='btn  btn-accent text-2xl text-white'><MdOutlineEdit /></Link>
                <button onClick={() => handleDelHere(_id)} className='btn btn-error text-white  text-2xl'><MdDeleteOutline /></button>
                {/* <button onClick={()=>handleDelete(_id)} className='btn btn-error  text-2xl'><MdDeleteOutline /></button> */}
            </td>
        </tr>
    );
};

export default UserTable;
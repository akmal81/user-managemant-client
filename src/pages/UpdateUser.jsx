import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navigate from '../components/Navigate';
import TitleSubTitle from '../components/TitleSubTitle';
import Swal from 'sweetalert2';

const UpdateUser = () => {
const{_id, name, email, gender, status} = useLoaderData();
console.log(_id);
const [gen, setGen] = useState(gender);
const [act, setAct] =useState(status)

const handleUpdate =(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUserData = {name, email};
   
    fetch(`http://localhost:5000/users/${_id}`,
        {
            method: 'PUT',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(updatedUserData)
        }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount){
            Swal.fire("User name and email address updated successfully");
        }
        else{
            Swal.fire("Something went wrong");
        }
    })
}


    return (
        <section>
            <Navigate link={'/'} lable={'All user'}></Navigate>
            <TitleSubTitle title='Update User' subTitle='Use The below form to create a new account'/>
            <form onSubmit={handleUpdate} className='mt-12 space-y-8 px-10'>
                <div>
                    <label>
                        <span className="text-xl py-6">Name</span>
                    </label>
                    <input defaultValue={name} type="text" name='name' className='w-full border bg-inherit rounded-lg text-lg py-2 px-6' placeholder='Name' />
                </div>
                <div>
                    <label>
                        <span className="text-xl py-6">Email</span>
                    </label>
                    <input defaultValue={email} type="email" name='email' className='w-full border bg-inherit rounded-lg text-lg py-2 px-6' placeholder='email' />
                </div>
                    {/* <div className='flex gap-5'>
                        <input type="radio" name="gender" value='male' defaultValue={gender} className="radio  border-white" defaultChecked />
                        <label>
                            <span>Male</span>
                        </label>
                        <input type="radio" name="gender" value='female' className="radio  border-white" />
                        <label>
                            <span>Female</span>
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <input type="radio" name="status" value='active' className="radio  border-white" defaultChecked />
                        <label>
                            <span>Active</span>
                        </label>
                        <input type="radio" name="status" value='inactive' className="radio border-white" />
                        <label>
                            <span>Inactive</span>
                        </label>
                    </div> */}
                <input type="submit" className='w-full bg-green-500 text-black font-bold py-4 rounded-lg' />
            </form>

        </section>
    );
};

export default UpdateUser;
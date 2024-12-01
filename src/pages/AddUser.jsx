import React, { useContext } from 'react';
import TitleSubTitle from '../components/TitleSubTitle';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Navigate from '../components/Navigate';
import { UserContext } from '../provider/UserProvider';

const AddUser = () => {
    const {totalUser, setTotalUser} = useContext(UserContext)

    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;

        if(!name||!email){
            Swal.fire("please give user name and valid email address");
            return
        }

        const user = {
            name, email, gender, status
        }
        console.log(user);

        fetch('http://localhost:5000/adduser', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire("user added successfully");
                    setTotalUser(prevTotalUser => [...prevTotalUser, user])
                }
                else {
                    Swal.fire("database connection lost");
                }
            })
    }

    return (
        <section>
            <Navigate link={'/'} lable={'All user'}></Navigate>
            <TitleSubTitle title='New User' subTitle='Use The below form to create a new account'></TitleSubTitle>
            <form onSubmit={handleAddUser} className='mt-12 space-y-8 px-10'>
                <div>
                    <label>
                        <span className="text-xl py-6">Name</span>
                    </label>
                    <input type="text" name='name' className='w-full border bg-inherit rounded-lg text-lg py-2 px-6' placeholder='Name' />
                </div>
                <div>
                    <label>
                        <span className="text-xl py-6">Email</span>
                    </label>
                    <input type="email" name='email' className='w-full border bg-inherit rounded-lg text-lg py-2 px-6' placeholder='email' />
                </div>
                <div className='flex gap-5'>
                    <input type="radio" name="gender" value='male' className="radio  border-white" defaultChecked />
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
                </div>
                <input type="submit" className='w-full bg-green-500 text-black font-bold py-4 rounded-lg' />
            </form>

        </section>
    );
};

export default AddUser;
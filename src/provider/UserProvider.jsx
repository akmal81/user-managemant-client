import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null)

const UserProvider = ({children}) => {

    const [totalUser, setTotalUser] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            setTotalUser(data)
        })
    },[])
    const userInfo= {
        totalUser,
        setTotalUser
    }

    

    return (
       <UserContext.Provider value={userInfo}>
        {children}
       </UserContext.Provider>
    );
};

export default UserProvider;
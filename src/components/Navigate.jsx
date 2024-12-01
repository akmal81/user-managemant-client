import React from 'react';
import { Link } from 'react-router-dom';

const Navigate = ({link, lable}) => {
    return (
        <Link to={link} className='btn'>
               {lable} 
        </Link>
    );
};

export default Navigate;
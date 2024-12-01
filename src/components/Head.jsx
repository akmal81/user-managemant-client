import React from 'react';

const Head = ({title}) => {
    return (
        <div>
        <h2 className='text-3xl text-center bg-green-400 text-black py-4 font-semibold'>{title}</h2>
    </div>
    );
};

export default Head;
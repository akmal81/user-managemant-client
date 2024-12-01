import React from 'react';

const TitleSubTitle = ({title, subTitle}) => {
    return (
        <div className='text-center'>
            <h2 className='font-medium text-2xl text-white'>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default TitleSubTitle;
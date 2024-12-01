import React from 'react';
import { Outlet } from 'react-router-dom';
import Head from '../components/Head';

const Root = () => {
    return (
        <>
            <header className='w-10/12 mx-auto'>
               <Head title='User Management System'></Head>
            </header>
            <main className='w-10/12 mx-auto border border-green-500 py-10 px-10'>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </>
    );
};

export default Root;
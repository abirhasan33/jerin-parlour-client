import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    const [service,setService]=useState({})
    useEffect(() => {
        const url = `http://localhost:4000/services/${id}`
        fetch(url).then(res=>res.json()).then(data=>setService(data))
    }, [id])
    
    return (
        <div className='bg-secondary h-screen px-5 md:px-10 '>
            <h1 className='text-3xl font-poppins font-semibold text-accent py-5'>Payment</h1>
            
        </div>
    );
};

export default Payment;
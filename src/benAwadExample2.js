import './App.css';
import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';

const BAExample2 = () => {

    const [values, handleChange] = useForm({ 
        email: "",
        password: "",
        firstName:""
    })

    // useEffect(() => {
    //     const onMouseMove = e => {
    //         console.log(e)
    //     }
    //     window.addEventListener('mousemove', onMouseMove)
    //     return () => {
    //         window.removeEventListener('mousemove', onMouseMove)
    //     }
    // }, [])
// ---------------------------------
// below shows how you can have more than one useEffect and they fire off in order
    useEffect(() => {
        console.log('mount1')
    }, [])

    useEffect(() => {
        console.log('mount2')
    }, [])


      return (
        <div>
            <>                
                <input name="firstName" value={values.firstName} onChange={handleChange} placeholder="first name" /><br />
                <input name="email" value={values.email} onChange={handleChange} placeholder="email" /><br />
                <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="password"
                />
            </>
        </div>
      );
    
      
    }
    
    export default BAExample2;
    
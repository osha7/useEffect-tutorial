import './App.css';
import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';
import { Hello } from "./hello"

const BAExample1 = () => {

    const [values, handleChange] = useForm({ 
        email: "",
        password: "",
        firstName:""
    })

    const [showHello, setShowHello] = useState(true)

    // // below is for changing values in form:
    // useEffect(() => {
    //     console.log("render")
    // }, [values.email, values.password]) //dependency array

    // to replace componentDidMount and componentWillUnmount:
    // useEffect(() => {
    //     console.log('render')
    //     // cleanup function:
    //     return () => {
    //         console.log("unmount")
    //     }
    // }, []) //empty dependency array

      return (
        <div>
            <>
                { showHello && <Hello /> } <br />
                <button onClick={() => setShowHello(!showHello)} >toggle</button> <br /><br />
                
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
    
    export default BAExample1;
    
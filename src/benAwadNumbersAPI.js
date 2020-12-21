import './App.css';
import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';

// http://numbersapi.com/43/trivia

const BANumbersAPI = () => {

  
    // const [count, setCount] = useState(0)
    // const {data, loading} = useFetch('http://numbersapi.com/43/trivia')
    // const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

    const [count, setCount] = useState(() => 
    JSON.parse(localStorage.getItem('count'))
    )
    
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

      return (
        <div>
            {/* <div>{loading ? 'loading...' : data}</div> */}
            <div>{!data ? 'loading...' : data}</div>
            <div> count: {count}</div>
            <button onClick={() => setCount(c => c + 1)}>increment</button>
            
        </div>
      );
    
      
    }
    
    export default BANumbersAPI;
    
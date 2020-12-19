import './App.css';
import React, {useState, useEffect} from 'react'

// https://jsonplaceholder.typicode.com/guide/

function App2() {

//  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//   const handleResize = () => {
//       setWindowWidth(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleResize)

//     return () => {
//         window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   return (
//     <div>{windowWidth}</div>
//   );

  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
      console.log('resource changed')
    //   this return code below will always log first, before the log above
    // this return is considered your 'clean up'
    // it gets run first to make sure to clean up whatever we did last time
    // so you don't constantly add your event listener
      return () => {
          console.log('return from resource change')
      }
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );

  
}

export default App2;

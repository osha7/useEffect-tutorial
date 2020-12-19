import './App.css';
import React, {useState, useEffect} from 'react'

// https://jsonplaceholder.typicode.com/guide/

function App() {

  // store state for resource type
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  // react to when we change our resource type, a side effect
  // useEffect in functional components replaces class component lifecycle methods
  
  // useEffect(() => {
  //   // everything in the body of this funtion is executed every time our application renders
  //   console.log('render')
  // })

  // if you only want the component to do this on mount, keep the second parameter as an empty array:
  // useEffect(() => {
  //   // we only want this to run whenever a specific resource on our page changes or when the component mounts
  //   // the second parameter (an array) (whenever that value changes, our hook runs)
  //   console.log('on mount')
  // }, [])

  // useEffect(() => {
  //   // we only want this to run whenever a specific resource on our page changes or when the component mounts
  //   // the second parameter (an array) (whenever that value changes, our hook runs)
  //   console.log('render')
  // }, [resourceType])

  // useEffect(() => {
  //   // template strings: ``
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, [resourceType])

  useEffect(() => {
    // template strings: ``
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType])

  return (
    <>
      <div>
        {/* select what resource type we want */}
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default App;

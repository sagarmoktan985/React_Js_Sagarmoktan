// components/App.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1 style={{color:'red', backgroundcolor:'blue'}}>Hello World!</h1>
      <Link to = {'/first'}>Go to Second Page</Link> <br /> <br />
      <Link to = {'/test'}> Go to trial page.</Link>
    </>
  )
}

export default App

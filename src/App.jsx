import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Com from './Com'
import Load from './Load'

function App() {
  return (
    <>
       <h3>Recap React core concept</h3>
       <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>useState</li>
        <li>Load Data /useEffect</li>
       </ol>
        <hr />
        <Com></Com>
        <hr />
        <Load></Load>
    </>
  )
}

export default App

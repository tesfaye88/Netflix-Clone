import { useState } from 'react'
import './App.css'
import Home from './Home/Home'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'><Home /></div>
    <Footer />

      
    </>
  )
}

export default App

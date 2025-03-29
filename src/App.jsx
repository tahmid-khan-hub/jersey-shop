import { Suspense } from 'react'
import './App.css'
import Jerseys from './components/Jerseys/Jerseys'

const handleJerseysData = fetch('./jerseyData.json')
.then(res => res.json());

function App() {

  

  return (
    <>
      <h1>My Jersey Shop</h1>
      <Suspense fallback={<h3>loading...</h3>}>
        <Jerseys handleJerseysData = {handleJerseysData}></Jerseys>
      </Suspense>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({name, age}) {


  const [count, setCount] = useState(0);
  const [vis, setVis] = useState(true);

  function Counter() {
    setCount(count + 1);
  }

  function Visibler() {
    setVis(!vis);
  }



  useEffect(() => {
    console.log("Хуй")
  })



  return (
    <>
      <header>
        
        <div className='headBlock'>
          <a href="https://vite.dev" target='_blank' className='hueten'>
            <p>Ало, {name} {age}?</p> 
          </a>


          <a href="https://react.dev" target='_blank' className='hueten'>
            <p>Да-да, иди нахуй</p>
          </a>
        </div>


        



        <div className='headBlock'>
          <a href="https://vite.dev" target='_blank' className='hueten'>
            <strong>имба</strong>
          </a>


          <a href="https://react.dev" target='_blank' className='hueten'>
            <img src={reactLogo} alt='хуй' className='hueta'></img>
          </a>  
        </div>

      </header>


      
      <body>
        <button onClick={Visibler}>

          {vis ? "Скрыть" : "Показать"}
          
        </button>

        {vis && (
          <p>Хуета</p>
        )}


      </body>

    </>
  )

  
}

export default App

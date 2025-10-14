import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({name, age}) {

  const [vis, setVis] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const setPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Ошибка при получении данных...');
      }

      const data = await response.json();
      setPosts(data);
    }
    catch (err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  }

  

  

  function Visibler() {
    setVis(!vis);
  }


  useEffect( () => {
    console.log("пшел нахууууй")
  });
  


  return (
    <>
      <header>
        
        <div className='headBlock'>
          <a href="https://vite.dev" target='_blank' className='hueten'>
            <p>Ало, {name} {age}?</p> 
          </a>


          <a href="https://react.dev" target='_blank' className='hueten'>
            <p>Да-да, иди нахуйй</p>
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
        <p>
          <button onClick={Visibler}>

            {vis ? "Скрыть" : "Показать"}
            
          </button>
        </p>

        {vis && (
          <p>Хуетень</p>
        )}


        <button onClick={setPost} disabled={loading}>
          {loading ? 'Загрузка...' : 'Загрузить посты'}
        </button>

        {error && 
        <div style={{ color: 'red' }}>
          Ошибка: {error}
        </div>
        }

        <h1>Посты ({posts.length})</h1>
        
        {posts.length > 0 && 
        (
          <div>
            {posts.slice(0, 8).map(post => (
              <div key={post.id} style={{ border: '1px solid  #ccc', margin: '10px', padding: '10px' }}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}

      </body>

    </>
  )

  

  
}

export default App

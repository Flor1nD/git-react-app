import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({name, age}) {


  const [count, setCount] = useState(0);
  const [vis, setVis] = useState(true);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function Counter() {
    setCount(count + 1);
  }

  function Visibler() {
    setVis(!vis);
  }


  useEffect( () => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')


        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setPosts(data);
      }

      catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);
  

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

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

        <h1>Посты</h1>
        {posts.slice(0, 5).map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </body>

    </>
  )

  

  
}

export default App

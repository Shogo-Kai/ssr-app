import { useState } from 'react'
import Home from './pages/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          いいね！ {count}
        </button>
      </div>
    </div>
  );
}

export default App

import { useState } from 'react';
import Map from './components/Map.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Map/>
    </>
  )
}

export default App;

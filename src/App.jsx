import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  const hp = 218 * 1.36;

  function kwtohp(kw) {
    return kw * 1.36;
  }

  const myObj = {
    name: 'Fiat',
    model: '500',
    color: 'white'
  };

  return (
    <section className="container my-2">
      <h1>My car</h1>
      <p>My car has {218 * 1.36} horsepower</p>
      <p>Again, my car has {hp} horsepower</p>

      <hr/>

      <h1>My other car</h1>
      <p>My other car has {kwtohp(218)} horsepower</p>

      <hr/>

      <h1>A third car</h1>
      <p>My car is a {myObj.color} {myObj.name} {myObj.model}</p>


    </section>
  )
}

export default App

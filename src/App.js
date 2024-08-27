import logo from './logo.svg';
import './App.css';

function App() {

 function handleClick (name) {
  alert(`Hi ${name}`)
 }

  return (
    <div className="App">
      <h3 className='hello'>Hello Shubhi</h3>
      <div className='text-red-500 text-xl font-bold'>ANKUR SIR</div>
      <button onClick={() => handleClick("Shubhi")} className='border border-gray-300 bg-blue-300 text-white font-extrabold text-2xl px-10 py-2 rounded-xl '>ADD</button>
    </div>
  );
}

export default App;
 
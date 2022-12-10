import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'
import Ratings from './pages/Ratings'
import Hospital from './pages/Hospital';

function App() {
  return (
    <div className='bg-[#F0FFF0]'>
      <h1 className='text-center p-4 text-primary bg-[#87cefa] font-bold text-[30px]'>FF REVIEWS</h1>
      

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={ <Register /> } />
        <Route path="/ratings" element={ <Ratings /> } />
        <Route path="/hospital/:city/:hospital" element={ <Hospital /> } />
      </Routes>
   </div>
  )
}

export default App;

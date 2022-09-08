
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Login from './Login';
import Product from './Product';



function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/product' element={< Product/>} />
      <Route path='/cart' element={< Cart/>} />
      
      
    </Routes>
    </BrowserRouter>
  </>
}

export default App;

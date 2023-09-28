import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Orders from './Components/Dashboard/Components/pages/Orders';
import Explore from './Components/Dashboard/Components/pages/Explore';
import Products from './Components/Dashboard/Components/pages/Products';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// import {
//   createBrowserRouter,
//   RouterProvider
// } from 'react-dom';

// const router= createBrowserRouter([
//   {
//     path: '/',
//     element:<div><Login /></div>

//   },
//   {
//     path: '/register',
//     element:<div><Register /></div>

//   },
//   {
//     path: '/dashboard',
//     element:<div><Dashboard /></div>

//   }
// ])


function App() {
  return (
    <div className='App'>
    
    <Router>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/products" element={<Products/>} />
        </Routes>
    </Router>
    
    </div>
  );
}

export default App;

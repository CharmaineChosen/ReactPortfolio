import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Projects from './Component/Projects';
import List from './Component/List';
import Footer from './Component/Footer';

const App=()=>{
  return(
    <>
    <List/>
   <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/my_projects' element={<Projects/>}/>
   </Routes>
   <Footer/>

    </>
  )
}
export default App;
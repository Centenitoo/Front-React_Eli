import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import FlowerList from './FlowerList';
import {Informacion, Imagen, Alumno} from './Inicio';
import CreateFlores from './CreateFlower';


const App = () => {
  return (
    <div >
      <Header />
      <Imagen />
      <Informacion/> 
        <Routes>
          <Route path="/" element = { <Alumno />}/>
          <Route path="/List" element={<FlowerList/>} />
          <Route path="/create" element={<CreateFlores/>}
          />
        </Routes>
      </div>
  );
};
export default App;
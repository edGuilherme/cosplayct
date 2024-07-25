import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar.js';
import Carousel from './components/carousel.js';
import PlaceholderImg1 from './assets/placeholder1.jpg';
import PlaceholderImg2 from './assets/placeholder2.jpg';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Carousel items={[
          {
            imagem: PlaceholderImg1,
            titulo: 'Noticia 1',
            descricao: 'Descrição da noticia 1'
          },
          {
            imagem: PlaceholderImg2,
            titulo: 'Noticia 2',
            descricao: 'Descrição da noticia 2'
          }
        ]}/>
      </main>
    </>
  );
}

export default App;

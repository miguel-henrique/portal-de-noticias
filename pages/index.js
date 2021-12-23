import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Barra from "./components/navbar";
import Blog from './components/teste';
import Noticias from './components/noticias'


export default function Index() {

  return (

    <div>
      <Barra></Barra>
      <Noticias></Noticias>
     
      
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <div>
    {page}
    </div>
     
  )
}
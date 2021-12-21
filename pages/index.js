import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import axios from 'axios';


const Index = ({dados}) => (
    <div key={dados.articles[1].id}>
       {/* <!-- As a link --> */}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

{/* <!-- As a heading --> */}
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Últimas Noticias</span>
  </div>
</nav>
        {console.log(dados)}

<div>
  <div class="row">
    <div class="col">
    {dados.articles[0].title}
    <img src={dados.articles[0].urlToImage} class="rounded mx-auto d-block" width={500} alt="..."></img>

    </div>
    <div class="col">
    {dados.articles[1].title}
    <img src={dados.articles[1].urlToImage} class="rounded mx-auto d-block" width={500} alt="..."></img>
    </div>
  </div>
  <div class="row">
    <div class="col">
    {dados.articles[2].title}
    <img src={dados.articles[2].urlToImage} class="rounded mx-auto d-block" width={500} alt="..."></img>
    </div>
    <div class="col">
    {dados.articles[3].title}
    <img src={dados.articles[3].urlToImage} class="rounded mx-auto d-block" width={500} alt="..."></img>
    </div>
    <div class="col">
    {dados.articles[4].title}
    <img src={dados.articles[4].urlToImage} class="rounded mx-auto d-block" width={500} alt="..."></img>
    </div>
  </div>
</div>
 
    </div>

    
);


Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}



export default Index;
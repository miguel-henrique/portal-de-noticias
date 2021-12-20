import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import axios from 'axios';


const Index = ({dados}) => (
    <div key={dados.articles[1].id}>
        <h1>Últimas Noticias</h1>


        <h1>{dados.articles[1].title}</h1>
        <img src={dados.articles[1].urlToImage}></img>
        <p>{dados.articles[1].description}</p>
        <article>{dados.articles[1].content}</article>
        
        

<button type="button" class="btn btn-primary">Primary</button>
   
    </div>
);


Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );

   //console.log(response);
    return { dados: response.data}

}

/* var news = Index.map(function(obj) {
    return Object.keys(obj).map(function(key) {
        return obj[key];
    });
});
  console.log(news) */



export default Index;
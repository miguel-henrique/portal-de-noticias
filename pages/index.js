import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import axios from 'axios';


const Index = ({dados}) => (
    <div>
        <h1>Últimas Noticias</h1>


        <h1>{dados.articles[1].title}</h1>
        {/* <ul>
            {dados.map(noticia => (
            <li>
                <h1>{noticia.articles[1].title}</h1>
            </li>
            ))}
        </ul> */}

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
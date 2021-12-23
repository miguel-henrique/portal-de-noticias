import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col} from 'reactstrap';


import axios from 'axios';



// posts will be populated at build time by getStaticProps()
const Blog = ({ post }) => (
      <ul>
          {console.log(post)}
          <li>Ok</li>

      </ul>
    );
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await axios.get('https://newsapi.org/v2/top-headlines?country=br&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f')
    const post = await res.json()
    console.log(res)
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        post,
      },
    }
  }
  
  export default Blog
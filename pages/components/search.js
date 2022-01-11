
import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { Input } from 'reactstrap'
import axios from 'axios';


/* Search 1 começo */

/* export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `https://newsapi.org/v2/everything?q=${query}&from=2022-01-07&sortBy=popularity&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f`



  
  const searchEndpoint = async () =>{
    const response = await axios.get(
        'https://newsapi.org/v2/everything?q=${query}&from=2022-01-07&sortBy=popularity&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f'
    );


    return { dados: response.data}

}



  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    
    <div
      //className={styles.container}
      ref={searchRef}
    >
      <Input
        //className={styles.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search posts'
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className={styles.result} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
} */

/* Search 1 fim */



/* Search 2 começo */


export default function Search() {

search = async val => {
  this.setState({ loading: true });
  const res = await axios(
    `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
  );
  const movies = await res.data.results;

  this.setState({ movies, loading: false });
};

onChangeHandler = async e => {
  this.search(e.target.value);
  this.setState({ value: e.target.value });
};

get renderMovies() {
  let movies = <h1>There's no movies</h1>;
  if (this.state.movies) {
    movies = <Movies list={this.state.movies} />;
  }

  return movies;
}

render() {
  return (
    <div>
      <input
        value={this.state.value}
        onChange={e => this.onChangeHandler(e)}
        placeholder="Type something to search"
      />
      {this.renderMovies}
    </div>
  );
}
}




/* Search 2 fim */
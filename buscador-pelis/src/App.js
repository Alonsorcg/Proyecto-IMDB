import React, { useState } from 'react'
import axios from 'axios'
import Youtube from 'react-youtube';
import './App.css';

function App() {
  const API_URL = '' 
  const API_KEY = ''
  const IMAGE_PATH = ''
  const URL_IMAGE = ''

  const [movies, setMovies] = useState([])
  const [searchkey, setSearchkey]= useState("")
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies"});
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async(searchkey) =>{
    const type = searchkey ? "search" : "discover"
    const {data: { results },
  } = await axios.get(${API_URL}/${type}/movie , {
    params: {
      api_key: API_KEY,
      query: searchkey,
    },
  });
  }

  return (
    <div>
      
    </div>
  );
}

export default App;

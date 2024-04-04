import React, { useEffect, useState } from 'react'
import "./style.css"
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Home() {

  // function checkAge(Age){
  //   if(Age >=18){
  //     alert("You can drive")

  //   }else{
  //     alert("You can't drive")
  //   }
  // }






  const [movies, setMovies] = useState([])
  const [movieId, setMovieId] = useState("")

  useEffect(() => {

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=6e4623f52f1bbc231730101539a0c179")
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.log(err))


  }, [])


  function handleClick(title) {
    movieTrailer(title)
      .then((res) => {

        let vidId = res.split("=")[1]

        setMovieId(vidId)
       

      })
  }

  const opt = {
    playerVars: {
      autoplay:1,
    },
  }





  return (
    <div className=''>

      <div className='banner'>

        <div>

          <h4>The Marvel</h4>

          <div>
            <button> Watch Now</button>
            <button> Save For Later</button>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eos, neque.</p>
        </div>



      </div>



      <main className='bg-dark p-5'>
        <div className='container'>
          <h5 className='text-white mb-5 '>Trending</h5>

          <div className='movieposter d-flex'>


            {
              movies.map(each => (


                <img onClick={() => handleClick(each.original_title)} src={"https://image.tmdb.org/t/p/w500/" + each.poster_path} alt='poster image'></img>


              ))
            }


          </div>

          <div className='player'>


            <YouTube
              videoId={movieId}
              opts={opt}

            />
          </div>

        </div>

      </main>




    </div>
  )
}

export default Home
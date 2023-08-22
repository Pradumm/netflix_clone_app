import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Rating from 'react-rating-stars-component';
const SingleMovie = () => {
  let img_path = "https://image.tmdb.org/t/p/w500"

  // const { id, state } = useParams();
  const location = useLocation();
  const { title, overview, backdrop_path, poster_path, release_date, original_language, vote_average } = location.state.moviex;

  console.log(location)
  console.log(title)

  return (
    <>

      <div class=" py-[60px] bg-black  text-white  ">
        <div className='max-w-[800px] h-[500px] mx-auto flex flex-col sm:flex-row'>

          <img className='h-[200px] object-cover sm:h-full' src={img_path + poster_path} alt="" />
        
          <div class="ml-2 md:ml-10">
            <h2 className='text-[30px] sm:text-[45px] font-serif'>{title}</h2>
            <p class="text-white font-medium  mb-[10px]">{overview}</p>
            <p class="text-gray-300 mb-[10px] text-sm">Release_date:  {release_date}   <span className='py-2 px-5 bg-blue-950 ml-2 text-white'>{original_language}</span></p>
            <Rating
              count={10} // Total number of stars
              value={vote_average} // Rating value (7.5 in this case)
              size={24} // Size of the stars
              activeColor="#f39c12" // Color of active stars
              edit={false}
              classNames=""// Disable user interaction
            />
            <button className='px-5 py-2 mt-5 bg-blue-950 text-white font-serif capitalize font-bold'>watch Now </button>

          </div>
        </div>
      </div>

    </>
  )
}


export default SingleMovie
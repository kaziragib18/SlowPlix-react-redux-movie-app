import React, { useEffect } from 'react';
import movieApi from '../../common/apis/movieApi';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const movieText = "Marvel";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err:", err);
        });
      dispatch(addMovies(response.data))
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className='Banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;
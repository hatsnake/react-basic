import React, {useState} from 'react';
import MovieForm from '../components/MovieForm';
import Movie from "../components/Movie";

const Movies = () => {

  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    //JSX형태로 리턴
    return (
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
    );
  }) : '영화가 없습니다.';
  
  const addMovie = (movie) => {
    setMovies([
      //...movies : 기존배열이 덮어지는 것을 방지
      ...movies,
      movie
    ]);
  };

  return (
    <>
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </>
  );
};

export default Movies;
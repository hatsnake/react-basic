import React, {useState, useEffect} from 'react';
import Movie from "./components/Movie";
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';

// https://www.youtube.com/watch?v=UFtirvA6NDU&list=PLB7CpjPWqHOuf62H44TMkMIsqfkIzcEcX&index=5

//컴포넌트 : react hooks로 인해 class형태에서 function형태로 바뀜

//클래스 컴포넌트
/*
class App extends React.Component {
  render() {
    return <div className="App">Kossie Coder</div>;
  }
}
*/

//함수 컴포넌트
function App() {
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
    <div className="App">
      <Navbar />
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;

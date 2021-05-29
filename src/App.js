import React, {useState, useEffect} from 'react';
import Movie from "./components/Movie";

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
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([
    { title: 'Kossie coder1', year: 2001 },
    { title: 'Kossie coder2', year: 2002 },
    { title: 'Kossie coder3', year: 2003 },
    { title: 'Kossie coder4', year: 2004 },
  ]);
  
  useEffect(() => {
    //console.log('render');
  });

  const renderMovies = movies.map(movie => {
    //JSX형태로 리턴
    return (
      <Movie movie={movie} key={movie.title} />
    );
  });
  
  const addMovie = (event) => {
    event.preventDefault();

    setMovies([
      //...movies : 기존배열이 덮어지는 것을 방지
      ...movies,
      {
        title: movieTitle,
        year: movieYear,
      }
    ]);

    setMovieTitle('');
    setMovieYear('');
  };

  return (
    <div className="App">
      <h1>Movie list</h1>
      <form onSubmit={addMovie}>
        <input type="text" value={movieTitle} placeholder="영화제목" 
              onChange={e => setMovieTitle(e.target.value)}/>
        <br/>
        <input type="text" value={movieYear} placeholder="개봉년도" 
              onChange={e => setMovieYear(e.target.value)}/>
        <br/>
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;

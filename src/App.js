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
  const movies = [
    { title: 'Kossie coder1', year: 2001 },
    { title: 'Kossie coder2', year: 2002 },
    { title: 'Kossie coder3', year: 2003 },
  ];

  const renderMovies = movies.map(movie => {
    //JSX형태로 리턴
    return (
      <Movie movie={movie} key={movie.title} />
    );
  });

  return (
    <div className="App">
      <h1>Movie list</h1>

      {renderMovies}
    </div>
  );
}

export default App;

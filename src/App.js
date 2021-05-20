import React from 'react';

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
  return (
    // JSX : JS를 확장한 문법
    <div className="App">
      Kossie Coder
    </div>
  );
}

export default App;

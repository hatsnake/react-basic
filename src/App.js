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

  const onSubmit = () => {
    alert('submitted');
  }

  const onKeyUp = (event) => {
    if(event.keyCode === 13) {
      onSubmit();
    }
  }

  return (
    // JSX : JS를 확장한 문법
    // onClick={함수}
    // JS Event를 카멜 표기법으로 사용가능
    <div className="App">
      <input onKeyUp={onKeyUp}/>
      <button onClick={onSubmit}>Submit</button> 
    </div>
  );
}

export default App;

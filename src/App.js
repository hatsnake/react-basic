import React, {useEffect, useState} from 'react';

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
  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count, kossie]);
  
  //한번만 실행
  useEffect(() => {
    console.log('first rendering');
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setKossie(kossie + 1)}>Click</button>      
    </div>
  );
}

export default App;

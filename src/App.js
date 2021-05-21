import React, {useState} from 'react';
import Counter from './components/Counter';

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
  const [buttonName, setButtonName] = useState('클릭');

  const clickButton = () => {
    setButtonName('click');
  };

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <Counter click="click1"/>
      <Counter click={buttonName}/>
      <Counter />
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;

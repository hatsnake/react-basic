import React, {useState} from 'react';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  }

  return (
    // JSX : JS를 확장한 문법
    // onClick={함수}
    // JS Event를 카멜 표기법으로 사용가능
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Username" 
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <input type="password" placeholder="Password" 
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <button type="submit">Login</button> 
      </form>
    </div>
  );
}

export default App;

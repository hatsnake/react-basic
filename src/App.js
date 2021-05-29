import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Home from './pages/Home';
import Movies from './pages/Movies';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/movies" exact>
              <Movies />
            </Route>

            <Route path="/users" exact>
              <Users />
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

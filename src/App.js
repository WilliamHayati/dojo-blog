import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails'
import NotFound from './NotFound';

function App() {
  const title = 'welcome to the new blog';
  // const likes = 50;
  // // const person = { name: 'yoshi', age: 30};
  // const link = "http://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          {/* <h1>App Component</h1>
          <h1>{ title }</h1>
          <p>Liked { likes } times</p>

          <p>{ person }</p>

          <p>{ 10 }</p>
          <p>{ "hello, ninjas" }</p> <doesn't work
          <p>{ [1,2,3,4,5] }</p>
          <p>{ Math.random() * 10 }</p>

          <a href={link}>Google Site</a> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

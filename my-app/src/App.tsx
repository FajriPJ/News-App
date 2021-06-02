import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, News, NewsDetail } from './presentation/container/pages'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/News/:title">
            <NewsDetail />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

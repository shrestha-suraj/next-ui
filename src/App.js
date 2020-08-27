import React from "react";
import "./App.scss";
import Navigation from "./components/navigation/nativation.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from './pages/home/home.page.jsx'
import ProfilePage from './pages/profile/profile.page.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="pages">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from "./components/MainPage";
import { TestTable } from "./components/Table";

function App() {

  const CustomRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => <Component {...props} />} />
  };

  return (
    <div className="App">
      <Switch>
        <CustomRoute path="/" component={MainPage} exact />
        <CustomRoute path="/table" component={TestTable} exact />
      </Switch>
    </div>
  );
}

export default App;
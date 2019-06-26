import React from 'react';
import Watch from "./containers/Watch/Watch"
import Home from "./components/Home/Home"
import AppLayout from "./components/AppLayout/AppLayout";
import {Route,Switch} from "react-router-dom"


function App() {
  return (
     <AppLayout>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/watch" component={Watch}/>
     </Switch>
     </AppLayout>
  );
}

export default App;

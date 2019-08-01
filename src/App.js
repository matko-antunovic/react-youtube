import React, {Component} from 'react';
import Watch from "./containers/Watch/Watch"
import Home from "./components/Home/Home"
import AppLayout from "./components/AppLayout/AppLayout";
import {Route,Switch} from "react-router-dom"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './store/actions/api';

const API_KEY="AIzaSyBCK3a3Ch4Oi4RU_mBi7XyfxLJHVfuC6XM";


class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch}/>
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    );
  }
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}

const mapDispatchToProps=(dispatch)=>({
  youtubeLibraryLoaded:()=>dispatch(youtubeLibraryLoaded())
})

export default connect(null, mapDispatchToProps)(App);

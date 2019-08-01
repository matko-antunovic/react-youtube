import React from 'react';
import './Home.scss';

import SideBar from "../../containers/SideBar/SideBar";
import {HomeContent} from './HomeContent/HomeContent';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <HomeContent/>
      </React.Fragment>
    );
  }
}

export default Home;
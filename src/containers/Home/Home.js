import React, { Component } from "react";
import FixedBoard from "../../components/FixedBoard/FixedBoard";
import Posts from "../../components/Posts/Posts";
import StatusBar from "../../components/StatusBar/StatusBar";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="MainPage">
        <div className="Feed">
          <StatusBar />
          <Posts />
        </div>
        <div className="SideContent">
          <FixedBoard User={this.props.User} />
        </div>
      </div>
    );
  }
}

export default Home;

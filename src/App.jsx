import React, { Component } from "react";
import { connect } from "react-redux";
import Controls from "./components/Controls";
import { SET_DATA } from "./store/types";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: SET_DATA });
  }

  render() {
    const { count, name } = this.props;

    return (
      <>
        <h1>
          {name}s counter is {count}
        </h1>
        <Controls />
      </>
    );
  }
}

//explains what data you want from store
function mapStateToProps(state) {
  return { count: state.count, name: state.name };
}

export default connect(mapStateToProps)(App);

// fistly, install redux "npm i redux" and "npm i react-redux"

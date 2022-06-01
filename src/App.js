import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from "./store";

class App extends Component {

  render () {
    return (
      <div>
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;

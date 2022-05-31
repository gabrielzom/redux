import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from "./store";

class App extends Component {

  constructor() {
    super()
    this.state = {
      activeLesson: {
        module: '',
        lesson: ''
      },
      modules: 
      [
          { 
              id: 1, 
              title: 'Init with react', 
              lessons: [
                  { id: 1, title: 'First learning' },
                  { id: 2, title: 'Second learning' }
              ]
          },
          {
              id: 2, 
              title: 'Fixing react-redux', 
              lessons: [
                  { id: 3, title: 'Third learning' },
                  { id: 4, title: 'Fourty learning' }
              ] 
          }
      ]
    }
  }

  toggleModuleAndLesson (e) {
    let idsOfModuleAndLesson = (e.target.id).split(',')
    idsOfModuleAndLesson = idsOfModuleAndLesson.map(id => Number(id))

    const [ module ] = this.state.modules.filter(module => module.id === idsOfModuleAndLesson[0])
    const [ lesson ] = module.lessons.filter(lesson => lesson.id === idsOfModuleAndLesson[1])

    const titleOfModule = module.title 
    const titleOfLesson = lesson.title

    this.setState({
      activeLesson: {
        module: titleOfModule,
        lesson: titleOfLesson
      }
    })
  }

  render () {
    return (
      <div>
        <Provider store={store}>
          <Video state={this.state} />
          <Sidebar 
            handleToggle={(e) => {this.toggleModuleAndLesson(e)}} 
            state={this.state} 
          />
        </Provider>
      </div>
    );
  }
}

export default App;

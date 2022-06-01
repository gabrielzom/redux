import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../store/actions/course";
import { bindActionCreators } from "redux";
import './index.css'

const Sidebar = ({ modules, toggleLesson }) => {
    return (
      <aside>
        {modules.map(module => (
          <section key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>
                  <button onClick={() => toggleLesson(lesson, module)}>{lesson.title}</button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </aside>
    );
}

function mapStateToProps(state) {
  return {
    modules: state.courseReducer.modules
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(courseActions, dispatch)

}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Sidebar);

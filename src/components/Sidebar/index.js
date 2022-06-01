import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../store/actions/course";
import { bindActionCreators } from "redux";

const Sidebar = ({ modules, toggleLesson }) => {
    return (
      <aside>
        {modules.map(module => (
          <section key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>
                  {lesson.title}
                  <button onClick={() => toggleLesson(module, lesson)}>Select</button>
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
  return {
    toggleLesson: (module, lesson) => dispatch(courseActions.toggleLesson(module, lesson))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Sidebar);






console.log("IT'S WORK")
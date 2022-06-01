import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => {
  return (
    <div>
      <strong>Module: {activeModule.title}</strong> | <span>Lesson: {activeLesson.title}</span>
    </div>
  );
};

export default connect(state => ({ 
  activeModule: state.courseReducer.activeModule,
  activeLesson: state.courseReducer.activeLesson
}))(Video);

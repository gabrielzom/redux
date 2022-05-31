import React from "react";

const Index = ({ state }) => {
  const { activeLesson } = state;
  return (
    <div>
      <strong>{activeLesson.module}</strong> | <span>{activeLesson.lesson}</span>
    </div>
  );
};

export default Index;

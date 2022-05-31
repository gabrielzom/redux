import React from "react";

const Index = ({ state, handleToggle }) => {
    const { modules } = state;
    return (
      <aside>
        {modules.map(module => (
          <section key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>{lesson.title}||
                  <button id={`${module.id},${lesson.id}`} onClick={handleToggle}>Select</button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </aside>
    );
}

export default Index;


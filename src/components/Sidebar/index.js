import React, { Component } from 'react';

class Sidebar extends Component {

    state = {
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
                title: 'Fixing react', 
                lessons: [
                    { id: 3, title: 'Third learning' },
                    { id: 4, title: 'Fourty learning' }
                ] 
            }
        ]
    }

    render() {

        const { modules } = this.state;

        return (
            <aside>
                {modules.map((module, indexModule) => (
                    <section key={indexModule}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map((lesson, indexLesson) => (
                                <li key={`${indexModule}-${indexLesson}`}>{lesson.title}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </aside>
        );
    }
}

export default Sidebar;

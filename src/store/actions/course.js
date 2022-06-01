export function toggleLesson(lesson, module) {
    return {
      type: 'TOGGLE_LESSON',
      payload: {
        module,
        lesson
      }
    }
  }
  
const initialState = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: "Init with react",
      lessons: [
        { id: 1, title: "First learning" },
        { id: 2, title: "Second learning" },
      ],
    },
    {
      id: 2,
      title: "Fixing react-redux",
      lessons: [
        { id: 3, title: "Third learning" },
        { id: 4, title: "Fourty learning" },
      ],
    },
  ],
};

export default function courseReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "TOGGLE_LESSON":
      var newState = {
        ...state,
        activeLesson: action.payload.lesson,
        activeModule: action.payload.module,
      };
      break;
    default:
      newState = state;
  }
  return newState;
}
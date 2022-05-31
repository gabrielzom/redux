import { createStore } from "redux";

function reducer() {
  return [
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
  ];
}

const store = createStore(reducer);

export default store;

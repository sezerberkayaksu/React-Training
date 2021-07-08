import { combineReducers } from "redux";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, { text: action.payload.text, id: action.payload.id }]
    default: 
      return state
  }
}


const rootReducer = combineReducers({
  posts : postsReducer
});

export default rootReducer;
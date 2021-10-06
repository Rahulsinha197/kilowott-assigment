const initialState = {
  users: [],
  posts: [],
  user: null,
  comments: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return;
  }
};

export { reducer, initialState };

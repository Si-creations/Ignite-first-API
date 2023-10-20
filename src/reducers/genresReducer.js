const initState = {
  genres: [],
};

const genresReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GENRES":
      return {
        ...state,
        genres: action.payload.genres,
      };
    default:
      return { ...state };
  }
};

export default genresReducer;

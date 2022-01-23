const INITIAL_STATE = {
  viewInsight: {},
};

const ReportsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_REPORT":
      return {
        ...state,
        viewInsight: action.payload,
      };

    default:
      return state;
  }
};

export default ReportsReducer;

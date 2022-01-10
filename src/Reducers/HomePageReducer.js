const INITIAL_STATE = {
  serviceData: [],
};
const HomePageReducer = (state = INITIAL_STATE, action) => {
  console.log(action.payload, "action.payloadd");
  switch (action.type) {
    case "SUBMIT":
      return {
        ...state,
        serviceData: [...action.payload],
      };

    default:
      return state;
  }
};

export default HomePageReducer;

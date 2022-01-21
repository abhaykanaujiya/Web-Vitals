import {
  GET_DATA,
  GET_PAGE_INSIGHT,
  REQUEST_POST_DATA,
  GET_REQUEST_ERR,
} from "../Actions/Constants/Constants";

const INITIAL_STATE = {
  pageInsight: {},
  postReqData: {},
};
const HomePageReducer = (state = INITIAL_STATE, action) => {
  console.log(action,"actions");
  switch (action.type) {
    case GET_PAGE_INSIGHT:
      return {
        ...state,
        pageInsight: action.payload,
      };
    // case GET_DATA:
    //   return {
    //     ...state,
    //     serviceData: action.payload,
    //   };
    case REQUEST_POST_DATA:
      return {
        ...state,
        postReqData: action.payload,
      };
    // case GET_REQUEST_ERR:
    //   return {
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

export default HomePageReducer;

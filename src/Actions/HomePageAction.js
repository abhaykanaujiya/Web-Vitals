import axios from "axios";
import { page_insight_url } from "../EndPoints/EndPoints";
import {
  GET_DATA,
  GET_PAGE_INSIGHT,
  REQUEST_POST_DATA,
  GET_REQUEST_ERR,
} from "./Constants/Constants";

export const getData = () => {
  console.log("getdata invoked");
  return (dispatch) => {
    axios.get(page_insight_url).then((res) => {
      if (res.status === 200) {
        console.log(res.data.pageSpeedInsight, "pagespeed");
        dispatch({
          type: GET_PAGE_INSIGHT,
          payload: res.data.pageSpeedInsight,
        });
      } else {
        console.log("error");
      }
    });
  };
};

// export const handleSubmit = (userInfo, input) => {
//   console.log(userInfo, input, "handle submit");
//   return (dispatch) => {
//     let data = userInfo.filter(
//       (value) => value.name.toLowerCase().search(input) !== -1
//     );
//     console.log(data, "display");
//     dispatch({ type: "SUBMIT", payload: data });
//   };
// };

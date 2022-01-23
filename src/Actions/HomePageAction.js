import axios from "axios";
import { page_insight_url, post_url } from "../EndPoints/EndPoints";
import {
  GET_PAGE_INSIGHT,
  REQUEST_POST_DATA,
  GET_REQUEST_ERR,
} from "./Constants/Constants";

export const getData = () => {
  return (dispatch) => {
    axios
      .get(page_insight_url, {
        headers: {
          "access-token": 12345,
        },
        params: {
          strategy: "desktop",
          service_id: 3,
        },
      })
      .then((res) => {
        console.log(res, "getResponse");
        if (res.status === 200) {
          dispatch({
            type: GET_PAGE_INSIGHT,
            payload: res,
          });
        } else {
          console.log("error");
        }
      });
  };
};
export const postData = (data) => {
  console.log("hello post req");
  return (dispatch) => {
    axios
      .post(post_url, data, {
        headers: {
          "access-token": 12345,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "post response");
          dispatch({ type: REQUEST_POST_DATA, payload: res.data });
          // dispatch({type:"GET_INSIGHT",payload:})
        } else {
          console.log("error");
        }
      });
  };
};

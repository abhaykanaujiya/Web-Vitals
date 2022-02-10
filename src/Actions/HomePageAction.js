import axios from "axios";
import { page_insight_url, post_url } from "../EndPoints/EndPoints";
import { Token } from "./Constants/Helper";
import {
  GET_PAGE_INSIGHT,
  REQUEST_POST_DATA,
  GET_REQUEST_ERR,
} from "./Constants/Constants";

export const getData = (mobileCheckBox) => {
  return (dispatch) => {
    axios
      .get(page_insight_url, {
        headers: Token,

        params: {
          strategy: mobileCheckBox ? "desktop" : "mobile",
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
export const postData = (data, mobileCheckBox, input) => {
  console.log("hello post req");
  const pUrl = {
    page_url: input,
    service_id: 3,
    created_by: "devesh.agnihotri@meesho.com",
    updated_by: "devesh.agnihotri@meesho.com",
    strategy: mobileCheckBox ? "mobile" : "desktop",
  };
  return (dispatch) => {
    axios
      .post(post_url, pUrl, {
        headers: {
          "access-token": 12345,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "post response");
          dispatch({ type: REQUEST_POST_DATA, payload: res.data });
        } else {
          console.log("error");
        }
      });
  };
};

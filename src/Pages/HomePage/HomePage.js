import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UsersTable from "../UsersDataTable/UsersTable";
import { getData } from "../../Actions/HomePageAction";
import "./homePage.css";
import axios from "axios";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const [postReqData, setPostReqData] = useState([]);
  const [input, setinput] = useState("");

  const pageUrl = {
    page_url: input,
    service_id: 1,
    created_by: "devesh.agnihotri@meesho.com",
    updated_by: "devesh.agnihotri@meesho.com",
    strategy: "desktop",
  };

  console.log(props, "homepageprops");
  useEffect(() => {
    props.getData();
  }, []);

  const handleInput = (e) => {
    setinput(e.target.value.toLowerCase());
  };

  const handleClick = () => {
    const postData = () => {
      axios
        .post(
          "https://web-vitals.meeshotest.in/analytics/1.0/pagespeed/test/",
          pageUrl
        )
        .then((res) => {
          setPostReqData(res);
        });
    };
    console.log(postReqData, "post data");
    postData();
    setinput("");
  };

  return (
    <div className='body'>
      <div className='inner-body'>
        <input
          className='input'
          type='text'
          placeholder='Enter something'
          value={input}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className='button-body'>
        <button className='button' onClick={handleClick}>
          Generate Report
        </button>
      </div>
      <UsersTable pageInsighData={props.pageInsight} />
    </div>
  );
};
function mapStatetoprops({ HomePageReducer }) {
  const { pageInsight, serviceData, error } = HomePageReducer;
  return {
    pageInsight,
    serviceData,
    error,
  };
}
export default connect(mapStatetoprops, { getData })(HomePage);

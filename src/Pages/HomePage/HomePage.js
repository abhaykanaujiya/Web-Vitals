import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UsersTable from "../UsersDataTable/UsersTable";
import { getData, postData } from "../../Actions/HomePageAction";
import { Loading } from "../Loader/Loading";
import "./homePage.css";

const HomePage = (props) => {
  const [input, setinput] = useState("");
  const [loading, setLoading] = useState(false);
  //const [dat, setDat] = useState(props.postReqData);
  console.log(props.postReqData, "lp");

  const handleInput = (e) => {
    setinput(e.target.value.toLowerCase());
  };

  const handleClick = () => {
    // console.log(fun, "hanfdlela");
    const pageUrl = {
      page_url: input,
      service_id: 2,
      created_by: "devesh.agnihotri@meesho.com",
      updated_by: "devesh.agnihotri@meesho.com",
      strategy: "desktop",
    };
    setLoading(true);
    console.log("click");
    props.postData(pageUrl);

    setinput("");
  };
  useEffect(() => {
    setLoading(false);
    props.getData();
  }, [props.postReqData]);

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
      {loading === false ? (
        <UsersTable pageInsighData={props.pageInsight} />
      ) : (
        <Loading />
      )}
    </div>
  );
};
function mapStatetoprops({ HomePageReducer }) {
  const { pageInsight, postReqData, error } = HomePageReducer;
  return {
    pageInsight,
    postReqData,
    error,
  };
}
export default connect(mapStatetoprops, { getData, postData })(HomePage);

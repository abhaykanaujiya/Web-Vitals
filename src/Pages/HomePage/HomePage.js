import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UsersTable from "../UsersDataTable/UsersTable";
import { getData, postData } from "../../Actions/HomePageAction";
import { Loading } from "../Loader/Loading";
import "./homePage.css";

const HomePage = (props) => {
  const [input, setinput] = useState("");
  const [loading, setLoading] = useState(false);
  const [desktopCheckBox, setDesktopCheckBox] = useState(false);
  // const [mobileCheckBox, setMobileCkeckBox] = useState(false);
  const handleInput = (e) => {
    setinput(e.target.value.toLowerCase());
  };

  const handleClick = () => {
    const pageUrl = {
      page_url: input,
      service_id: 3,
      created_by: "devesh.agnihotri@meesho.com",
      updated_by: "devesh.agnihotri@meesho.com",
      strategy: "desktop",
    };
    setLoading(true);
    props.postData(pageUrl, desktopCheckBox, input);
    setinput("");
  };
  const handleDesktopCheckbox = () => {
    setDesktopCheckBox(true);
    console.log(desktopCheckBox, "desktopCheckBox  ");
  };
  const handleDesktopCheckboxChange = () => {
    setDesktopCheckBox(false);
    console.log(desktopCheckBox, "desktopCheckBox change");
  };

  useEffect(() => {
    setLoading(false);
    props.getData(desktopCheckBox);
  }, [props.postReqData, desktopCheckBox]);

  return (
    <div className='body'>
      <div className='strategy'>
        {/* {desktopCheckBox === false ? ( */}
        <div>
          <input
            type='checkbox'
            value='default'
            onChange={
              desktopCheckBox === false
                ? () => handleDesktopCheckbox()
                : () => handleDesktopCheckboxChange()
            }
          ></input>
          <label>Desktop</label>
        </div>
        {/* ) : (
           () => handleChangeDesktopCheckbox(setDesktopCheckBox(false))
       )} */}

        <div>
          <input type='checkbox' value='default'></input>
          <label>Mobile</label>
        </div>
      </div>

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
        <UsersTable
          pageInsighData={props.pageInsight}
          postReqData={props.postReqData}
        />
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

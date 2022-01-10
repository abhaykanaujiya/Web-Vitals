import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { endPoints } from "../../EndPoints/EndPoints";
import { UsersTable } from "../UsersData/UsersTable";
import { handleSubmit } from "../../Actions/HomePageAction";
import "./homePage.css";

const HomePage = (props) => {
  const [insight, setInsight] = useState([]);
  const [insightService, setService] = useState([]);
  const [input, setinput] = useState("");
  // const [filter, setFilter] = useState([]);
  const getData = () => {
    Promise.all(endPoints)
      .then(([res1, res2]) => {
        console.log(res2, "res1");
        setInsight(res1.data);
        setService(res2.data);
      })
      .catch((err) => console.log(err, "something went wrong"));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(insightService.data, "service");
  const handleInput = (e) => {
    setinput(e.target.value.toLowerCase());
  };
  // const handleFilter = () => {
  //   let filterData = userInfo.filter((v) => v.name.toLowerCase() === input);
  //   setUserInfo(filterData);
  //   console.log(userInfo, "filter");
  // };
  const handleClick = () => {
    // handleFilter();
    // props.handleSubmit(userInfo, input);
    // setinput("");
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
      <div>
        <UsersTable insight={insight} serviceInfo={insightService.data} />
      </div>
    </div>
  );
};
function mapStatetoprops(HomePageReducer) {
  const { reports } = HomePageReducer;
  return {
    reports,
  };
}
export default connect(mapStatetoprops, { handleSubmit })(HomePage);

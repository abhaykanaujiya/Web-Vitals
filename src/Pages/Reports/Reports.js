import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
// import { handleView } from "../../Actions/ReportsAction";
import "./report.css";

export const Reports = (props) => {
  // const [pageSpeed, setPageSpeed] = useEffect({});
  const pS = props.pageInsight;
  console.log(pS, "pS");
  let { userId } = useParams();
  // if (props.pageInsight[i] === userId) {
  //   console.log("");
  // }
  console.log(userId, "user id");
  // useEffect(() => {
  //   axios
  //     .get("http://web-vitals.meeshotest.in/analytics/1.0/pagespeed/get")
  //     .then((res) => {
  //       console.log(res.data, "report user id");
  //       setPageSpeed(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err, "somthing went wrong");
  //     });
  // }, []);

  return (
    <div
      className='report-cards'
      style={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "space-between",
        marginTop: "10px",
        padding: "10px",
      }}
    >
      <div className='reports-container'>
        <h4>
          <b>pageSpeedInsight</b>
        </h4>
        <p>page_url</p>
        <p>strategy</p>
        <p>_id</p>
        <p>updated_at</p>
      </div>
      <div className='reports-container'>
        <h4>
          <b>pageSpeedInsight</b>
        </h4>
        <p>page_url</p>
        <p>strategy</p>
        <p>_id</p>
        <p>updated_at</p>
      </div>
      <div className='reports-container'>
        <h4>
          <b>pageSpeedInsight</b>
        </h4>
        <p>page_url</p>
        <p>strategy</p>
        <p>_id</p>
        <p>updated_at</p>
      </div>
      <div className='reports-container'>
        <h4>
          <b>pageSpeedInsight</b>
        </h4>
        <p>page_url</p>
        <p>strategy</p>
        <p>_id</p>
        <p>updated_at</p>
      </div>
      <div className='reports-container'>
        <h4>
          <b>pageSpeedInsight</b>
        </h4>
        <p>page_url</p>
        <p>strategy</p>
        <p>_id</p>
        <p>updated_at</p>
      </div>
      <div className='reports-container'>
        <h4>
          <b>pageSpeedInsight</b>
        </h4>
        <p>page_url</p>
        <p>strategy</p>
        <p>_id</p>
        <p>updated_at</p>
      </div>
    </div>
  );
};
function mapStatetoprops({ HomePageReducer }) {
  const { pageInsight, postReqData } = HomePageReducer;
  return {
    pageInsight,
    postReqData,
  };
}

export default connect(mapStatetoprops, {})(Reports);

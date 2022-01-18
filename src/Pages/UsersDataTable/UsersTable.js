import React, { useState } from "react";

import "./userTable.css";
// import { handleView } from "../../Actions/ReportsAction";
import { Link } from "react-router-dom";

const UsersTable = (props) => {
  const postReqData = props.postReqData;

  const insight = props.pageInsighData.data;

  // const handleClick = (select, i) => {
  //   console.log(select[i], "select");
  //   handleView(select, i);
  // };
  return (
    <div className='container'>
      <table className='table-body'>
        <tbody>
          <tr>
            <th>Count</th>
            <th>Service</th>
            <th>Service Id</th>
            <th>PageUrl</th>
            <th>Strategy</th>
            <th>Created_At</th>
            <th>Action</th>
          </tr>

          {insight?.pageSpeedInsight.map((v, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{v.service_id}</td>
              <td>{v.service_id}</td>
              <td>{v.page_url}</td>
              <td>{v.strategy}</td>
              <td>{v.created_at}</td>
              <td>
                <Link to={`/pageInsight/${index + 1}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

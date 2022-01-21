import React, { useState } from "react";

import "./userTable.css";

import { Link } from "react-router-dom";

const UsersTable = (props) => {
  const postReqData = props.postReqData;

  const insight = props.pageInsighData.data;
  console.log(typeof insight, "typee of insight");
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
                <div className='but-link' style={{ border: "1px solid " }}>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/pageInsight/${v._id}`}
                  >
                    View
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

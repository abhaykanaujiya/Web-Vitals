import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
export const UsersTable = (props) => {
  const serviceInfo = props.serviceInfo;
  const insight = props.insight;
  console.log(insight, "insight");
  return (
    <div>
      <table className='table table-success table-striped'>
        <thead>
          <tr>
            <th scope='col'>Count</th>
            <th scope='col'>Id</th>
            <th scope='col'>Version</th>
            <th scope='col'>PageUrl</th>
            <th scope='col'>Service Id</th>
            <th scope='col'>Strategy</th>
            <th scope='col'>Created_At</th>
            <th scope='col'>Service</th>
          </tr>
        </thead>

        {insight?.pageSpeedInsight?.map((v, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{v._id}</td>
              <td>{v.__v}</td>
              <td>{v.page_url}</td>
              <td>{v.service_id}</td>
              <td>{v.strategy}</td>
              <td>{v.created_at}</td>
              <td>{v.service_id}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

// function mapStatetoprops(HomePageReducer) {
//   const { reports } = HomePageReducer;
//   return {
//     reports,
//   };
// }

// export default connect(mapStatetoprops, {})(UsersTable);

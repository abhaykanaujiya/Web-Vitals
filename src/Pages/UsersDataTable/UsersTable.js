import React from "react";
//import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

const UsersTable = (props) => {
  const insight = props.pageInsighData;
  console.log(insight, "insight");
  return (
    <div>
      <table className='table table-success table-striped'>
        <thead>
          <tr>
            <th scope='col'>Count</th>
            <th scope='col'>Id</th>
            <th scope='col'>Service</th>
            <th scope='col'>Service Id</th>
            <th scope='col'>Version</th>
            <th scope='col'>PageUrl</th>
            <th scope='col'>Strategy</th>
            <th scope='col'>Created_At</th>
          </tr>
        </thead>

        {insight?.data?.pageSpeedInsight?.map((v, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{v._id}</td>
              <td>{v.service_id}</td>
              <td>{v.service_id}</td>
              <td>{v.__v}</td>
              <td>{v.page_url}</td>
              <td>{v.strategy}</td>
              <td>{v.created_at}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default UsersTable;
// function mapStatetoprops({ HomePageReducer }) {
//   const { pageInsight, serviceData, error } = HomePageReducer;
//   return {
//     pageInsight,
//     serviceData,
//     error,
//   };
// }

// export default connect(mapStatetoprops, {})(UsersTable);

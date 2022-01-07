import React, { useState } from "react";
import { EndPoints } from "../../EndPoints/EndPoints";

export const HomePage = () => {
  const [data, setdata] = useState("");
  const getData = () => {
    EndPoints.then((response) => console.log(response, "response"));
  };
  return (
    <div className='body'>
      <div className='inner-body'>
        <input type='text' placeholder='Enter something' />
      </div>
      <div className='button-body'>
        <button className='button' onClick={getData}>
          Generate Report
        </button>
      </div>
    </div>
  );
};

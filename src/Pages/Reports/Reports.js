import axios from "axios";
import React, { useState, useEffect } from "react";
import { report_url } from "../../EndPoints/EndPoints";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import "./report.css";

const Reports = (props) => {
  const [pageSpeed, setPageSpeed] = useState({});
  const pS = pageSpeed;
  const pM = pageSpeed.page_speed_metrics;

  console.log(pM?.loadingExperience.metrics, "pM");
  let { userId } = useParams();
  useEffect(() => {
    axios
      .get(`${report_url}/${userId}`, {
        headers: {
          "access-token": 12345,
        },
      })
      .then((res) => {
        console.log(res.data, "report user id");
        setPageSpeed(res.data.pageSpeedInsight);
      })
      .catch((err) => {
        console.log(err, "somthing went wrong");
      });
  }, []);

  return (
    <div className='report-cards'>
      <div
        className='reports-body'
        style={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "space-between",
          marginTop: "10px",
          padding: "10px",
        }}
      >
        <div className='reports-container'>
          <div className='inner-report'>
            <h4>PageSpeedInsight</h4>
            <div>
              <h5>Strategy</h5>
              <div>{pS.strategy}</div>
            </div>
            <div>
              <h5>Created_At</h5>
              <div>{pS.created_at}</div>
            </div>
            <div>
              <h5>Id</h5>
              <div>{pS._id}</div>
            </div>
          </div>
        </div>

        <div className='reports-container'>
          <div className='inner-report'>
            <h4>Page_speed_metrics</h4>
            <div>
              <h5>analysisUTCTimestamp</h5>
              <div>{pM?.analysisUTCTimestamp}</div>
            </div>
          </div>
        </div>

        <div className='reports-container'>
          <div className='inner-report'>
            <h4>lighthouseResult</h4>
            <div>
              <h5>fetchTime</h5>
              <div>{pM?.lighthouseResult?.fetchTime}</div>
            </div>
            <div>
              <h5>requestedUrl</h5>
              <div>{pM?.lighthouseResult?.requestedUrl}</div>
            </div>
          </div>
        </div>

        <div className='reports-container'>
          <div className='inner-report'>
            <h4>{pM?.lighthouseResult?.categories?.performance?.title}</h4>
            <div>
              <h5>score</h5>
              <div>{pM?.lighthouseResult?.categories?.performance?.score}</div>
            </div>
          </div>
        </div>

        <div className='reports-container'>
          <div className='inner-report'>
            <h4>CUMULATIVE_LAYOUT_SHIFT_SCORE</h4>
            <div>
              <h5>Category</h5>
              <div>
                {
                  pM?.loadingExperience.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE
                    .category
                }
              </div>
            </div>
            <div>
              <h5>Percentile</h5>
              <div>
                {
                  pM?.loadingExperience.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE
                    .percentile
                }
              </div>
            </div>
          </div>
        </div>

        <div className='reports-container'>
          <div className='inner-report'>
            <h4>FIRST_CONTENTFUL_PAINT_MS</h4>
            <div>
              <h5>Category</h5>
              <div>
                {
                  pM?.loadingExperience.metrics?.FIRST_CONTENTFUL_PAINT_MS
                    .category
                }
              </div>
            </div>
            <div>
              <h5>Percentile</h5>
              <div>
                {
                  pM?.loadingExperience.metrics?.FIRST_CONTENTFUL_PAINT_MS
                    .percentile
                }
              </div>
            </div>
          </div>
        </div>

        <div className='reports-container'>
          <div className='inner-report'>
            <h4>FIRST_INPUT_DELAY_MS</h4>
            <div>
              <h5>Category</h5>
              <div>
                {pM?.loadingExperience.metrics?.FIRST_INPUT_DELAY_MS.category}
              </div>
            </div>
            <div>
              <h5>Percentile</h5>
              <div>
                {pM?.loadingExperience.metrics?.FIRST_INPUT_DELAY_MS.percentile}
              </div>
            </div>
          </div>
        </div>

        <div className='reports-container'>
          <div className='inner-report'>
            <h4>LARGEST_CONTENTFUL_PAINT_MS</h4>
            <div>
              <h5>Category</h5>
              <div>
                {
                  pM?.loadingExperience.metrics?.LARGEST_CONTENTFUL_PAINT_MS
                    .category
                }
              </div>
            </div>
            <div>
              <h5>Percentile</h5>
              <div>
                {
                  pM?.loadingExperience.metrics?.LARGEST_CONTENTFUL_PAINT_MS
                    .percentile
                }
              </div>
            </div>
          </div>
        </div>
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

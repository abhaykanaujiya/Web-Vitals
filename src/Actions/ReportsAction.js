export const handleView = (select, i) => {
  console.log(select[i], "handle view report action");
  let data = select[i];
  return (dispatch) => {
    dispatch({ type: "GET_REPORT", payload: data });
  };
};

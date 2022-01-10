export const handleSubmit = (userInfo, input) => {
  console.log(userInfo, input, "handle submit");
  return (dispatch) => {
    let data = userInfo.filter(
      (value) => value.name.toLowerCase().search(input) !== -1
    );
    console.log(data, "display");
    dispatch({ type: "SUBMIT", payload: data });
  };
};

export const createProject = (project) => {
  return (dispatch, getState) => {
    // call api
    dispatch({ type: "CREATE_PROJECT", project: project });
  };
};

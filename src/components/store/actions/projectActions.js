export const createProject = (project) => {
  //getFirebase & getFirestore pour connecter au firebase
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // call api
    dispatch({ type: "CREATE_PROJECT", project: project });
  };
};

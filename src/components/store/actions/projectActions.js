export const createProject = (project) => {
  //getFirebase & getFirestore pour connecter au firebase
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // call api

    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "elyes",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

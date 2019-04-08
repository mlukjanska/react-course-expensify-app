import database from '../firebase/firebase';

//ADD_CATEGORY
export const addSubCategory = (subcategory) => ({
    type: 'ADD_SUBCATEGORY',
    subcategory
});

export const startAddSubCategory = (subcategoryData = {}) => {
  return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const {
          parentkey = '',
          value = '', 
          label = ''
      } = subcategoryData;
      const subcategory = { parentkey, value, label };

      return database.ref(`users/${uid}/subcategories`).push(subcategory).then((ref) => {
          dispatch(addSubCategory({
              id: ref.key,
              ... subcategory
          }));
      });
  };
};


// SET_SUBCATEGORIES
export const setSubCategories = (subcategories) => ({
    type: 'SET_SUBCATEGORIES',
    subcategories
});

export const startSetSubCategories = () => {
    return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/subcategories`)
        .once('value')
        .then((snapshot) => {
            const subcategories = [];
            snapshot.forEach((childSnapshot) => {
                subcategories.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setSubCategories(subcategories));
      });
    };
};
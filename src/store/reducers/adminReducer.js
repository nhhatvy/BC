import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  position: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FECTH_GENDER_START:
        let copyState = { ...state };
        copyState.isLoadingGender = true;
        return {
          ...copyState,
        };
      
    case actionTypes.FECTH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      return {
        ...state,
      };
    case actionTypes.FECTH_GENDER_SUCCESS:
      let copyState = { ...state };
      copyState.genders = action.data;
      return {
        ...copyState,
      };
    case actionTypes.FECTH_GENDER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;

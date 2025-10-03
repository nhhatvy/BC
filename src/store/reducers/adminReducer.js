import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  position: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FECTH_GENDER_START:
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

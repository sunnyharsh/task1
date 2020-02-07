import { FORM_DATA_SUCCESS } from "../action.types";

const initState = [];

const reducers = (state = initState, { type, values, error }) => {
  switch (type) {
    case FORM_DATA_SUCCESS:
      let data = [];
      data.push(values);
      return data;
    default:
      return state;
  }
};

export default reducers;

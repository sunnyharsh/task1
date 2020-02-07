import { FORM_DATA, FORM_DATA_SUCCESS } from "../action.types";

export const loginData = values => ({
  type: FORM_DATA,
  values
});

export const loginDataSuccess = values => ({
  type: FORM_DATA_SUCCESS,
  values
});

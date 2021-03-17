import { combineReducers } from "redux";
import { customers } from "./customers";
import { reducer as reduxForm } from "redux-form";
import { CUSTOMER_VIEW, CUSTOMER_LIST, CUSTOMER_EDIT } from "./../constants";

const user = (state, action) => ({
  permissions: [CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT],
});

export default combineReducers({ customers, form: reduxForm, user });

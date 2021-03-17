import { createSelector } from "reselect";

export const getCustomers = (state) => state.customers;
export const getCustomer = createSelector(
  (state, props) => state.customers.find((c) => c.dni === props.dni),
  (customer) => customer
);

import React from "react";
import PropTypes from "prop-types";
import CustomersListItem from "./CustomersListItem";
import { accessControl } from "../helpers/accessControl";
import { CUSTOMER_LIST } from "../constants";

const CustomersList = ({ customers, urlPath }) => {
  return (
    <table className="customers-list">
      {customers.map((c) => {
        return (
          <CustomersListItem
            key={c.dni}
            dni={c.dni}
            name={c.name}
            editAction={"editar"}
            delAction={"eliminar"}
            urlPath={urlPath}
          ></CustomersListItem>
        );
      })}
    </table>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);

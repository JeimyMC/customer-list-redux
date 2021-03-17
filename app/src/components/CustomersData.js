import React from "react";
import PropTypes from "prop-types";
import CustomersActions from "./CustomersActions";
import { accessControl } from "../helpers/accessControl";
import { CUSTOMER_VIEW } from "../constants";

const CustomersData = ({
  id,
  name,
  dni,
  age,
  onBack,
  isDeleteAllow,
  onDelete,
}) => {
  return (
    <article>
      <div className="customer-data">
        <p>Nombre: {name}</p>
        <p>DNI: {dni}</p>
        <p>Edad: {age}</p>
      </div>
      <CustomersActions>
        <button onClick={onBack}>Volver</button>
        {isDeleteAllow && (
          <button onClick={() => onDelete(id)}>Eliminar</button>
        )}
      </CustomersActions>
    </article>
  );
};

CustomersData.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
  isDeleteAllow: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default accessControl([CUSTOMER_VIEW])(CustomersData);

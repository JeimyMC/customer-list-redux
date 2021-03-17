import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CustomersListItem = ({ name, dni, editAction, delAction, urlPath }) => {
  return (
    <tr>
      <td>
        <Link to={`${urlPath}${dni}`}>{name}</Link>
      </td>
      <td>
        <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
      </td>
      <td>
        <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
      </td>
    </tr>
  );
};

CustomersListItem.propTypes = {
  dni: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersListItem;

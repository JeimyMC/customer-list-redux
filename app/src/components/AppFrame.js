import React from "react";
import PropTypes from "prop-types";
import AppHeader from "./AppHeader";

const AppFrame = ({ header, body }) => {
  return (
    <div className="app-frame">
      <div className="wrapper">
        <AppHeader title={header}></AppHeader>
        <main>{body}</main>
      </div>
    </div>
  );
};

AppFrame.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};

export default AppFrame;

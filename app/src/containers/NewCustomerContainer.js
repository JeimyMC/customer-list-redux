import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import { connect } from "react-redux";
import { insertCustomer } from "../actions/insertCustomer";

class NewCustomerContainer extends Component {
  handleSubmit = (values) => {
    this.props.insertCustomer(values);
  };
  handlSubmitSuccess = () => this.props.history.goBack();

  handlOnBack = () => this.props.history.goBack();

  renderBody = () => {
    return (
      <CustomerEdit
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handlSubmitSuccess}
        onBack={this.handlOnBack}
      ></CustomerEdit>
    );
  };
  render() {
    return <AppFrame header={"Edición"} body={this.renderBody()}></AppFrame>;
  }
}

NewCustomerContainer.propTypes = {
  insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(
  connect(null, { insertCustomer })(NewCustomerContainer)
);

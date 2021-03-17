import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { getCustomer } from "../selectors/customers";
import CustomerEdit from "../components/CustomerEdit";
import CustomersData from "../components/CustomersData";
import { fetchCustomers } from "../actions/fetchCustomers";
import { updateCustomer } from "../actions/updateCustomer";
import { deleteCustomer } from "../actions/deleteCustomer";

class CustomerContainer extends Component {
  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  handleSubmit = (values) => {
    const { id } = values;
    return this.props.updateCustomer(id, values);
  };

  handlSubmitSuccess = () => this.props.history.goBack();

  handlOnBack = () => this.props.history.goBack();

  handleOnDelete = (id) => {
    this.props.deleteCustomer(id).then((v) => this.props.history.goBack());
  };

  renderCustomerControl = (isEdit, isDelete) => {
    if (this.props.customer) {
      const CustomersControl = isEdit ? CustomerEdit : CustomersData;
      return (
        <CustomersControl
          {...this.props.customer}
          onSubmit={this.handleSubmit}
          onSubmitSuccess={this.handlSubmitSuccess}
          onBack={this.handlOnBack}
          isDeleteAllow={!!isDelete}
          onDelete={this.handleOnDelete}
        ></CustomersControl>
      );
    }
    return null;
  };

  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match: isEdit }) => (
        <Route
          path="/customers/:dni/del"
          children={({ match: isDelete }) =>
            this.renderCustomerControl(isEdit, isDelete)
          }
        ></Route>
      )}
    ></Route>
  );

  render() {
    return (
      <AppFrame
        header={"Datos del cliente"}
        body={this.renderBody()}
      ></AppFrame>
    );
  }
}

CustomerContainer.propTypes = {
  customer: PropTypes.object,
  fetchCustomers: PropTypes.func,
  updateCustomer: PropTypes.func.isRequired,
  isDeleteAllow: PropTypes.bool,
  deleteCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomer(state, props),
});

export default withRouter(
  connect(mapStateToProps, { fetchCustomers, updateCustomer, deleteCustomer })(
    CustomerContainer
  )
);

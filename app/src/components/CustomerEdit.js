import React, { Component } from "react";
import PropTypes from "prop-types";
import { Prompt } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";
import { accessControl } from "../helpers/accessControl";
import { CUSTOMER_EDIT } from "../constants";

const isNumber = (value) =>
  isNaN(Number(value)) && "El campo debe ser numérico";

const validate = (values) => {
  const error = {};
  if (!values.name) {
    error.name = "El nombre es requerido";
  }

  if (!values.dni) {
    error.dni = "El DNI es obligatorio";
  }

  if (!values.age) {
    error.age = "La edad es obligatoria";
  }
  return error;
};

const toNumber = (num) => num && Number(num);

const toKeep = (value) => value && value.toLowerCase();

const toShow = (value) =>
  value && value.charAt(0).toUpperCase() + value.slice(1);

class CustomerEdit extends Component {
  componentDidMount() {
    if (this.txt) {
      this.txt.focus();
    }
  }

  renderMyField = ({ input, meta, type, label, name, withFocus }) => {
    const controls = { ...input, value: input["value"] || "" };
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          {...controls}
          type={!type ? "text" : type}
          ref={withFocus && ((txt) => (this.txt = txt))}
        ></input>
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    );
  };

  render() {
    const {
      handleSubmit,
      submitting,
      onBack,
      pristine,
      submitSucceeded,
    } = this.props;
    return (
      <div className="edit">
        <form onSubmit={handleSubmit}>
          <Field
            withFocus
            name="name"
            component={this.renderMyField}
            label="Nombre"
            parse={toShow}
            format={toKeep}
          ></Field>
          <Field
            name="dni"
            component={this.renderMyField}
            validate={isNumber}
            label="DNI"
          ></Field>
          <Field
            name="age"
            component={this.renderMyField}
            validate={isNumber}
            parse={toNumber}
            type="number"
            label="Edad"
          ></Field>
          <CustomersActions>
            <button type="submit" disabled={pristine || submitting}>
              Aceptar
            </button>
            <button type="button" onClick={onBack}>
              Cancelar
            </button>
          </CustomersActions>
          <Prompt
            when={!pristine && !submitSucceeded}
            message="Se eliminarán los datos"
          ></Prompt>
        </form>
      </div>
    );
  }
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
};

export default accessControl([CUSTOMER_EDIT])(
  setPropsAsInitial(reduxForm({ form: "CustomerEdit", validate })(CustomerEdit))
);

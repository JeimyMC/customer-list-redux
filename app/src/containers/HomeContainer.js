import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomersActions from "../components/CustomersActions";

class HomeContainer extends Component {
  handlOnClick = () => {
    this.props.history.push("/customers");
  };
  render() {
    return (
      <AppFrame
        header="Lista de clientes"
        body={
          <div>
            <CustomersActions>
              <button onClick={this.handlOnClick}>Ver</button>
            </CustomersActions>
          </div>
        }
      ></AppFrame>
    );
  }
}

export default withRouter(HomeContainer);

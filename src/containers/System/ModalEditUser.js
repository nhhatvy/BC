import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { connect } from "react-redux";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    id :"",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id : user.id,
        email: user.email,
        password: "hardcode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnChageInput = (event, id) => {
    const value = event.target.value;
    const copyState = { ...this.state, [id]: value };
    this.setState(copyState);
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter : " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.editUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className="modal-user-container"
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>Edit a new user</ModalHeader>

        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                placeholder="name@example.com"
                onChange={(event) => {
                  this.handleOnChageInput(event, "email");
                }}
                value={this.state.email}
                disabled
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                onChange={(event) => {
                  this.handleOnChageInput(event, "password");
                }}
                value={this.state.password}
                disabled
              />
            </div>
            <div className="input-container">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter first name..."
                onChange={(event) => {
                  this.handleOnChageInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter last name..."
                onChange={(event) => {
                  this.handleOnChageInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                placeholder="Street, City..."
                onChange={(event) => {
                  this.handleOnChageInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>

        <ModalFooter className="form-actions">
          <Button className="btn-ghost px-3" onClick={() => this.toggle()}>
            Cancel
          </Button>
          <Button
            className="btn-gradient px-3"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);

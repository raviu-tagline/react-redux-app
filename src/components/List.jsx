import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class List extends Component {
  render() {
    return (
      <>
        <table
          style={{
            marginTop: 25 + "px",
            marginLeft: 850 + "px",
          }}
        >
          <thead>
            <tr>
              <td>Sr. No</td>
              <td>Name</td>
              <td>Age</td>
              <td>Number</td>
              <td>Email</td>
              <td colSpan="2">Operations</td>
            </tr>
          </thead>
          <tbody>
            {this.props.formData.map((item, i) => (
              <tr id={i}>
                <td>{i + 1}</td>
                <td>{item.formData.name.name}</td>
                <td>{item.formData.age.age}</td>
                <td>{item.formData.number.number}</td>
                <td>{item.formData.email.email}</td>
                <td>
                  <FontAwesomeIcon icon={faEdit} />
                </td>
                <td>
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

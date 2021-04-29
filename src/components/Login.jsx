import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "../custom.css";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="container-fluid col-6 mt-5">
          <div classNam="card">
            <div className="card-title">
              <h1>Login here</h1>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    className="form-control"
                    value=""
                    onChange=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value=""
                    className="form-control"
                    onChange=""
                  />
                </div>
                <input type="submit" className="form-control btn btn-primary" />
              </form>
              <hr />
              <Link className="btn btn-success" to="/create">
                <strong>Create new account</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

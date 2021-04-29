import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import "../custom.css";

function Home(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="container-fluid col-6 mt-5">
          <div className="card">
            <div className="card-title mt-3">
              <h1>Register Here</h1>
            </div>

            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="form-control"
                    onChange={(e) =>
                      setName({
                        name: e.target.value == "" ? null : e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your age"
                    className="form-control"
                    onChange={(e) => setAge({ age: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your number"
                    className="form-control"
                    onChange={(e) => setNumber({ number: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your email"
                    className="form-control"
                    onChange={(e) => setEmail({ email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    className="btn btn-primary form-control"
                    value="submit"
                    onClick={() =>
                      props.insertDataHandler({
                        name: name,
                        age: age,
                        number: number,
                        email: email,
                      })
                    }
                  />
                </div>
              </form>
              <hr />
              Already have an account? <Link to="/">Login Here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(Home);

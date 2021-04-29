import React, { useState } from "react";
import axiosApi from "../axios";
import History from "../reusableContents/history";
import Links from "../reusableComponents/Links";
import Forms from "../reusableComponents/Form";
import registerDesign from "../reusableContents/registerDesign";

const Registration = () => {
  const [changePath, setChangePath] = useState(false);
  const [path, setPath] = useState("/");

  const onSubmit = async (data) => {
    console.log("data are -- ", data);
    const { status, message } = await axiosApi(
      "post",
      "user/SignUp/",
      data,
      false
    );

    console.log(status);

    if (status === 200) {
      alert(message);
      alert("Check your email");
      setPath("/");
      setChangePath(true);
    } else {
      alert(message);
    }
  };
  return (
    <>
      <div className="container">
        <div className="container-fluid col-6 mt-5">
          <div className="card">
            <div className="card-title mt-3">
              <h1>Register Here</h1>
            </div>

            <div className="card-body">
              <Forms content={registerDesign} onSubmit={onSubmit} />
              <hr />
              Already have an account? <Links to="/">Login Here</Links>
            </div>
          </div>
        </div>
        {changePath && <History path={path} />}
      </div>
    </>
  );
};

export default Registration;

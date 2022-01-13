import React from "react";

const usuarios = () => {
  return (
    <div>
      <h1 className="titulo mb-4 mt-4"> SIGN UP </h1>

      <div className=" col-10 regform">
        <div className="col-sm-10 col-md-12 formulario">
          <form>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We will not share your email with anyone.
              </div>
            </div>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <label for="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="Name"
                className="form-control"
                id="exampleInputName1"
              />
            </div>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <label for="exampleInputLastName1" className="form-label">
                {" "}
                Last Name
              </label>
              <input
                type="lastName"
                className="form-control"
                id="exampleInputLastName1"
              />
            </div>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-sm-6 col-md-12 m-auto">
              <label for="exampleInputRPassword1" className="form-label">
                {" "}
                Repeat Password
              </label>
              <input
                type="rpassword"
                className="form-control"
                id="exampleInputRPassword1"
              />
            </div>
            <div className="mb-3 col-sm-10 col-md-12 m-auto">
              <button type="submit" className="btn btn-warning mt-3 m-auto">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default usuarios;

import React from "react";

function App() {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Register</h2>

      <div>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="bio" className="form-label">
            Tell us about you
          </label>
          <textarea className="form-control" id="bio" rows="3"></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </div>
      <br></br>
      <div>
        <h2 className="text-center"> Icons! </h2>
        <div className="mb-2 input-group">
          {/* <label htmlFor="email" className="form-label">
            Email address
          </label> */}
          <div className="icon">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-envelope"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
              />
            </svg>
          </div>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <div>
            <div className="input-group mb-2 ">
              <div className="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-person "
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername2"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <div className="mb-2 input-group">
          {/* <label htmlFor="password" className="form-label">
            Password
          </label>
           */}
          <div className="icon">
            <svg
              width="1em"
              height="em"
              viewBox="0 0 16 16"
              className="bi bi-lock"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
              />
            </svg>
          </div>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Confirm Password"
          />
        </div> */}
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

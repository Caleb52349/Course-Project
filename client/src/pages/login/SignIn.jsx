import * as React from 'react';

import {Link} from 'react-router-dom';





export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col">
        <div className="card mx-auto">
          <div className="card-body">
            <h1
              className="card-title"
              style={{ borderBottom: "1px solid #efefef" }}
            >
              Sign IN
            </h1>
  <Link to ='/Login'>
  <button type="button" className="btn btn-link">Login</button>
  </Link>
  <Link to ='/Register'>
  <button type="button" className="btn btn-link">Register</button>
  </Link>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label>Username</label>
<input type="text" className="form-control"    required placeholder="UserName"/>
</div>
<div className="form-group">
<label >Password</label>
<input type="password" className="form-control"  required placeholder="Password"/>
</div>
<br/>
<br/>
<button type="submit" value="Login" className="btn btn-primary">Login</button>
<div className="form-check text-center">
<label>Not a Member?</label>
<Link to= "/Register">
<button type="button" className="btn btn-link">Register</button>
</Link>
</div>
</form>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}
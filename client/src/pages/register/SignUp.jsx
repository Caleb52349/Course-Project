import * as React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import equals from 'validator/lib/equals'
import { showErrorMsg, showLoading, showSucessMsg } from '../../helpers/message';
import { signup } from '../../api/auth';






const SignUp =()=> {

  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    password2:'',
    successMsg:false,
    errMsg:false,
    loading:false,
  })
  //destructure
  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errMsg,
    loading,
  } = formData;


  
  //event handlers
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
      successMsg:'',
      errMsg:'',
    })
  }

  const handleSubmit = (e) => {
   e.preventDefault();

   //client side validation
    if(isEmpty(username)||isEmpty(email)||isEmpty(password)||isEmpty(password2)){
      setFormData({
        ...formData,errMsg:"All Fields are Required"
      })
    }else if(!isEmail(email)){
      setFormData({
        ...formData,errMsg:"Invalid email"
      })
    }
    else if (!equals(password,password2)){
      setFormData({
        ...formData,errMsg:"Password do not match"
      })
    }else{
      //success
      const {username,email,password} = formData;
      const data ={username,email,password};

      setFormData({...formData,loading:true})

      signup(data)
        .then((response)=>{
        console.log(response)
        setFormData({
          username:'',
          email:'',
          password:'',
          password2:'',
          loading: false,
          successMsg: response.data.successMessage
        })
      })
      .catch((err)=>{
        console.log("Axios sign err",err);
        setFormData({
          ...formData,loading:false,errMsg:err.response.data.errorMessage})
        });
    }
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
             Sign Up
            </h1>
  <Link to ='/Login'>
  <button type="button" className="btn btn-link">Login</button>
  </Link>
  <Link to ='/Register'>
  <button type="button" className="btn btn-link">Register</button>
  </Link>
  <form onSubmit={handleSubmit} noValidate>
<div className="form-group">
{successMsg && showSucessMsg(successMsg)}
{errMsg && showErrorMsg(errMsg)}
{loading && <div className='text-center'>{showLoading()}</div>}
<br></br>
<label>Username</label>
<input type="text" className="form-control"  name='username' value={username}onChange={handleChange}  placeholder="UserName"/>
</div>
<div className="form-group">
<label>Email Address</label>
<input type="email" className="form-control"  name='email' value={email} onChange={handleChange}  placeholder="Email"/>
</div>
<div className="form-group">
<label >Password</label>
<input type="password" className="form-control" name ='password' value={password} onChange={handleChange}  placeholder="Password"/>
<label >Password</label>
<input type="password" className="form-control" name ='password2' value={password2} onChange={handleChange}  placeholder="Password2"/>
</div>
<br/>
<br/>
<button type="submit" onSubmit={handleSubmit} value ="Register" className="btn btn-primary">Register</button>
<div className="form-check text-center">
<label>Already a Member?</label>
<Link to= "/Login">
<button type="button"  className="btn btn-link">Login</button>
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

export default SignUp

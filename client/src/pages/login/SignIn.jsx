import * as React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { showErrorMsg, showLoading} from '../../helpers/message';
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import { signin } from '../../api/auth';
import { setAuthenticate ,isAuthenticated } from '../../helpers/auth';






export default function SignIn() {

  const [formData,setFormData]=useState({
    email:'',
    password:'',
    errMsg:false,
    loading:false,
  })

  const {
    email,
    password,
    errMsg,
    loading,
  } = formData;

const navigate = useNavigate();
    
  //event handlers
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
      errMsg:'',
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
     //client side validation
     if(isEmpty(email)||isEmpty(password)){
      setFormData({
        ...formData,errMsg:"All Fields are Required"
      })
    }else if(!isEmail(email)){
      setFormData({
        ...formData,errMsg:"Invalid email"
      })
    }else{
      //success
      const {email,password} = formData;
      const data ={email,password};

      setFormData({...formData,loading:true})

      signin(data)
        .then(res =>{
          setAuthenticate(res.data.token,res.data.user)
          if(isAuthenticated() && isAuthenticated().role === 1){
            console.log('Redirect to Admin Dashboard')
            navigate('/admin/dashboard');
          }
          else{
            console.log('Redirect to User dashboard');
            navigate('/user/dashboard')
          }
        })
        .catch(err =>{
          console.log('Sigin api Function error :', err);
        })
    
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
              Sign IN
            </h1>
  <Link to ='/Login'>
  <button type="button" className="btn btn-link">Login</button>
  </Link>
  <Link to ='/Register'>
  <button type="button" className="btn btn-link">Register</button>
  </Link>
<form onSubmit={handleSubmit} noValidate>
{errMsg && showErrorMsg(errMsg)}
{loading && <div className='text-center'>{showLoading()}</div>}
<div className="form-group">
<label>Email</label>
<input type="text" className="form-control"   name='email' value={email} onChange={handleChange} required placeholder="email"/>
</div>
<div className="form-group">
<label >Password</label>
<input type="password" className="form-control" name='password' value={password} onChange={handleChange} required placeholder="password"/>
</div>
<br/>
<br/>
<button type="submit" value="Login"onSubmit={handleSubmit} className="btn btn-primary">Login</button>
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
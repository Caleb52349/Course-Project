import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export const showErrorMsg= (msg) =>(
<div className="alert alert-danger" role="alert">
  {msg}
</div>
)

export const showSucessMsg= (msg) =>(
    <div className="alert alert-success" role="alert">
      {msg}
    </div>
    )

    export const showLoading= () =>(
          <>
        <div className="spinner-border" role="status">
  <span className="sr-only"></span>
</div>
        </>
      
        )
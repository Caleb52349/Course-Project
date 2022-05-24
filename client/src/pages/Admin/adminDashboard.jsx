import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { getCollections } from "../../api/collection";


const AdminDashboard = ()=>{

  useEffect(()=>{
    loadCollection();
},[])


  const [collection,setCollection]=useState('')

  const loadCollection = async ()=> {
    await getCollections()
    .then((response)=>{
        setCollection(response.data.collections)
    })
    .catch(err =>{
        console.log(err)
    })
}
    return(
        <div>
      <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Collection Management</h1>
            <p class="lead text-muted">Collection Management to Store your favourite Items</p>
            <p>
            <Link to ='/user/addCollection'> <button class="btn btn-primary" type="submit">Add Collection</button></Link>
            <Link to ='/user/addTopics'> <button class="btn btn-primary" type="submit">Add Topics</button></Link>
            </p>
          </div>
        </section>
  
        <div class="album py-5 bg-light">
          <div class="container">
  
            <div class="row">
            {collection && collection.map(col=>(
              <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={`/uploads/${col.fileName}`} alt="Game"/>
                <div class="card-body">
                <h4>{col.collectionName}</h4>
                  <p class="card-text">{col.collectionDesc}</p>
                  <h6>{col.collectionTag}</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>

            ))}
            </div>
          </div>
        </div>
  
      </main>
        </div>
      )
}
export default AdminDashboard;
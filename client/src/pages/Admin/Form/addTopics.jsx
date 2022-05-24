
    import React,{ useEffect, useState } from "react";
    import isEmpty from "validator/lib/isEmpty";
    import { createTopic, getTopics } from "../../../api/topic";
    import { showSucessMsg ,showErrorMsg} from "../../../helpers/message";
    import "./styles.css";
    
    
    
    const AdminAddTopics =() =>{
    
    const [topic,setTopic]=useState('');
    const [errMsg,setErrMsg] = useState('')
    const [successMsg,setSucessMsg] = useState('')
    

    
    
    const loadTopics = async ()=>{
        await getTopics()
            .then((response)=>{
                
    })
            .catch(err =>{
                console.log(err)
            })
    }
    
       
    
        const handleChange=(e)=>{
            
            setTopic(e.target.value)
          }
    
    
        const handleSubmit =(e)=>{
            e.preventDefault()
            if(isEmpty(topic)){
                setErrMsg('Please enter a Topic')
            }
            else{
                const data ={topic}
                createTopic(data)
                setTopic('');
                setSucessMsg('Topic has been added');
            }
            }
            
            
    
    
        return(
            <div className="container mt-5">
            <div className="row">
            <div className="col">
                <div className="card mx-auto">
                <div className="card-body">
                    <h1
                    className="card-title"
                    style={{ borderBottom: "1px solid #efefef" }}
                    >
                    Add Topic
                    </h1>
    
        <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
    {errMsg && showErrorMsg(errMsg)}
    {successMsg && showSucessMsg(successMsg)}
        <label>Name</label>
        <input type="text" name="topic" className="form-control" value={topic} onChange={handleChange}  />
        </div>
        <div className="form-check text-center">
        <button type="submit" onSubmit={handleSubmit}  className="btn btn-primary">Add</button>
        </div>
        </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    
        
        )
    }


export default AdminAddTopics;
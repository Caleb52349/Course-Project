import React,{ useEffect, useState } from "react";
//import { TagsInput } from "react-tag-input-component";
import isEmpty from "validator/lib/isEmpty";
import { createCollection } from "../../../api/collection";
import { getTopics } from "../../../api/topic";
import { TagsInput } from "react-tag-input-component";
import { showSucessMsg ,showErrorMsg} from "../../../helpers/message";
import "./styles.css";



const AdminAddCollection=()=>{

    const [tags,setTags]=useState(null);
    const [topic,setTopics]=useState(null);
    const [collectionTag,setCollectionTag]=useState(['Gaming']);
    const [collectionData,setCollectionData] = useState({
        collectionName:'',
        collectionDesc:'',
        collectionTopic:'',
        collectionImage:null,
        collectionAuthour:'',
        collectionRate:'',
    })

    //destructure
    const{collectionName
        ,collectionDesc
        ,collectionTopic
        ,collectionImage
        ,collectionAuthour
        ,collectionRate}= collectionData


const [errMsg,setErrMsg] = useState('')
const [successMsg,setSucessMsg] = useState('')

useEffect(()=>{
    loadTopics();
},[])


const loadTopics = async ()=>{
    await getTopics()
        .then((response)=>{
            setTopics(response.data.topics)
})
        .catch(err =>{
            console.log(err)
        })
}



    const handleCollectionImage = (e) =>{
        console.log(e.target.files[0])
        setCollectionData({
            ...collectionData,
            [e.target.name]:e.target.files[0],
        })
        
    }

    const handleChange=(e)=>{
        setCollectionData({
          ...collectionData,
          [e.target.name]:e.target.value,
        })
      }


    const handleSubmit =(e)=>{
        e.preventDefault()
        if(collectionImage === null){
            setErrMsg('Please Select an Image')
        }else if(
            isEmpty(collectionName) ||
            isEmpty(collectionDesc)||
            isEmpty(collectionRate)||
            isEmpty(collectionTopic)
        ){
            setErrMsg('All Fields are required')
        }

            else{
                let formData = new FormData();
                formData.append('collectionName',collectionName)
                formData.append('collectionDesc',collectionDesc)
                formData.append('collectionTopic',collectionTopic)
                formData.append('collectionImage',collectionImage)
                formData.append('collectionAuthour',collectionAuthour)
                formData.append('collectionRate',collectionRate)
                formData.append('collectionTag',collectionTag)
                createCollection(formData)
                .then(response =>{
                    setCollectionData({
                        collectionName:'',
                        collectionDesc:'',
                        collectionTopic:'',
                        collectionImage:null,
                        collectionAuthour:'',
                        collectionRate:'',
                    })
                    setSucessMsg('Created Succesfully')
                })
                .catch(err=>{
                    console.log(err)
                })
    }
}

console.log(collectionTag)


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
                Add Collection
                </h1>

    <form onSubmit={handleSubmit} noValidate>
    <div className="form-group">
{errMsg && showErrorMsg(errMsg)}
{successMsg && showSucessMsg(successMsg)}
    <label>Name</label>
    <input type="text" name='collectionName' className="form-control" value={collectionName} onChange={handleChange}  placeholder="Name"/>
    </div>
    <div className="form-group">
<label >Description:</label>
<textarea className="form-control" name='collectionDesc' value={collectionDesc}  onChange={handleChange}  rows="5" ></textarea>
</div>
    <div className="form-group">
    <label className='text-secondary'>
			Topic
			</label>
			<select
			className='custom-select mr-sm-2'
			name='collectionTopic'
			value={collectionTopic}
            onChange={handleChange}
			>
		<option value=''>
		Choose one...
		</option>
		{topic &&
		topic.map(
		a => (
		<option
		key={
		a._id
		}
		value={
		a._id
		}
		>
		{
		a.topic
		}
		</option>
		)
		)}
		</select>
    </div>
    <br/>
    <br/>
    
    <input 
type='file'
className="custom-file-input"
name='collectionImage'
onChange={handleCollectionImage}

/>
    <div className="m-5 col-md-6">
    </div>
    <div className="form-group">
    <label>Authour</label>
    <input type="text" name ='collectionAuthour'className="form-control" value={collectionAuthour}  onChange={handleChange}  placeholder="Name"/>
    </div>
    <div className="form-group">
    <label>Rate</label>
    <input type="text" name ='collectionRate'className="form-control" value={collectionRate}  onChange={handleChange}  placeholder="Name"/>
    </div>
    <br></br>
    <label>Tags</label>
    <div className="form-group">
    
    <TagsInput
        value={collectionTag}
        onChange={setCollectionTag}
        name="collectionTag"
        placeHolder="enter tag"
      />

    
    <em>press enter to add new tag</em>
    </div>
    
    <br>
    </br>
    <div className="form-check text-center">
    <button type="submit"   className="btn btn-primary">Add</button>
    </div>
    </form>
            </div>
            </div>
        </div>
        </div>
    </div>

    
    )
}


export default AdminAddCollection
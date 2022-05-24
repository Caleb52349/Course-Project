import axios from 'axios';

export const createCollection =async (data) =>{
const response = await axios.post('/api/collection',data)

return response;
}

export const getCollections = async(data)=>{
    const response = await axios.get('/api/collection',data);

    return response;
}
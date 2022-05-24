import axios from 'axios';

export const createTopic = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/topic', formData, config);

    return response;
};

export const getTopics = async () => {
    const response = await axios.get('/api/topic');

    return response;
};
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-amz-clone-7fa9b.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-24c33/us-central1/api' //the API (cloud function) URL
});

export default instance;
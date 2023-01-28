import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-amz-clone-#################################'
    // baseURL: 'http://localhost:5001/clone###########################' //the API (cloud function) URL
});

export default instance;

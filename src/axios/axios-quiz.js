import axios from 'axios';

export default axios.create({
    baseURL: "https://react-auiz.firebaseio.com/",
});
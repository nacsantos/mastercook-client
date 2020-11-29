import axios from "axios";

export default axios.create({
	//baseURL: "http://localhost:5000",
	baseURL: "https://ipm-12-backend.herokuapp.com",
});

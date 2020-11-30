import axios from "axios";

export default axios.create({
	//baseURL: "http://localhost:5000",
	baseURL: "http://ipm-12-backend.herokuapp.com",
});

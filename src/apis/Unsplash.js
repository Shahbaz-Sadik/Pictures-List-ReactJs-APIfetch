import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 1FWUW4bzQWdZoDr-_Obvpbyj3H4jsbk6rvjG3EQE1J0",
  },
});

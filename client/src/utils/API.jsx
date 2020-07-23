import axios from "axios";

export default {
  //Get Requests for Information
  getUser: function(id){
    return axios.get("/api/users/" + id)
  },
  getJapanese: function() {
    return axios.get("/api/japanese");
  },
  getLetters: function() {
    return axios.get("/api/letters");
  },
  getVocab: function(id) {
    return axios.get("/api/vocab" + id);
  },
  //Create User
  createUser: function(request){
    return axios.post('/api/login', request)
  },
  //Update User
  updateUser: function(id, body){
    return axios.put("/api/users/update/" + id, body)
  },
}

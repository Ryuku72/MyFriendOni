import axios from "axios";

export default {
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

  updateUser: function(id, body){
    return axios.put("/api/users/update/" + id, body)
  },
}

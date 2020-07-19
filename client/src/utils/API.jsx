import axios from "axios";

export default {
  // Gets database
  getJapanese: function() {
    return axios.get("/api/japanese");
  },
  // Gets the book with the given id
  getUsers: function(id) {
    return axios.get("/api/vocab" + id);
  },

};

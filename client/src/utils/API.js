import axios from "axios";

export default {
  // Gets all books
  getDb: function() {
    return axios.get("/api/database");
  },
  // Gets the book with the given id
  getWords: function(id) {
    return axios.get("/api/vocab" + id);
  },
};

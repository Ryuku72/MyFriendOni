import axios from "axios";

export default {
  // Gets all books
  getDatabase: function() {
    return axios.get("/api/database");
  },
  // Gets the book with the given id
  getVocabRow: function(id) {
    return axios.get("/api/vocab" + id);
  },
};

import axios from "axios";

export default {
  // Gets all books
  getVocab: function() {
    return axios.get("/api/vocab");
  },
  // Gets the book with the given id
  getVocabRow: function(id) {
    return axios.get("/api/vocab" + id);
  },
};

import axios from "axios";

const voucher = { withCredentials: true }

export default {

  loginUser: function (request) {
    return axios.post("/api/login", request, voucher)
  },
  createUser: function (request) {
    return axios.post("/api/register", request, voucher)
  },
  logoutUser: function(){
    return axios.get("/api/logout")
  },

  getUser: function (id) {
    return axios.get("/api/users/" + id)
  },
  
  updatePoints: function (id, body) {
    return axios.put("/api/users/update/" + id, body)
  },
  updateLogin: function (id, body) {
    return axios.post("/api/users/" + id, body)
  },
  deleteUser: function (id) {
    return axios.delete("api/users/" + id)
  },

  //Quiz
  getJapanese: function () {
    return axios.get("/api/japanese");
  },
  getLetters: function () {
    return axios.get("/api/letters");
  },
  getVocab: function () {
    return axios.get("/api/vocab")
  },
  getFurigana: function () {
    return axios.get("/api/furigana")
  },



  //Create User



}

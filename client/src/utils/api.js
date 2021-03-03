import axios from "axios";
export default {
    getGoogleBooks: function(searchKeyword){
     return   axios.get("/api/googleBooks/"+searchKeyword)
    },
    createBook: function(newBook){
        return axios.post("/api/books", newBook)
    },
    getBooks: function(){
        return axios.get("/api/books")
    },
    deleteBooks: function(id){
        return axios.delete("/api/books/"+id)
    }
}
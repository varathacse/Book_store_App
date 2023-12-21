import React, { useEffect, useState } from "react";
import bookServices from "./BookService"
import {  useParams } from "react-router-dom";

let UpdateBook=()=> {
  const { id } = useParams();

  const [bookName, setBookName] = useState("");
  const [edition, setEdition] = useState("");
  const [yearOfPublish, setYearOfPublish] = useState("");
  const [price, setPrice] = useState("");
  const [authors, setAuthors] = useState([
    { id: 0, authorName: "", gender: "" },
  ]);



  const addAuthor = () => {
    setAuthors([...authors, { authorName: "", gender: "" }]);
  };

  const saveBook = (e) => {
    e.preventDefault();
    const book = {id, bookName, edition, yearOfPublish, price };
    console.log(book);
      bookServices
        .getUpdateBook(book)
        .then(() => {
          console.log(book);
          alert("Book Update Successfully");
          
        })
        .catch((err) => {
          console.log(err);
          alert("Please Provided valid information");
         
        });
  };

  useEffect(() => {
    bookServices
      .getBookById(id)
      .then((res) => {
        let book=res.data;
        
        setBookName(book.bookName);
        setEdition(book.edition);
        setYearOfPublish(book.yearOfPublish);
        setPrice(book.price);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="main1">
        <br></br>
        <div>
          <div>
            <h3 className="text-center">Update Book</h3>
            <div>
              <form onSubmit={saveBook}>
                <div className="form-group">
                  <label> Book Name: </label>
                  <input
                    placeholder="Enter Book Name"
                    name="bookName"
                    className="form-control"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Book Edition: </label>
                  <input
                    placeholder="Enter Book Edition"
                    name="edition"
                    className="form-control"
                    value={edition}
                    onChange={(e) => setEdition(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Year of Publish: </label>
                  <input
                    type="date"
                    placeholder="Enter YOP YYYY-MM-DD"
                    name="YearOfPublish"
                    className="form-control"
                    value={yearOfPublish}
                    onChange={(e) => setYearOfPublish(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Price: </label>
                  <input
                    name="price"
                    className="form-control"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                

                <button
                  type="button"
                  className="btn btn-info"
                  onClick={addAuthor}
                >
                  Add More Author
                </button>

                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ marginLeft: "10px" }}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default UpdateBook;

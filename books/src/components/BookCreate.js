import { useState, useContext } from "react";
import BooksContext from '../context/books';

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);


  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label className="title">Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create Book</button>
      </form>
    </div>
  );
}

export default BookCreate;

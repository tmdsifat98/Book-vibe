import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, author, image, rating, tags, category, bookId } = book;
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <div className="p-3 border border-gray-300 rounded-xl">
          <div className="bg-gray-300 rounded-xl ">
            <img
              className="h-[190px] mx-auto w-1/3 object-cover py-3"
              src={image}
              alt=""
            />
          </div>
          <div className="flex gap-3">
            {tags.map((tag) => (
              <button className="btn btn-sm rounded-2xl my-2 py-0 bg-gray-200 text-[#23BE0A] border-none">
                {tag}
              </button>
            ))}
          </div>
          <h1 className="text-2xl line-clamp font-bold my-5 font-playfair-display">
            {bookName}
          </h1>
          <p className="text-sm my-4 border-b border-dashed pb-4 border-gray-500">
            By: {author}
          </p>
          <div className="flex justify-between">
            <p>{category}</p>
            <p className="flex gap-2 py-3 items-center">
              {rating} <FaRegStar />{" "}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;

import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const numId = parseInt(id);
  const bookData = useLoaderData();
  const book = bookData.find((book) => book.bookId === numId);
  const {
    bookName,
    author,
    image,
    rating,
    yearOfPublishing,
    publisher,
    tags,
    category,
    review,
    totalPages,
  } = book;
  return (
    <div>
      <div className="flex gap-6 w-3/5 mx-auto my-20">
        <div className="w-1/2 flex justify-center items-center bg-gray-100 rounded-xl">
          <img className="h-96" src={image} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="font-playfair-display text-2xl font-semibold">{bookName}</h1>
          <p className="text-sm py-3">By: {author}</p>
          <p className="border-y border-gray-400 py-3 mb-3">{category}</p>
          <p className="text-sm"><span className="font-bold">Review :</span> {review}</p>
          <div className="flex gap-3 text-sm mt-2 items-center">
            {" "}
            <span className="font-bold">Tag</span>
            {tags.map((tag) => (
              <button className="btn btn-sm rounded-2xl my-2 py-0 bg-gray-200 text-[#23BE0A] border-none">
                #{tag}
              </button>
            ))}
          </div>
          <table className="table mt-1 border-none">
            <tbody className="text-sm font-semibold ">
              <tr>
                <td className="text-gray-700">Number of pages:</td>
                <td className=" font-bold">{totalPages}</td>
              </tr>
              <tr>
                <td className="text-gray-700">Publisher:</td>
                <td className=" font-bold">{publisher}</td>
              </tr>
              <tr>
                <td className="text-gray-700">Year of Publishing:</td>
                <td className=" font-bold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td className="text-gray-700">Rating:</td>
                <td className=" font-bold">{rating}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-3 mt-1">
            <button className="btn btn-outline btn-primary">Read</button>
            <button className="btn btn-primary ">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;

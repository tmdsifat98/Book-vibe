import React from "react";

const Book = ({ book }) => {
  const { bookName, author, image, review, tags } = book;
  return (
    <div>
      <div className="p-3 border border-gray-600">
        <div className="bg-gray-300 rounded-xl ">
          <img className="h-[190px] mx-auto w-1/3 object-cover py-3" src={image} alt="" />
        </div>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <button className="btn btn-sm rounded-2xl my-2 py-0 bg-gray-200 text-[#23BE0A] border-none">
              {tag}
            </button>
          ))}
        </div>
        <h1 className="text-2xl font-bold">{bookName}</h1>
      </div>
    </div>
  );
};

export default Book;

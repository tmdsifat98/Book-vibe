import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const {id} = useParams();
  const bookData=useLoaderData()
  return (
    <div>
      
    </div>
  );
};
export default BookDetails;

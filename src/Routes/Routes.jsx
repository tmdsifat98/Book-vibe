import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import About from "../Pages/About/About";
import { Suspense } from "react";
import Books from "../Components/Books/Books";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Home from "../Pages/Home/Home";

const bookResponse = fetch("bookCollection.json").then((res) => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "books",
        element: (
          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            <Books bookResponse={bookResponse}></Books>
          </Suspense>
        ),
      },
      {
        path: "books/:id",
        loader: () => fetch("bookCollection.json"),
        Component: BookDetails,
      },
      { path: "*", Component: Error },
    ],
  },
]);

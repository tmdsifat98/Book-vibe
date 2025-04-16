import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import About from "../Pages/About/About";
import { Suspense } from "react";
import Books from "../Components/Books/Books";

const bookResponse = fetch("bookCollection.json").then((res) => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "about", Component: About },
      {
        path: "books",
        element: (
          <Suspense>
            <Books bookResponse={bookResponse}></Books>
          </Suspense>
        ),
      },
      { path: "*", Component: Error },
    ],
  },
]);

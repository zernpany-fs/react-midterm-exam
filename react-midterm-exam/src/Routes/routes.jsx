import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";
import HomePage from "../Pages/HomePage";
import EditPage from "../Pages/EditPage";
import CreatePage from "../Pages/CreatePage";

export const router = createBrowserRouter([
  {
    path: "/notes",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/notes/new", Component: CreatePage },
      { path: "/notes/:noteId/edit", Component: EditPage },
    ],
  },
]);

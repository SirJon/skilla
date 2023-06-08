import { createBrowserRouter } from "react-router-dom";
import App from "@/pages/App/App";
import Calls from "@/pages/Calls/Calls";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "calls",
        element: <Calls/>,
      },
    ],
  },
]);
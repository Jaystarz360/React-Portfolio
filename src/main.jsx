// Imports
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import Footer from "./componets/Footer.jsx";
import Home from "./pages/home.jsx"
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Resume',
        element: <Resume />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/footer',
        element: <Footer />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

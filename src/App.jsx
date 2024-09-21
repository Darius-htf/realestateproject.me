import "./App.css";

// Layouts
import RootLayout from "./Layouts/RootLayout";

// Pages
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Agents from "./Pages/Agents/Agents";
import Contact from "./Pages/Contact/Contact";

// Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="s" element={<Services />} />
      <Route path="a" element={<Agents />} />
      <Route path="c" element={<Contact />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

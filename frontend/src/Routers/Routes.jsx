import { Routes, Route } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";

const AppRoute = () => {
  return(
    <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
    </Route>
  </Routes>
  )
}

export default AppRoute;

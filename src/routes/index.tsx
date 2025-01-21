import {Routes, Route} from "react-router";
import HomePage from "../components/Home/HomePage";
import Movies from "../components/Movies/Movies";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/movies" element={<Movies />}/>
    </Routes>
  )
}

export default Router

import imageBG from "../../images/collage-of-movie-posters-g2fdqahxlakaa7yq.jpg";
import Login from "../Login/Login";
import Navbar from "./Navbar/Navbar";
const HomePage = () => {
  return (
    <div className="flex w-full h-[100vh] flex-col">
      <img
        src={imageBG}
        alt="fondo"
        className="absolute w-full h-full object-cover brightness-50 bg-cover z-[-1]"
      />
      <Navbar />
      <Login />
    </div>
  );
};

export default HomePage;

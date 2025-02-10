import imageBG from "../../images/collage-of-movie-posters-g2fdqahxlakaa7yq.jpg";
import Login from "../Login/Login";
import Navbar from "./Navbar/Navbar";
const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={imageBG}
        alt="fondo"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.3] z-[-1]"
      />
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="flex items-center justify-center h-full">
        <Login />
      </div>
    </div>
  );
};

export default HomePage;

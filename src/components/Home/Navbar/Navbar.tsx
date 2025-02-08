import { Link } from "react-router";

const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <div className="flex bg-black text-white justify-around">
      <Link to={"/movies"}>MOVIES</Link>
      <Link to={"/series"}>SERIES</Link>
      <Link to={"/actors"}>ACTORS</Link>
    </div>
  );
};

export default Navbar;

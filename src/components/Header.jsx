import { IoPersonCircleSharp } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { DishList } from "../store/store";
import { Link } from "react-router-dom";
const Header = ({ setSelectedTab }) => {
  const { noOfItems } = useContext(DishList);
  return (
    <header>
      <div className="logo">
        <p>Rasoi Ki Khushboo</p>
        <span><FaStar /></span>
      </div>
      <div className="nav">
        <Link to="/" className="navlinks">Home</Link>
        <Link to="Menu" className="navlinks">Menu</Link>
        <Link to="OrderOnline" className="navlinks">Order Online</Link>
        <Link to="Reservation" className="navlinks">Reservation</Link>
        {/* <Link to="Contact" className="navlinks">Contact</Link> */}
        <a href="#contact-section" className="navlinks">Contact</a>
        <Link to="Login" className=" navlinks icons">
          <IoPersonCircleSharp style={{ fontSize: "20px", verticalAlign: "sub" }} />
          Log In
        </Link>
        <Link to="/Cart" className="icons">
          <GiShoppingCart style={{ fontSize: "20px", verticalAlign: "sub" }} />{noOfItems}
        </Link>
      </div>
      <div className="order-tag">
        <Link to="/OrderOnline" className="order-tag-el">
          Order Online
        </Link>
      </div>
    </header>
  );
};

export default Header;

import { CiMobile1 } from "react-icons/ci";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiStar } from "react-icons/ci";

const Home = () => {
  return (
    <div id="Home">
      <div className="tableDinner"></div>

      <div className="cardContainer">
        <div className="card1">
          <div><CiMobile1 style={{ width: "100px", height: "200px" }} /></div>
          <span className="headH">ORDER TO THE GO</span>
          <p className="paraH">
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
        </div>
        <div className="card2">
          <div><MdDeliveryDining style={{ width: "100px", height: "180px" }} /></div>
          <h2 className="headH">DOORSTEP DELIVERY</h2>
          <p className="paraH">
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
        </div>
        <div className="card3">
          <div className="containerImg"><MdOutlineShoppingBag style={{ width: "100px", height: "180px" }} /></div>
          <h2 className="headH">CURBSIDE PICKUP</h2>
          <p className="paraH">
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
        </div>
      </div>

      <div className="originalH">
        <span>ORIGINAL RECIPE SINCE 2035</span>
      </div>



      <div className="favH">
        <span><CiStar style={{ width: "50px", height: "50px" }} />&nbsp; ALL TIME FAVOURITES&nbsp;<CiStar style={{ width: "50px", height: "50px" }} /></span>

        <div className="foodCont">
          <div className="contFH" id="sandwich">
            <img src="homeImg/sandwich.jpg" alt="Creamy Vegetable Sandwich" />
            <label htmlFor="sandWich">CREAMY VEGETABLE SANDWICH</label>
          </div>
          <div className="contFH" id="sour">
            <img src="homeImg/sour.jpeg" alt="Veg Hot & Sour" />
            <label htmlFor="sour">VEG HOT & SOUR</label>
          </div>
          <div className="contFH">
            <img src="homeImg/fries.jpeg" alt="French Fries" id="fries" />
            <label htmlFor="fries">FRENCH FRIES</label>
          </div>
        </div>

        <div className="menuBH">
          <a href="#">Full Menu</a>
        </div>
      </div>



      <div className="specialWeek">
        <div className="cardSW">
          <span style={{ fontSize: "40px" }}><CiStar style={{ width: "50px", height: "50px" }} />&nbsp; SPECIAL OF THE WEEK&nbsp;<CiStar style={{ width: "50px", height: "50px" }} /></span>
          <span style={{ fontSize: "22px" }}>YOUR NEW GUILTY PLEASURE</span>
          <p className="paraH">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
        </div>

        <div>
          <img src="homeImg/ice-cream.avif" alt="Ice-Cream" style={{ width: "100%", height: "500px" }} />
        </div>
      </div>
      <div>5</div>
      <div>6</div>
    </div>
  );
}
export default Home;

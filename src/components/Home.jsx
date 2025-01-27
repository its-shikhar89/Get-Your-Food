import { CiMobile1 } from "react-icons/ci";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiStar } from "react-icons/ci";
const Home = () => {
  return (
    <div id="Home">

      {/* WELCOME IMAGE */}
      <div className="tableDinner"></div>

      {/* CARD SECTION */}
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

      {/* ORIGINAL RECIPE SECTION */}
      <div className="originalH">
        <span>ORIGINAL RECIPE SINCE 2035</span>
      </div>


      {/* ALL TIME FAVOURITE SECTION */}
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

      {/* SPECIAL WEEK SECTION */}
      <div className="specialWeek">
        <div className="cardSW">
          <div className="special-way">
            <span className="star">
              <CiStar style={{ width: "50px", height: "50px" }} />
            </span>
            <span style={{ fontSize: "40px" }}>
              SPECIAL OF THE WEEK
            </span>
            <span className="star">
              <CiStar style={{ width: "50px", height: "50px" }} />
            </span>
          </div>
          <span style={{ fontSize: "22px" }}>
            YOUR NEW GUILTY PLEASURE
          </span>
          <p className="paraH">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
        </div>
        <div className="special-icecream">
          <img src="homeImg/ice-cream.avif" alt="Ice-Cream" style={{ width: "100%", height: "500px" }} />
        </div>
      </div>


      {/* CRAVING SECTION */}
      <div className="craving-1">
        <div className="craving">
          <div className="craving-img"></div>
          <div className="craving-content">
            <div className="craving-h1">
              <p>WE DELIVER</p>
            </div>
            <div className="craving-h2">
              <p>SATISFYING YOUR CRAVING JUST GOT EASIER</p>
            </div>
            <div className="craving-p">
              <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
            </div>
            <div className="craving-order">
              <p>Order Online</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Home;

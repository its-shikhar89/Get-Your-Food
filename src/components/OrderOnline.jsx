import './OrderOnline.css';
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import OrderCard from './OrderCard';
import { useContext, useState } from 'react';
import { DishList } from '../store/store';

const OrderOnline = () => {
  const { dishList } = useContext(DishList);

  return (
    <div className="orderOnline">
      <div className="order-available">
        <div className="order-accept">
          <div className="accept-circle"></div>
          <div className="accept-content">Accepting Orders</div>
        </div>
      </div>
      <div className="delivery-ops">
        <div className="delivery-now">Pickup</div>
        <div className="takeaway">Delivery</div>
      </div>
      <div className="time-add">
        <div className="pickup-time">
          <div className="time-icon">
            <IoTimeOutline />
          </div>
          <div className="time-content">
            Pickup time: up to 30 minutes
          </div>
        </div>
        <div className="delivery-address">
          <div className="location-icon">
            <CiLocationOn />
          </div>
          <div className="location-add">
            Pickup Address: 500 Terry Francine Street, San Francisco, CA 94158
          </div>
        </div>
      </div>

      <div className="order-items">
        <div className="soup">
          <div className='item-category'>SOUP</div>
          <div className="order-product">
            {dishList.SOUP.map((soup) => (
              <OrderCard key={soup.id} dish={soup} />
            ))}
          </div>
        </div>

        <div className="main-course">
          <div className='item-category'>INDIAN MAIN COURSE</div>
          <div className="order-product">
            {dishList.MAIN_COURSE.map((main_course) => (
              <OrderCard key={main_course.id} dish={main_course} />
            ))}
          </div>
        </div>

        <div className="assorted-breads">
          <div className='item-category'>ASSORTED BREADS</div>
          <div className="order-product">
            {dishList.ASSORTED_BREADS.map((ass_breads) => (
              <OrderCard key={ass_breads.id} dish={ass_breads} />
            ))}
          </div>
        </div>

        <div className="special-offers">
          <div className='item-category'>SPECIAL OFFERS</div>
          <div className="order-product">
            {dishList.SPECIAL_OFFERS.map((sp_off) => (
              <OrderCard key={sp_off.id} dish={sp_off} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderOnline;
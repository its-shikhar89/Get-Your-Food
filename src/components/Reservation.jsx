import { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [guests, setGuest] = useState("2 guests");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("12:00 AM");
  const [selectedSlot, setSelectedSlot] = useState("");

  const timeSlots = [
    "10:15 PM", "10:30 PM", "10:45 PM", "11:00 PM", "11:15 PM", "11:30 PM", "11:45 PM", "12:00 AM", "12:15 AM", "12:30 AM", "12:45 AM", "1:00 AM", "1:15 AM", "1:30 AM", "1:45 AM",
  ];

  const handelGuestSize = (e) => {
    setGuest(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Details:
    Guests: ${guests}
    Date: ${date}
    Time: ${time}
    Slot: ${selectedSlot}`);
  };

  return (
    <div className='reservation-container'>
      <div className="reservation-content">
        <div className="reser-req">Request a reservation</div>
        <div className="reser-p">Select your details and we'll try to get the best seats for you.</div>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className='reser-form-row'>
          <div className="reser-form-group">
            <label htmlFor="guests" className='reser-label'>Party size</label>
            <select id="guests" value={guests} onChange={handelGuestSize}>
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
              <option>5 guests</option>
              <option>6 guests</option>
            </select>
          </div>
          <div className="reser-form-group">
            <label htmlFor="date" className='reser-label'>Date</label>
            <input id='date' type="date" value={date} onChange={handleDateChange} />
          </div>
          <div className="reser-form-group">
            <label htmlFor="time" className='reser-label'>Time</label>
            <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="">Select Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
        <hr className='hello' />
        <div className="time-slot-section">
          <h4>Choose an available time slot:</h4>
          <div className="time-slots">
            {timeSlots.map((slot) => (
              <button key={slot} type="button" className={`time-slot ${selectedSlot === slot ? "selected" : ""
                }`} onClick={() => setSelectedSlot(slot)}>
                {slot}
              </button>
            ))}
          </div>
          <button type='submit' className='submit-btn'>Request Now</button>
        </div>
      </form>
    </div >
  );
}

export default Reservation;
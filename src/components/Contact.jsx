import './Contact.css';

const Contact = () => {
  return (
    <div id="contact-section">
      {/* CONTACT */}
      <div id='contact'>
        <p className='part1'>CONTACT US</p>
        <p className='part2'>DROP US A LINE AND WE'LL GET BACK TO YOU</p>
        <div className="form-container">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First name *</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last name *</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mess">Leave us a message...</label>
              <textarea id="message" rows="3"></textarea>
            </div>

            <button type='submit' className='submit-button'>Submit</button>
          </form>
        </div>
      </div>


      {/* TIMING */}
      <div id='timing'>
        <p className='timing-heading'>WE'RE OPEN</p>
        <br />
        <p className='timing-t'>Monday-Friday : 11am-10pm</p>
        <p className='timing-t'>Saturday-Sunday: 11am-12am</p>
        <br />
        <p className='timing-t'>500 Terry Francois Street,</p>
        <p className='timing-t'>San Francisco, CA 94158</p>
        <p className='timing-t'>Tel: 123-456-7890</p>
        <br />
        <p className='timing-t'>Email: info@mysite.com</p>
      </div>
    </div >
  );
}

export default Contact;
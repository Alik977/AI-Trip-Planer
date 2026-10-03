import "./Global.css";
import contact from "..//assets/img/icon contact/contact_info.png";
import Email from "..//assets/img/icon contact/email.png";
import phone from "..//assets/img/icon contact/phone.png";
import follow from "..//assets/img/icon contact/ai_trip_planner_logo_icon.png";
function Contact() {
  return (
    <div className="allcontact">
      <div className="leftblock">
        <h3 className="leftblokh3">
          Get in Touch <span className="line">_____</span>{" "}
        </h3>
        <h1 className="leftblokh1">
          Let's Plan Your <span className="adventure"> Next Adventure</span>
        </h1>
        <p className="contact">
          Have a question or need help planning your trip? We’re here to help.
          Whether you need assistance with your travel plans, have a suggestion,
          or simply want to say hello, feel free to get in touch with us. Let’s
          make your next journey unforgettable. ✈️
        </p>
      </div>
      <div className="formscontact">
        <div className="contactinfo">
          {" "}
          <form action="Contact">
            <h3 className="contactname">
              {" "}
              <img src={contact} alt="" className="contactimg" />
              Contact information <span className="linecontact">______</span>
            </h3>
            <div className="formcall">
              <div className="emailcontact">
                <img src={Email} alt="" className="Emailimg" />
                <a href="mailto:alik.hakobyan.dev@gmail.com" class="email">
                  alik.hakobyan.dev@gmail.com
                </a>
              </div>
              <div className="phonecontact">
                <img src={phone} alt="" className="Emailimg" />
                <a href="tel:+37499353575" class="phone">
                  +374 41 45 98 04
                </a>
              </div>
               <div className="followcontact">
                <img src={follow} alt="" className="Emailimg" />
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;

import "./Global.css";
import contact from "..//assets/img/icon contact/contact_info.png";
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
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;

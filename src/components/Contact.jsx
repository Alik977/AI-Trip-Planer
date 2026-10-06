import "./Global.css";
import contact from "..//assets/img/icon contact/contact_info.png";
import Email from "..//assets/img/icon contact/email.png";
import phone from "..//assets/img/icon contact/phone.png";
import follow from "..//assets/img/icon contact/instagram.png";
import follow1 from "..//assets/img/icon contact/facebook.png";
import send from "..//assets/img/icon contact/send_message.png";
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
      <div className="globalcontact">
        <div className="formscontact">
          <div className="contactinfo">
            {" "}
            <form action="Contact">
              <h3 className="contactname">
                {" "}
                <img src={contact} alt="" className="contactimg" />
                Contact information <span className="linecontact" aria-hidden="true">______</span>
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
                  <a href="" target="blank">
                    <img src={follow} alt="" className="Emailimg" />
                  </a>
                  <a href="" target="blank">
                    <img src={follow1} alt="" className="Emailimg" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
       <div className="contactrighy">
  <section className="form-section">
    <h2 className="sendh2">
      <img src={send} alt="" className="send" />
      Send a Message
      <span className="linecontact" aria-hidden="true"></span>
    </h2>

    <form
      className="contact-form"
      action="mailto:alik.hakobyan.dev@gmail.com"
      method="post"
      encType="text/plain"
    >
      <label className="field">
        <span className="field-label">Name</span>
        <input type="text" name="name" placeholder="Your name" required />
      </label>

      <label className="field">
        <span className="field-label">Email</span>
        <input type="email" name="email" placeholder="Email address" required />
      </label>

      <label className="field">
        <span className="field-label">Phone</span>
        <input type="tel" name="phone" placeholder="Phone number" required />
      </label>

      <label className="field">
        <span className="field-label">Subject</span>
        <input type="text" name="subject" placeholder="Subject" required />
      </label>

      <label className="field field-full">
        <span className="field-label">Message</span>
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          required
        ></textarea>
      </label>

      <button type="submit" className="bottomsend">
        Send message
      </button>
    </form>
  </section>
</div>
      </div>
    </div>
  );
}
export default Contact;

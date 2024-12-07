import "@/app/Style/contact.css";

export default function Contact() {
  return (
    <div id="Contact">
      <section className="CSec">
        <div className="CD1">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7235.575092201965!2d67.00408413903678!3d24.93930648997359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3400637d677ad%3A0xdd56287fcc6b36b8!2sSector%206%20Orangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731089421376!5m2!1sen!2s"
            style={{ filter: "contrast(1.2) opacity(0.4)" }}
          />
        </div>
        <div className="CD2">
          <div className="CD3">
            <h2 className="CD3h2">
              CONTACT
            </h2>
            <p className="CD3p">
              Feel free to Contact
            </p>
            <div className="CD4 ">
              <label htmlFor="email" className="CD4L">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="CD4I"
              />
            </div>
            <div className="CD4">
              <label htmlFor="message" className="CD4L">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="CD4I CD4T"
                defaultValue={""}
              />
            </div>
            <button className="ConBut">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
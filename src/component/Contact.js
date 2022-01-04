import React from 'react'

function Contact() {
    return (
        <div>
             <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-text">
                <h4>Get In Touch</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-form">
                      <form>
                        <input type="text" placeholder="Name" className="form-control" /><br />
                        <input type="text" placeholder="Email" className="form-control" /><br />
                        <input type="int" placeholder="Phone" className="form-control" /><br />
                        <textarea className="text-massage" placeholder="Massage" defaultValue={""} />
                      </form>
                      <button className="btn btn-block">Send Massage</button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-form">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27234.817293701366!2d74.24423844984837!3d31.43197057785048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901080b110569%3A0x33b0fb0b941e5adf!2sWAPDA%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1621541805292!5m2!1sen!2s" allowFullScreen loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Contact

import React from 'react'

function Footer() {
    return (
        <div>
             <div className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="newsletter_text">
                  <h4>NEWSLETTER</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="newsletter_text1">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis lorem augue, at quam finibus eget.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="newsletter_text2">
                  <form id name>
                    <input type placeholder="Email" id name />
                    <button>Submit</button>
                  </form>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer_link_block1">
                  <h5>CONTACT US</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">20, floor, Restaurant Food &amp; Drinks, Nr, Queenslad Victoria Building, USA</a></li>
                    <li><a href="#">1800 000 0000,+88 123 1234 1234</a></li>
                    <li><a href="#">info@yourdomainname.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_link_block2">
                  <h5>INFORMATION</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Delivery Information</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_link_block3">
                  <h5>OPEN HOURS</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">Monday - Friday : 9 am to 12 am.</a></li>
                    <li><a href="#">Saturday - Sunday : 24 Hour Open</a></li>
                    <li><a href="#">Breakfast : 7 am to 12 pm</a></li>
                    <li><a href="#">Lunch : 12 pm to 7 pm</a></li>
                    <li><a href="#">Dinner : 7 am to 12 am</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_link_block4">
                  <h5>INSTAGRAM</h5>
                  <ul className="list-unstyled">
                    <li><img src="images/6.jpg" /></li>
                    <li><img src="images/7.jpg" /></li>
                    <li><img src="images/8.jpg" /></li>
                  </ul>
                  <ul className="list-unstyled">
                    <li><img src="images/9.jpg" /></li>
                    <li><img src="images/10.jpg" /></li>
                    <li><img src="images/11.jpg" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer

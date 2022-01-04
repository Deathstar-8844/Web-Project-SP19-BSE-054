import React from 'react'

function About() {
    return (
        <div>
            <div className="content">    
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content_text">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>About Our Restaurant Food &amp; Drinkes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi numquam nostrum ea eligendi deserunt adipisci cupiditate ut eos, amet laudantium libero nam, veritatis minima. Accusantium veniam iste molestias nostrum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="images/17.png" alt="Los Angeles" width={1100} height={500} /> 
                    </div>
                    <div className="carousel-item">
                      <img src="images/18.png" alt="Chicago" width={1100} height={500} />
                    </div>
                    <div className="carousel-item">
                      <img src="images/24.jpg" alt="New York" width={1100} height={500} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Chef">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="chef-content">
                  <h3>Our Chefs</h3>
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="chef_text">
                        <img src="images/20.jpg" />
                        <div className="chef-caption">
                          <h3>John Deo</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam<br /></p>
                        </div>
                      </div>
                    </div> 
                    <div className="col-lg-3">
                      <div className="chef_text">
                        <img src="images/21.jpg" />
                        <div className="chef-caption">
                          <h3>John Deo</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam<br /></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="chef_text">
                        <img src="images/22.jpg" />
                        <div className="chef-caption">
                          <h3>John Deo</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam<br /></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="chef_text">
                        <img src="images/20.jpg" />
                        <div className="chef-caption">
                          <h3>John Deo</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam<br /></p>
                        </div>
                      </div>
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

export default About

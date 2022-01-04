import React from 'react'

function Carousel() {
    return (
        <div>
             <div className="slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/image%202.jpg" alt="Los Angeles" width={1100} height={500} /> 
            </div>
            <div className="carousel-item">
              <img src="images/14.jpg" alt="Chicago" width={1100} height={500} />
            </div>
            <div className="carousel-item">
              <img src="images/23.jpg" alt="New York" width={1100} height={500} />
            </div>
            <div className="carousel-caption">
              <h1>LOVES HEALTHY FOOD</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
            </div>
            <div className="col-lg-12">
              <div className="btn15">
                <a href>TODAY'SMENU</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Carousel

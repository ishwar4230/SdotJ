import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

function AppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/image1.jpg" alt="Image 1" />
        <Carousel.Caption>
          <h4>Book your stay with SDOTJ.</h4>
          <p>
            <span>
              1,480,086&nbsp;rooms&nbsp;around&nbsp;the&nbsp;world&nbsp;are&nbsp;waiting&nbsp;for&nbsp;you!
            </span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/image2.jpg" alt="Image 2" />
        <Carousel.Caption>
          <h4>Book your stay with SDOTJ.</h4>
          <p>
            <span>
              1,480,086&nbsp;rooms&nbsp;around&nbsp;the&nbsp;world&nbsp;are&nbsp;waiting&nbsp;for&nbsp;you!
            </span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/image3.jpg" alt="Image 3" />
        <Carousel.Caption>
          <h4>Book your stay with SDOTJ.</h4>
          <p>
            <span>
              1,480,086&nbsp;rooms&nbsp;around&nbsp;the&nbsp;world&nbsp;are&nbsp;waiting&nbsp;for&nbsp;you!
            </span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppCarousel;

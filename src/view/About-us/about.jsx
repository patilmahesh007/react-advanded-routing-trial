import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import MEETING from "../MEETING";
import "./about.css";

function About() {
  let { meetingId } = useParams();
  let meetingObject = MEETING.filter((item) => item.id == meetingId);
  meetingObject = meetingObject[0];

  const [mainImage, setMainImage] = useState(meetingObject.image);

  const handleMouseOver = (sliderImage) => {
    setMainImage(sliderImage);
  };

  return (
    <>
      <Navbar />
      <h1 className="about-heading">{meetingObject.name}</h1>

      
      <div className="image-slider-container">
        <div className="slider-div1">
          <img src={mainImage} alt="Main" />
        </div>
        <div className="slider-div2">
          {meetingObject.slider.map((sliderImage, index) => (
            <img
              key={index}
              src={sliderImage}
              alt={`Slider ${index}`}
              onMouseOver={() => handleMouseOver(sliderImage)}
            />
          ))}
        </div>
      </div>
      <div className="about-description"> <p>{meetingObject.description}</p></div>
      <Footer />
    </>
  );
}

export default About;

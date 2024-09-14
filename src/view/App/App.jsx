import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import MEETING from "../MEETING"
import { Link } from "react-router-dom"
import "./App.css"
function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">  {MEETING.map((item, index) => (
        <div >
          <div className="card1">
            <div className="card1-div1"><img src={item.image} /></div>
            <div className="card1-div2">
          <Link className="link-name" key={index} to={"/id/" + item.id}>{item.name}</Link>

            </div>
          </div>

        </div>))}</div>


      <Footer />
    </>
  )
}

export default Contact
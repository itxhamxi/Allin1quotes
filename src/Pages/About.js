import React from 'react'
import { FaWhatsapp,FaFacebook,IoLogoTwitter,GrInstagram, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer.js"

const imgStyle = {
    // width:'50%',
    height: '82vh'
}
function About() {

    return (
        <div className="about-wrapper">
        <div className="container-fluid slider">
            <div className="container">
                <div
                    id="carouselExampleControls"
                    className="carousel slide "
                    data-ride="carousel">
                    <div className="carousel-inner" style={imgStyle}>
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100 img-width"
                                src="../images/group.jpg"
                                alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../images/hamza.jpg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../images/hamza1.jpg" alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="../images/sibi.jpg" alt="Third slide"/>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <section className="about-content">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>Who We Are</h1>
                            <hr className="about-who"></hr>
                            <p>Allin1quotes is a newest launched quotes,caption,poetry and motivation
                                sayings website.our mission is to provide you the best quotes, captions, poetry
                                and sayings to get you and your friends motivated.Allin1quotes has launched in
                                september 2020</p>

                        </div>
                        <div className="col-md-4 ">
                            <h1>90 Million</h1>
                            <hr className="about-90"></hr>
                            <p>Members</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-8">
                        <h1>Message from Founders</h1>
                        <hr className="about-message"></hr>
                            <p>Reading is Fundamental. In fact, it is one of the most important ingredients
                                to becoming all that you can be. Reading develops your brain, provides a window
                                into the world around you and helps you do better in all school subjects. Most
                                importantly, reading can not only help you become a better student, but a better
                                person. You can learn from the brightest people whenever and wherever you
                                choose.</p>
                        </div>
                        <div className="col-md-4 ">
                            <h1>Founders</h1>
                            <hr className="about-founders"></hr>
                            <p>Hamza Hayat</p>
                            <p>Sibghat Ullah</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Support Us</h1>
                            <hr className="about-support"></hr>
                            <a className="icons"   href="https://www.whatsapp.com"><FaWhatsapp color="blue" size="5rem" /></a>
                            <a className="icons"  href="https://www.facebook.com"><FaFacebook color="blue" size="5rem" /></a>
                            <a  className="icons" href="https://www.twitter.com"><FaTwitter color="blue" size="5rem" /></a>
                            <a  className="icons" href="https://www.instagram.com"><FaInstagram color="blue" size="5rem" /></a>
                        </div>
                    </div>
                </section>
               

            </div>
           
        </div>
         <Footer/>
         </div>
    )
}

export default About

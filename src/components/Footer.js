import React from 'react'
import { FaWhatsapp,FaFacebook,IoLogoTwitter,GrInstagram, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div>
            
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Allin1<span>Quotes</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">About</a>
				
					<a href="#">Contact us</a>
				
					
				</p>

				<p class="footer-company-name"> Pakboys © 2020</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Pakboys</span> Rawalpindi, Pakistan</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+923355912855</p>
					
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">hamzahayat1888@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					
				</p>

				<div class="footer-icons">

				<a className="footer-icons"   href="https://www.whatsapp.com"><FaWhatsapp color="blue" size="1rem" /></a>
                            <a className="footer-icons"  href="https://www.facebook.com"><FaFacebook color="blue" size="1rem" /></a>
                            <a  className="footer-icons" href="https://www.twitter.com"><FaTwitter color="blue" size="1rem" /></a>
                            <a  className="footer-icons" href="https://www.instagram.com"><FaInstagram color="blue" size="1rem" /></a>

				</div>

			</div>

		</footer>
        </div>
    )
}

export default Footer

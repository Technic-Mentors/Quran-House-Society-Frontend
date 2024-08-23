import { Link, useLocation } from "react-router-dom"
export default function Footer() {
    const { pathname } = useLocation()

    const moveToTop = (Link) => {
        if (pathname === Link) {
            scrollTo(0, 0)
        }
    }
    return (
        <div className="footerBg mt-5">
            <div className="footerOverlay">
                <div className="container">
                    <div className="row justify-content-between pt-3 pb-4">
                        <div className="col-md-4 mt-3">
                            <h3>Quran House</h3>
                            <p>Quran House Society is dedicated to empowering communities through education and understanding of the Quran. Our mission is to promote Quranic knowledge and values, foster unity, and inspire compassion within our community.</p>
                            <div className="social-links mt-4">
                                <i className="fab fa-facebook me-3"></i>
                                <i className="fab fa-twitter me-3"></i>
                                <i className="fab fa-linkedin me-3"></i>
                                <i className="fab fa-youtube me-3"></i>
                                <i className="fab fa-pinterest"></i>
                            </div>
                        </div>
                        <div className="col-md-2 mt-3 siteLinks">
                            <h3>Site Links</h3>

                            <Link to="/" onClick={moveToTop("/")}> <li><i className="fas fa-angle-double-right me-2" ></i>Home</li> </Link>
                            <Link to="/about" onClick={moveToTop("/about")}> <li><i className="fas fa-angle-double-right me-2"></i>About</li> </Link>
                            <Link to="/video-lectures" onClick={moveToTop("/video-lectures")}> <li><i className="fas fa-angle-double-right me-2"></i>Video Lectures</li> </Link>
                            <Link to="/audio-lectures" onClick={moveToTop("/audio-lectures")}> <li><i className="fas fa-angle-double-right me-2"></i>Audio Lectures</li> </Link>
                            <Link to="/adminLogin" onClick={moveToTop("/adminLogin")}>  <li><i className="fas fa-angle-double-right me-2"></i>Admin</li></Link>
                            <Link to="/contact" onClick={moveToTop("/contact")}> <li><i className="fas fa-angle-double-right me-2"></i>Contact Us</li> </Link>

                        </div>
                        <div className="col-md-4 mt-3 contactInfo">
                            <h3>Contact Us</h3>
                            <p><i className="fas fa-map me-2"></i> Wassalam 54 L,Valencia Town, Lahore</p>
                            <p className="mt-3"><i className="fas fa-phone me-2"></i> +92 300 8454065</p>
                            <p className="mt-3"><i className="fas fa-envelope me-2"></i>  usman@mk.com.pk</p>
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <p>Capobrain, All rights reserved. Developed With Love By <a href="https://technicmentors.com" target="blank"> Technic Mentors</a></p>
                </div>
            </div>
        </div>
    )
}

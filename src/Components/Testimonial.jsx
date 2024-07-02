import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userImg from "../assets/user-img.png"
import { useEffect, useState } from "react";
export default function Testimonial() {
    const [itemsToShow, setItemsToShow] = useState(3)
    useEffect(() => {
        if (window.innerWidth <= 600){
            setItemsToShow(1)
        }
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        pauseOnHover: false,
        speed: 500,
        slidesToShow: itemsToShow,
        slidesToScroll: 1
    };
    return (
        <div className="container py-5">
            <div className="row g-4">
                <h1 className="text-center">What Our Students Say About Us! </h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="sliderContent">
                            <div className="d-flex justify-content-center sliderImg">
                                <img src={userImg} className="img-fluid" style={{ width: "110px" }} alt="" />
                            </div>
                            <h3>Name Here</h3>
                            <i className="fas fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        <div className="sliderContent">
                            <div className="d-flex justify-content-center">
                                <img src={userImg} className="img-fluid" style={{ width: "110px" }} alt="" />
                            </div>
                            <h3>Name Here</h3>
                            <i className="fas fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        <div className="sliderContent">
                            <div className="d-flex justify-content-center">
                                <img src={userImg} className="img-fluid" style={{ width: "110px" }} alt="" />
                            </div>
                            <h3>Name Here</h3>
                            <i className="fas fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        <div className="sliderContent">
                            <div className="d-flex justify-content-center">
                                <img src={userImg} className="img-fluid" style={{ width: "110px" }} alt="" />
                            </div>
                            <h3>Name Here</h3>
                            <i className="fas fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
